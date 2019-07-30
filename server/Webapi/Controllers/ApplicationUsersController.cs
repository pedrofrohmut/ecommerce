using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Webapi.Models;
using Webapi.RequestModels;

namespace Webapi.Controllers
{
  [Route("api/v1/application_users")]
  [ApiController]
  public class ApplicationUsersController : ControllerBase
  {
    private readonly UserManager<ApplicationUser> userManager;
    private readonly SignInManager<ApplicationUser> signInManager;

    public ApplicationUsersController(
      UserManager<ApplicationUser> userManager,
      SignInManager<ApplicationUser> signInManager)
    {
      this.userManager = userManager;
      this.signInManager = signInManager;
    }

    [HttpPost]
    public async Task<ActionResult> SignUp([FromBody] ApplicationUserRequest requestBody)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest("Request body is invalid");
      }

      var applicationUser = new ApplicationUser
      {
        UserName = requestBody.UserName,
        Email = requestBody.Email,
        FullName = requestBody.FullName
      };

      try
      {
        var result = await this.userManager.CreateAsync(applicationUser, requestBody.Password);
        // var userCreated = await this.userManager.FindByEmailAsync(requestBody.Email);
        if (result.Succeeded)
        {
          return Ok(new
          {
            email = requestBody.Email,
            result
          });
        }
        else
        {
          return BadRequest(new { errors = result.Errors });
        }
      }
      catch (Exception ex)
      {
        throw ex;
      }
    }
  }
}