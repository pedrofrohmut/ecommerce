using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.AspNetCore.Identity;

namespace Webapi.Models
{
  public class ApplicationUser : IdentityUser
  {
    [MaxLength(150)]
    public string FullName { get; set; }
  }
}