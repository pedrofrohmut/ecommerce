using System.ComponentModel.DataAnnotations;

namespace Webapi.RequestModels
{
  public class SignInRequest
  {
    [Required]
    [StringLength(255)]
    public string Email { get; set; }

    [Required]
    [StringLength(20)]
    public string Password { get; set; }
  }
}