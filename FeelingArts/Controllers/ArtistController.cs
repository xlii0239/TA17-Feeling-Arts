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
    public class ArtistController : Controller
    {
        [HttpGet]
        public IEnumerable<ArtistSet> Get()
        {
            using (var context = new FeelingArtsDBContext())
            {
                var listA = context.ArtistSets.ToArray();
                Console.WriteLine(listA[0].ArtworkSets.Count);
                Console.WriteLine("--------------=======================");
                return context.ArtistSets.ToArray();
            }
        }
    }
}
