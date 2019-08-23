using System.Collections.Generic;
using System.Data.SqlClient;
using System.Threading.Tasks;
using Dapper;
using Microsoft.Extensions.Configuration;
using Npgsql;
using Webapi.Models;

namespace Webapi.Repositories.Impl
{
  public class ProductsServiceDapper : IProductsService
  {
    private readonly IConfiguration config;
    private readonly string connectionString;

    public ProductsServiceDapper(IConfiguration config)
    {
      this.config = config;
      this.connectionString = config["ConnectionStrings:PostgreSQL:EcommerceDb"];
    }

    public Task Create(Product newProduct)
    {
      // TODO:
      throw new System.NotImplementedException();
    }

    public async Task<IEnumerable<Product>> GetAll()
    {
      string sql = "SELECT * FROM public.\"Products\"";
      using (var connection = new NpgsqlConnection(this.connectionString))
      {
        return await connection.QueryAsync<Product>(sql);
      }
    }

    public async Task<Product> GetById(string id)
    {
      string sql = "SELECT * FROM public.\"Products\" WHERE \"Id\" = @Id";
      using (var connection = new NpgsqlConnection(this.connectionString))
      {
        return await connection.QueryFirstAsync<Product>(sql, new { Id = id });
      }
    }
  }
}
