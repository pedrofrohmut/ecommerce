using System;
using System.Text;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using Webapi.Models;
using Webapi.Repositories;
using Webapi.Repositories.Impl;

namespace Webapi
{
  public class Startup
  {
    public Startup(IConfiguration configuration) { Configuration = configuration; }

    public IConfiguration Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);

      services.Configure<ApiBehaviorOptions>(options => options.SuppressModelStateInvalidFilter = true);

      services
        .AddEntityFrameworkNpgsql()
        .AddDbContext<AppDbContext>(options =>
          options.UseNpgsql(Configuration["ConnectionStrings:PostgreSQL:EcommerceDb"]));

      services
        .AddDefaultIdentity<ApplicationUser>()
        .AddRoles<IdentityRole>()
        .AddEntityFrameworkStores<AppDbContext>();

      services
        .Configure<IdentityOptions>(options =>
        {
          options.Password.RequireDigit = false;
          options.Password.RequireNonAlphanumeric = false;
          options.Password.RequireUppercase = false;
          options.Password.RequireLowercase = false;
          options.Password.RequiredLength = 4;
        });

      services.AddCors();

      // JWT Authentication
      var key = Encoding.UTF8.GetBytes(Configuration["JWT_SECRET"].ToString());
      services
        .AddAuthentication(options =>
          {
            options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            options.DefaultScheme = JwtBearerDefaults.AuthenticationScheme;
          })
        .AddJwtBearer(options =>
        {
          options.RequireHttpsMetadata = false;
          options.SaveToken = false;
          options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
          {
            ValidateIssuerSigningKey = true,
            IssuerSigningKey = new SymmetricSecurityKey(key),
            ValidateIssuer = false,
            ValidateAudience = false,
            ClockSkew = TimeSpan.Zero
          };
        });

      // Startup Configuration in the Context
      services.AddSingleton<IConfiguration>(Configuration);

      // REPOSITORIES
      services.AddScoped<TokenGenerator>();
      services.AddScoped<IProductsService, ProductsService>();
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
        app.UseDeveloperExceptionPage();

      app.UseCors(builder => builder.WithOrigins(Configuration["ClientURL"]).AllowAnyHeader().AllowAnyOrigin());

      app.UseAuthentication();

      // app.UseHttpsRedirection();

      app.UseMvc();
    }
  }
}
