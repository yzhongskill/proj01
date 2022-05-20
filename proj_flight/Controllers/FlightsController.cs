using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using proj_flight.Data;
using proj_flight.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace proj_flight.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class FlightsController : ControllerBase {

        private readonly FSContext _context;

        public FlightsController(FSContext context) {
            _context = context;
        }

        // GET: api/<PassengersController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Flight>>> GetPassenger() {
            return await _context.Flights.ToListAsync();
        }

        // GET: api/Flights/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Flight>> GetFlight(int id) {
            var flight = await _context.Flights
                .FirstAsync(p => p.FlightId == id);

            if (flight == null)
            {
                return NotFound();
            }

            return flight;
        }


        // POST: api/Flight
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Flight>> PostPassenger(Flight flight) {
            _context.Flights.Add(flight);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassenger", new { PassengerId = flight.FlightNumber }, flight);
        }


        // PUT: api/Flights/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassenger(int id, Flight flight) {
            if (id != flight.FlightId)
            {
                return BadRequest();
            }

            _context.Entry(flight).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PassengerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Passengers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFlight(int id) {
            var flight = await _context.Flights.FindAsync(id);
            if (flight == null)
            {
                return NotFound();
            }

            _context.Flights.Remove(flight);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassengerExists(int id) {
            return _context.Flights.Any(e => e.FlightId == id);
        }
    }
}
