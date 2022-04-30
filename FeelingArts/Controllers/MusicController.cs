using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FeelingArts.Models;

namespace FeelingArts.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MusicController : Controller
    {
        private FeelingArtsDBContext db = new FeelingArtsDBContext();

        [HttpGet]
        public IEnumerable<MusicInfo> Index()
        {
            using (var context = new FeelingArtsDBContext())
            {
                var listA = db.MusicInfos.ToArray();
                return listA;
            }
        }
    }
}
