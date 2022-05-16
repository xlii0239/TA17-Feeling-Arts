using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace FeelingArts.Models
{
    public partial class FeelingArtsDBContext : DbContext
    {
        public FeelingArtsDBContext()
        {
        }

        public FeelingArtsDBContext(DbContextOptions<FeelingArtsDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ArtistInfo> ArtistInfos { get; set; }
        public virtual DbSet<ArtistSet> ArtistSets { get; set; }
        public virtual DbSet<ArtworkInfo> ArtworkInfos { get; set; }
        public virtual DbSet<ArtworkSet> ArtworkSets { get; set; }
        public virtual DbSet<GalleryInfo> GalleryInfos { get; set; }
        public virtual DbSet<MusicInfo> MusicInfos { get; set; }
        public virtual DbSet<ThreeDimentionModelInfo> ThreeDimentionModelInfos { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=tcp:ta17-db.database.windows.net;Initial Catalog=FeelingArtsDB;User ID=ta17;Password=dong.0916;Connect Timeout=30;Encrypt=True;TrustServerCertificate=False;ApplicationIntent=ReadWrite;MultiSubnetFailover=False;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<ArtistInfo>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.Artist });

                entity.ToTable("ArtistInfo");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Artist)
                    .HasMaxLength(40)
                    .IsUnicode(false)
                    .HasColumnName("artist");

                entity.Property(e => e.Bio)
                    .IsRequired()
                    .HasMaxLength(700)
                    .IsUnicode(false)
                    .HasColumnName("bio");

                entity.Property(e => e.BirthYear).HasColumnName("birth_year");

                entity.Property(e => e.DeathYear).HasColumnName("death_year");

                entity.Property(e => e.Genre)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("genre");

                entity.Property(e => e.ImageNo)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("imageNo");

                entity.Property(e => e.Nationality)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("nationality");

                entity.Property(e => e.Paintings).HasColumnName("paintings");

                entity.Property(e => e.WikipediaLink)
                    .IsRequired()
                    .HasMaxLength(125)
                    .IsUnicode(false)
                    .HasColumnName("wikipedia_link");
            });

            modelBuilder.Entity<ArtistSet>(entity =>
            {
                entity.ToTable("ArtistSet");

                entity.Property(e => e.DateOfBirth).IsRequired();

                entity.Property(e => e.DateOfDeath).IsRequired();

                entity.Property(e => e.Era).IsRequired();

                entity.Property(e => e.FamousIn).IsRequired();

                entity.Property(e => e.Masterpiece).IsRequired();

                entity.Property(e => e.Name).IsRequired();

                entity.Property(e => e.Nationality).IsRequired();
            });

            modelBuilder.Entity<ArtworkInfo>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.Artist });

                entity.ToTable("ArtworkInfo");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.Artist)
                    .HasMaxLength(30)
                    .IsUnicode(false)
                    .HasColumnName("artist");

                entity.Property(e => e.Artwork)
                    .HasMaxLength(200)
                    .IsUnicode(false)
                    .HasColumnName("artwork");

                entity.Property(e => e.CreateYear).HasColumnName("create_year");

                entity.Property(e => e.Describe)
                    .HasMaxLength(2000)
                    .IsUnicode(false)
                    .HasColumnName("describe");

                entity.Property(e => e.Genre)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("genre");

                entity.Property(e => e.ImageNo)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("imageNo");

                entity.Property(e => e.ModelNo)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("modelNo");

                entity.Property(e => e.Style)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("style");
            });

            modelBuilder.Entity<ArtworkSet>(entity =>
            {
                entity.ToTable("ArtworkSet");

                entity.HasIndex(e => e.ArtistId, "IX_FK_ArtistArtwork");

                entity.Property(e => e.Author).IsRequired();

                entity.Property(e => e.Description).IsRequired();

                entity.Property(e => e.Name).IsRequired();

                entity.Property(e => e.Theme).IsRequired();

                entity.HasOne(d => d.Artist)
                    .WithMany(p => p.ArtworkSets)
                    .HasForeignKey(d => d.ArtistId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_ArtistArtwork");
            });

            modelBuilder.Entity<GalleryInfo>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.GalleryId })
                    .HasName("PK__GalleryI__8B07C63C38DA6B50");

                entity.ToTable("GalleryInfo");

                entity.Property(e => e.GalleryId)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("galleryId");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(128)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.AudioSupport)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("audio_support");

                entity.Property(e => e.BlindSupport)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("blind_support");

                entity.Property(e => e.Category)
                    .IsRequired()
                    .HasMaxLength(128)
                    .IsUnicode(false)
                    .HasColumnName("category");

                entity.Property(e => e.GalleryName)
                    .IsRequired()
                    .HasMaxLength(128)
                    .IsUnicode(false)
                    .HasColumnName("galleryName");

                entity.Property(e => e.GuideDogSupport)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false)
                    .HasColumnName("guide_dog_support");

                entity.Property(e => e.Lat)
                    .HasColumnType("decimal(10, 7)")
                    .HasColumnName("lat");

                entity.Property(e => e.Lng)
                    .HasColumnType("decimal(10, 7)")
                    .HasColumnName("lng");

                entity.Property(e => e.OtherSupport)
                    .IsRequired()
                    .HasMaxLength(120)
                    .IsUnicode(false)
                    .HasColumnName("other_support");

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("phone_number");

                entity.Property(e => e.State)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("state")
                    .HasDefaultValueSql("('VIC')");

                entity.Property(e => e.Website)
                    .IsRequired()
                    .HasMaxLength(128)
                    .IsUnicode(false)
                    .HasColumnName("website");

                entity.Property(e => e.WheelSupport)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("wheel_support");
            });

            modelBuilder.Entity<MusicInfo>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.MusicNo })
                    .HasName("PK__MusicInf__78A2C1C258B4C38E");

                entity.ToTable("MusicInfo");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.MusicNo)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("musicNo");

                entity.Property(e => e.ImageNo)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("imageNo");

                entity.Property(e => e.MArtistName)
                    .HasMaxLength(128)
                    .IsUnicode(false)
                    .HasColumnName("m_artist_name");

                entity.Property(e => e.MCreateYear).HasColumnName("m_create_year");

                entity.Property(e => e.MDescription)
                    .HasMaxLength(700)
                    .IsUnicode(false)
                    .HasColumnName("m_description");

                entity.Property(e => e.MGenre)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("m_genre");

                entity.Property(e => e.MLink)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("m_link");

                entity.Property(e => e.TrackName)
                    .IsRequired()
                    .HasMaxLength(128)
                    .IsUnicode(false)
                    .HasColumnName("track_name");
            });

            modelBuilder.Entity<ThreeDimentionModelInfo>(entity =>
            {
                entity.HasKey(e => new { e.Id, e.ModelNo })
                    .HasName("PK__ThreeDim__8232B66336BD2B3F");

                entity.ToTable("ThreeDimentionModelInfo");

                entity.Property(e => e.Id).HasColumnName("id");

                entity.Property(e => e.ModelNo)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("modelNo");

                entity.Property(e => e.ImageNo)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("imageNo");

                entity.Property(e => e.MLink)
                    .IsRequired()
                    .HasMaxLength(300)
                    .IsUnicode(false)
                    .HasColumnName("m_link");

                entity.Property(e => e.ModelName)
                    .IsRequired()
                    .HasMaxLength(128)
                    .IsUnicode(false)
                    .HasColumnName("model_name");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
