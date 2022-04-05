using System;
using System.Collections.Generic;

#nullable disable

namespace FeelingArts.Models
{
    public partial class ArtistSet
    {
        public ArtistSet()
        {
            ArtworkSets = new HashSet<ArtworkSet>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public string DateOfBirth { get; set; }
        public string DateOfDeath { get; set; }
        public string Nationality { get; set; }
        public string FamousIn { get; set; }
        public string Masterpiece { get; set; }
        public string Era { get; set; }
        public bool IsBlind { get; set; }

        public virtual ICollection<ArtworkSet> ArtworkSets { get; set; }
    }
}
