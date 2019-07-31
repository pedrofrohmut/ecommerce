using System.ComponentModel.DataAnnotations;

namespace Webapi.RequestModels
{
  public class ApplicationUserRequest
  {
    [Required]
    [StringLength(20)]
    public string UserName { get; set; }

    [Required]
    [StringLength(255)]
    public string Email { get; set; }

    [Required]
    [StringLength(20)]
    public string Password { get; set; }

    [Required]
    [StringLength(64)]
    public string FullName { get; set; }

    public string AdminKey { get; set; }
  }
}