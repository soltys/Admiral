using System.Diagnostics;
using code.Models;
using Microsoft.AspNetCore.Mvc;

namespace code.Controllers {

  public class HomeController : Controller
  {
    public IActionResult Index() {
      return View();
    }

    public IActionResult RunVue() {
      return View();
    }
    
    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
      return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
  }
}