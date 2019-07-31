using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;

namespace Webapi.Repositories
{
  public class TokenGenerator
  {
    private readonly IConfiguration config;

    public TokenGenerator(IConfiguration config) { this.config = config; }

    public string GenerateAuthenticationToken(string userId, string userRole, string userEmail, bool isEmailConfirmed)
    {
      var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.config["JWT_SECRET"].ToString()));
      var securityAlgorithm = SecurityAlgorithms.HmacSha256Signature;
      var options = new IdentityOptions();
      var tokenDescriptor = new SecurityTokenDescriptor
      {
        Subject = new ClaimsIdentity(new Claim[]
        {
          new Claim("id", userId), // "UserId"
          new Claim(options.ClaimsIdentity.RoleClaimType, userRole),
          new Claim("email", userEmail),
          new Claim("isEmailConfirmed", isEmailConfirmed.ToString())
        }),
        Expires = DateTime.UtcNow.AddDays(1),
        SigningCredentials = new SigningCredentials(securityKey, securityAlgorithm)
      };
      var tokenHandler = new JwtSecurityTokenHandler();
      var securityToken = tokenHandler.CreateToken(tokenDescriptor);
      var token = tokenHandler.WriteToken(securityToken);
      return token;
    }
  }
}