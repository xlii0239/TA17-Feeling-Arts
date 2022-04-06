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

        public virtual DbSet<ArtistSet> ArtistSets { get; set; }
        public virtual DbSet<ArtworkSet> ArtworkSets { get; set; }

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

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
