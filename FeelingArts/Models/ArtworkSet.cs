using System;
using System.Collections.Generic;

#nullable disable

namespace FeelingArts.Models
{
    public partial class ArtworkSet
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Author { get; set; }
        public string Description { get; set; }
        public string Theme { get; set; }
        public int ArtistId { get; set; }

        public virtual ArtistSet Artist { get; set; }
    }
}
