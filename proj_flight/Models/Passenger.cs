using System.ComponentModel.DataAnnotations;

namespace proj_flight.Models {
    public class Passenger {

        //public int FlightNumber { get; set; }

        [Key]
        public int PassengerId { get; set; }

        public string FirstName { get; set; } = String.Empty;
        public string LastName { get; set; } = String.Empty;

        public string Job { get; set; } = String.Empty;

        public string Email { get; set; } = String.Empty;

        public int Age { get; set; } = -1;

        //public string Reservation { get; set; } = String.Empty;
        public ICollection<Flight>? Flights { get; set; } = new List<Flight>();

        public DateTime DateAdded { get; set; } = new DateTime();
        public DateTime DateModified { get; set; } = new DateTime();
    }
}

