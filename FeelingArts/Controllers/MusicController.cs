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

        [HttpGet("{imageNo}")]
        public async Task<IActionResult> GetMusicByImage([FromRoute] string imageNo)
        {

            var music = await db.MusicInfos.Where(x => x.ImageNo == imageNo).ToListAsync();
            if (music == null)
            {
                return NotFound();
            }
            return Ok(music);
        }
    }
}
