using System.Collections.Generic;
using System.Threading.Tasks;
using Webapi.Models;

namespace Webapi.Repositories
{
  public interface IProductsService
  {
    /*
      Create a Product
    */
    Task Create(Product newProduct);

    /*
      Get All Products
    */
    Task<IEnumerable<Product>> GetAll();

    /*
      Get Product by its id
    */
    Task<Product> GetById(string id);
  }
}
