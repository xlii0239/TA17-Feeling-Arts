﻿using Microsoft.AspNetCore.Mvc;
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
    }
}
