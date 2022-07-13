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
    public class ThreeDimentionModelController : Controller
    {
        private FeelingArtsDBContext db = new FeelingArtsDBContext();

        [HttpGet]
        public IEnumerable<ThreeDimentionModelInfo> Index()
        {
            using (var context = new FeelingArtsDBContext())
            {
                var listA = db.ThreeDimentionModelInfos.ToArray();
                return listA;
            }
        }

        [HttpGet("{imageNo}")]
        public async Task<IActionResult> GetModelByImage([FromRoute] string imageNo)
        {

            var model = await db.ThreeDimentionModelInfos.Where(x => x.ImageNo == imageNo).ToListAsync();
            if (model == null)
            {
                return NotFound();
            }
            return Ok(model);
        }
    }
}
