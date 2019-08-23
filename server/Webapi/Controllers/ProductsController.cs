using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Webapi.Models;
using Webapi.Repositories;
using Webapi.RequestModels;

namespace Webapi.Controllers
{
  [Route("api/v1/products")]
  [ApiController]
  public class ProductsController : ControllerBase
  {
    private readonly IProductsService productsService;

    public ProductsController(IProductsService productsService)
    {
      this.productsService = productsService;
    }

    /*
      POST (Admin) /api/v1/products
    */
    [HttpPost]
    [Authorize(Roles = "Admin")]
    public async Task<ActionResult> Create(CreateProductRequest reqBody)
    {
      if (!ModelState.IsValid)
        return BadRequest(new { errors = new { global = "Request body is invalid" } });

      var newProduct = new Product
      {
        Title = reqBody.Title,
        Image = reqBody.Image,
        Price = reqBody.Price,
        Company = reqBody.Company,
        Info = reqBody.Info,
      };

      await this.productsService.Create(newProduct);

      return CreatedAtAction(nameof(GetById), new { id = newProduct.Id }, newProduct);
    }

    /*
      GET (All) /api/v1/products/{id}
    */
    [HttpGet("{id}")]
    public async Task<ActionResult> GetById(string id)
    {
      if (id == "")
        return BadRequest(new { errors = new { global = "Product id cannot be blank" } });

      var productFound = await this.productsService.GetById(id);

      if (productFound == null)
        return BadRequest(new { errors = new { global = "Product not found with the passed id" } });

      return Ok(productFound);
    }

    /*
      GET (All) /api/v1/products
    */
    [HttpGet]
    public async Task<ActionResult> GetAll()
    {
      return Ok(await this.productsService.GetAll());
    }
  }
}
