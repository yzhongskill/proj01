using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace proj_flight.Models {
    public class Reservation {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Number { get; set; }

        [ForeignKey("Passenger")]
        public int PassengerId { get; set; }

        //public Passenger? Passenger { get; set; } 

        [ForeignKey("Flight")]
        public int FlightId { get; set; }

        //public Flight? Flight { get; set; }

        public DateTime DateAdded { get; set; } = new DateTime();
        public DateTime DateModified { get; set; } = new DateTime();
    }
}
