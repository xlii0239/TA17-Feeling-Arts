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
    public class ArtworkController : Controller
    {
        private BookStoresDBContext db = new BookStoresDBContext();

        [HttpGet]
        public IEnumerable<ArtworkSet> Get()
        {
            using (var context = new BookStoresDBContext())
            {
                var listA = db.ArtistSets.ToList();
                
                Console.WriteLine(listA[0].ArtworkSets.Count); 
                return context.ArtworkSets.ToArray();
            }
        }
    }
}
