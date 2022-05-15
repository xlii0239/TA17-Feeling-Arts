using System;
using System.Collections.Generic;

#nullable disable

namespace FeelingArts.Models
{
    public partial class GalleryInfo
    {
        public int Id { get; set; }
        public string GalleryId { get; set; }
        public string GalleryName { get; set; }
        public string Website { get; set; }
        public string Category { get; set; }
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string WheelSupport { get; set; }
        public string BlindSupport { get; set; }
        public string AudioSupport { get; set; }
        public string GuideDogSupport { get; set; }
        public string OtherSupport { get; set; }
        public string State { get; set; }
        public decimal? Lat { get; set; }
        public decimal? Lng { get; set; }
    }
}
