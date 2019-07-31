using System;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
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
    private readonly IConfiguration config;

    public ApplicationUsersController(
      UserManager<ApplicationUser> userManager,
      SignInManager<ApplicationUser> signInManager,
      IConfiguration config)
    {
      this.userManager = userManager;
      this.signInManager = signInManager;
      this.config = config;
    }

    [HttpPost]
    public async Task<ActionResult> SignUp([FromBody] ApplicationUserRequest requestBody)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(new { message = "Request body is invalid" });
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

        // Manually added Roles in DB = "1 - Admin" & "2 - Customer"
        if (requestBody.AdminKey != null && requestBody.AdminKey == this.config["ADMIN_KEY"])
        {
          await this.userManager.AddToRoleAsync(applicationUser, "Admin");
        }
        else
        {
          await this.userManager.AddToRoleAsync(applicationUser, "Customer");
        }

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
          var error = result.Errors.ToList().First();
          var code = error.Code;
          var desc = error.Description;
          return BadRequest(new
          {
            errors = new
            {
              global = code + ": " + desc
            }
          });
        }
      }
      catch (Exception ex)
      {
        throw ex;
      }
    }

    [HttpPost("signin")]
    public async Task<ActionResult> SignIn([FromBody] SignInRequest requestBody)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(new
        {
          errors = new
          {
            global = "Request body is invalid"
          }
        });
      }

      var user = await this.userManager.FindByEmailAsync(requestBody.Email);

      if (user == null || await this.userManager.CheckPasswordAsync(user, requestBody.Password) == false)
      {
        return BadRequest(new
        {
          errors = new
          {
            global = "E-mail not found or password is incorrect"
          }
        });
      }

      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.config["JWT_SECRET"].ToString()));
      var algorithm = SecurityAlgorithms.HmacSha256Signature;

      var role = await this.userManager.GetRolesAsync(user);
      IdentityOptions options = new IdentityOptions();

      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new Claim[]
        {
          new Claim("UserID", user.Id.ToString()),
          new Claim(options.ClaimsIdentity.RoleClaimType, role.FirstOrDefault()),
          new Claim("email", requestBody.Email),
          new Claim("isEmailConfirmed", "false")
        }),
        Expires = DateTime.UtcNow.AddDays(1),
        SigningCredentials = new SigningCredentials(key, algorithm)
      };

      var tokenHandler = new JwtSecurityTokenHandler();
      var securityToken = tokenHandler.CreateToken(tokenDescriptor);
      var token = tokenHandler.WriteToken(securityToken);

      // TODO: generate Token
      return Ok(new
      {
        token = token,
        email = requestBody.Email,
        isEmailConfirmed = false // TODO: implement E-mail confirmation
      });
    }
  }
}