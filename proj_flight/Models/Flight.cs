using System.ComponentModel.DataAnnotations;

namespace proj_flight.Models {
    public class Flight {

        [Key]
        public int FlightId { get; set; }

        public string FlightNumber { get; set; }

        public string DepartAirport { get; set; } = String.Empty;
        public DateTime DepartTime { get; set; } = new DateTime();

        public string ArriveAirport { get; set; } = String.Empty;
        public DateTime ArriveTime { get; set; } = new DateTime();

        public int PassengerLimit { get; set; }

        public ICollection<Passenger>? Passengers { get; set; } = new List<Passenger>();

        //public ICollection<FlightList>? FlightLists { get; set; }

        public DateTime DateAdded { get; set; } = new DateTime();
        public DateTime DateModified { get; set; } = new DateTime();

    }
}
