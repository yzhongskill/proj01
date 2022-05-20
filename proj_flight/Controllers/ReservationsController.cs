using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using proj_flight.Data;
using proj_flight.Models;

namespace proj_flight.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationsController : ControllerBase {

        private readonly FSContext _context;

        public ReservationsController(FSContext context) {
            _context = context;
        }

        // GET: api/<PassengersController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reservation>>> GetConfirmation() {
            return await _context.Reservations.ToListAsync();
        }

        // POST: api/5/Flight/10
        [HttpPost("{passengerId}/Flight/{flightId}")]
        public async Task<ActionResult<Reservation>> AddPassengerToFlight(int passengerId, int flightId) {

            var flight = await _context.Flights.FirstAsync(p => p.FlightId == flightId);

            var reservations = await _context.Reservations
                .Where(p => p.FlightId == flightId)
                .ToListAsync();  //  .FirstAsync(p => p.FlightId == flightId);

            if (reservations.Count >= flight.PassengerLimit)
            {
                //return NoContent(); // if over passenger limit, return no content (status: 204).
                return BadRequest(); // if over passenger limit, return bad request (status: 404).
            }

            //var flight = await _context.Flights.FirstAsync(flightId);
            var passenger = await _context.Passengers.FindAsync(passengerId);

            if (passenger == null)
            {
                //_logger.LogDebug("Playlist not found, returning bad request.");
                BadRequest();
            }

            //var confirm_str = "ABC12345";

            Reservation confirm = new Reservation
            {
                PassengerId = passenger.PassengerId,
                FlightId = flight.FlightId
            };

            //passenger.Reservation = confirm_str;
            flight.Passengers.Add(passenger);

            await _context.SaveChangesAsync();

            return Ok(confirm);
        }

        //// DELETE: api/5
        //[HttpDelete("{id}")]
        //public async Task<IActionResult> DeleteConfirmation(int id) {
        //    var confirmation = await _context.Confirmations.FindAsync(id);
        //    if (confirmation == null)
        //    {
        //        return NotFound();
        //    }

        //    _context.Confirmations.Remove(confirmation);
        //    await _context.SaveChangesAsync();

        //    return NoContent();
        //}
    }
}
