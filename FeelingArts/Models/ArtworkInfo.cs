using System;
using System.Collections.Generic;

#nullable disable

namespace FeelingArts.Models
{
    public partial class ArtworkInfo
    {
        public int Id { get; set; }
        public string Artist { get; set; }
        public int? CreateYear { get; set; }
        public string Genre { get; set; }
        public string Style { get; set; }
        public string Artwork { get; set; }
        public string Describe { get; set; }
        public string ImageNo { get; set; }
    }
}
