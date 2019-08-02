using System.ComponentModel.DataAnnotations;

namespace Webapi.RequestModels
{
  public class CreateProductRequest
  {
    [Required]
    [MaxLength(60)]
    public string Title { get; set; }

    [MaxLength(255)]
    public string Image { get; set; } = "no image";

    public decimal Price { get; set; } = 0M;

    [Required]
    [MaxLength(60)]
    public string Company { get; set; }

    [MaxLength(1024)]
    public string Info { get; set; } = "no info";
  }
}
