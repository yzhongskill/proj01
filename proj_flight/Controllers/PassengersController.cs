using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using proj_flight.Data;
using proj_flight.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace proj_flight.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class PassengersController : ControllerBase {

        private readonly FSContext _context;

        public PassengersController(FSContext context) {
            _context = context;
        }

        // GET: api/<PassengersController>
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Passenger>>> GetPassenger() {
            return await _context.Passengers.ToListAsync();
        }

        // GET: api/Passengers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Passenger>> GetPassenger(int id) {
            var passenger = await _context.Passengers
                .FirstAsync(p => p.PassengerId == id);

            if (passenger == null)
            {
                return NotFound();
            }

            return passenger;
        }

        // POST: api/Passenger
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Passenger>> PostPassenger(Passenger passenger) {
            _context.Passengers.Add(passenger);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPassenger", new { PassengerId = passenger.PassengerId }, passenger);
        }

        // PUT: api/Passengers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPassenger(int id, Passenger passenger) {
            if (id != passenger.PassengerId)
            {
                return BadRequest();
            }

            _context.Entry(passenger).State = EntityState.Modified;

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
        public async Task<IActionResult> DeletePassenger(int id) {
            var passenger = await _context.Passengers.FindAsync(id);
            if (passenger == null)
            {
                return NotFound();
            }

            _context.Passengers.Remove(passenger);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PassengerExists(int id) {
            return _context.Passengers.Any(e => e.PassengerId == id);
        }
    }
}
