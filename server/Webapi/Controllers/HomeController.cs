using Microsoft.AspNetCore.Mvc;

namespace Webapi.Controllers 
{
  [Route("/")]
  [ApiController]
  public class HomeController : Controller
  {
    [HttpGet]
    public ActionResult Index()
    {
      return View();
    }
  }
}
