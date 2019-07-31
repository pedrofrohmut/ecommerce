using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Webapi.Models;
using Webapi.RequestModels;
using Webapi.Repositories;

namespace Webapi.Controllers
{
  [Route("api/v1/application_users")]
  [ApiController]
  public class ApplicationUsersController : ControllerBase
  {
    private readonly UserManager<ApplicationUser> userManager;
    private readonly SignInManager<ApplicationUser> signInManager;
    private readonly IConfiguration config;
    private readonly TokenGenerator tokenGenerator;

    public ApplicationUsersController(
      UserManager<ApplicationUser> userManager,
      SignInManager<ApplicationUser> signInManager,
      IConfiguration config,
      TokenGenerator tokenGenerator)
    {
      this.userManager = userManager;
      this.signInManager = signInManager;
      this.config = config;
      this.tokenGenerator = tokenGenerator;
    }

    [HttpPost]
    public async Task<ActionResult> SignUp([FromBody] ApplicationUserRequest requestBody)
    {
      if (!ModelState.IsValid)
        return BadRequest(new { message = "Request body is invalid" });

      var applicationUser = new ApplicationUser
      {
        UserName = requestBody.UserName,
        Email = requestBody.Email,
        FullName = requestBody.FullName
      };

      try
      {
        var result = await this.userManager.CreateAsync(applicationUser, requestBody.Password);

        // Manually added Roles in DB = "1 - Admin" & "2 - Customer"
        if (requestBody.AdminKey != null && requestBody.AdminKey == this.config["ADMIN_KEY"])
          await this.userManager.AddToRoleAsync(applicationUser, "Admin");
        else
          await this.userManager.AddToRoleAsync(applicationUser, "Customer");

        if (result.Succeeded)
          return Ok(new { email = requestBody.Email, result });
        else
        {
          var error = result.Errors.ToList().First();
          var code = error.Code;
          var desc = error.Description;
          return BadRequest(new { errors = new { global = code + ": " + desc } });
        }
      }
      catch (Exception ex) { throw ex; }
    }

    [HttpPost("signin")]
    public async Task<ActionResult> SignIn([FromBody] SignInRequest requestBody)
    {
      if (!ModelState.IsValid)
        return BadRequest(new { errors = new { global = "Request body is invalid" } });

      var user = await this.userManager.FindByEmailAsync(requestBody.Email);

      if (user == null || await this.userManager.CheckPasswordAsync(user, requestBody.Password) == false)
        return BadRequest(new { errors = new { global = "E-mail not found or password is incorrect" } });

      var role = await this.userManager.GetRolesAsync(user);
      var userRole = role.FirstOrDefault();
      var token = this.tokenGenerator.GenerateAuthenticationToken(user.Id, userRole, requestBody.Email, false);

      return Ok(new { token = token, email = requestBody.Email, isEmailConfirmed = false });
    }
  }
}