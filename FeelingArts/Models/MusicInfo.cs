using System;
using System.Collections.Generic;

#nullable disable

namespace FeelingArts.Models
{
    public partial class MusicInfo
    {
        public int Id { get; set; }
        public string MusicNo { get; set; }
        public string TrackName { get; set; }
        public string MArtistName { get; set; }
        public string MGenre { get; set; }
        public int? MCreateYear { get; set; }
        public string MDescription { get; set; }
        public string MLink { get; set; }
        public string ImageNo { get; set; }
    }
}
