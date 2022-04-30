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
        public virtual DbSet<MusicInfo> MusicInfos { get; set; }

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
                    .IsRequired()
                    .HasMaxLength(32)
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

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
