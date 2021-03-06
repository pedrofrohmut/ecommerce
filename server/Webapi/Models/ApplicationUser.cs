using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace Webapi.Models
{
  public class ApplicationUser : IdentityUser
  {
    [MaxLength(150)]
    public string FullName { get; set; }
  }
}