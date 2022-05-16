using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FeelingArts.Models;
using Microsoft.EntityFrameworkCore;

namespace FeelingArts.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class GalleryController : Controller
    {
        private FeelingArtsDBContext db = new FeelingArtsDBContext();

        [HttpGet]
        public IEnumerable<GalleryInfo> Index()
        {
            using (var context = new FeelingArtsDBContext())
            {
                var listA = db.GalleryInfos.ToArray();
                return listA;
            }
        }
    }
}
