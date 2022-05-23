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
    public class ArtworkController : Controller
    {
        private FeelingArtsDBContext db = new FeelingArtsDBContext();

        [HttpGet]
        public IEnumerable<ArtworkInfo> Get()
        {
            using (var context = new FeelingArtsDBContext())
            {
                var listA = db.ArtworkInfos.ToArray();
                return listA;
            }
        }

        [HttpGet("{imageNo}")]
        public async Task<IActionResult> GetArtworkByImage([FromRoute] string imageNo)
        {

            var atrwork = await db.ArtworkInfos.Where(x => x.ImageNo == imageNo).ToListAsync();
            if (atrwork == null)
            {
                return NotFound();
            }
            return Ok(atrwork);
        }
    }
}
