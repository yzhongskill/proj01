using Microsoft.EntityFrameworkCore;
using proj_flight.Models;

namespace proj_flight.Data {
    public class FSContext : DbContext {

        public FSContext() { }

        public FSContext(DbContextOptions<FSContext> options) : base(options) { }

        public DbSet<Flight> Flights { get; set; }
        public DbSet<Passenger> Passengers { get; set; }
        public DbSet<Reservation> Reservations { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            modelBuilder.Entity<Passenger>()
                .HasMany(p => p.Flights)
                .WithMany(c => c.Passengers)
                .UsingEntity<Reservation>();

            modelBuilder.Entity<Flight>()
                .HasMany(p => p.Passengers)
                .WithMany(c => c.Flights)
                .UsingEntity<Reservation>();
        }
    }
}
