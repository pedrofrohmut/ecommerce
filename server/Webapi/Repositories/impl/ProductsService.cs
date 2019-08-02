using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Webapi.Models;

namespace Webapi.Repositories.Impl
{
  public class ProductsService : IProductsService
  {
    private readonly AppDbContext ctx;

    public ProductsService(AppDbContext ctx) { this.ctx = ctx; }

    public async Task Create(Product newProduct)
    {
      await this.ctx.Products.AddAsync(newProduct);
      await this.ctx.SaveChangesAsync();
    }

    public async Task<IEnumerable<Product>> GetAll() => await this.ctx.Products.ToListAsync();

    public async Task<Product> GetById(string id) =>
      await this.ctx.Products.FirstOrDefaultAsync(product => product.Id == id);
  }
}
