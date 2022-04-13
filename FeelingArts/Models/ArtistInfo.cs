using System;
using System.Collections.Generic;

#nullable disable

namespace FeelingArts.Models
{
    public partial class ArtistInfo
    {
        public int Id { get; set; }
        public string Artist { get; set; }
        public int BirthYear { get; set; }
        public int DeathYear { get; set; }
        public string Genre { get; set; }
        public string Nationality { get; set; }
        public string Bio { get; set; }
        public string WikipediaLink { get; set; }
        public int Paintings { get; set; }
        public string ImageNo { get; set; }
    }
}
