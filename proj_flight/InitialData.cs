namespace proj_flight {
    using System.Linq;
    //using proj_flight.Models;
    using Microsoft.EntityFrameworkCore;
    using proj_flight.Data;
    using proj_flight.Models;

    public static class InitialData {

        public static void Seed(IServiceProvider serviceProvider) {

            using (var dbContext = new FSContext(serviceProvider.GetRequiredService<DbContextOptions<FSContext>>()))
            {
                dbContext.Database.EnsureDeleted();
                dbContext.Database.EnsureCreated();

                if (!dbContext.Passengers.Any())
                {
                    dbContext.Passengers.Add(new Passenger
                    {
                        FirstName = "James",
                        LastName = "Smith",
                        Job = "Physics Teacher",
                        Email = "jamessmith@gmail.com",
                        Age = 23,
                        DateAdded = new DateTime(2015, 12, 31, 5, 01, 20),
                        DateModified = new DateTime(2017, 12, 31, 5, 01, 25)
                    });

                    dbContext.Passengers.Add(new Passenger
                    {
                        FirstName = "Robert",
                        LastName = "Johnson",
                        Job = "SOC Analyst",
                        Email = "robertjohnson@hotmail.com",
                        Age = 54,
                        DateAdded = new DateTime(2015, 12, 31, 5, 01, 20),
                        DateModified = new DateTime(2017, 12, 31, 5, 01, 25)
                    });

                    dbContext.Passengers.Add(new Passenger
                    {
                        FirstName = "John",
                        LastName = "Williams",
                        Job = "Professor",
                        Email = "johnwilliams@gmail.com",
                        Age = 19,
                        DateAdded = new DateTime(2015, 12, 31, 5, 01, 20),
                        DateModified = new DateTime(2017, 12, 31, 5, 01, 25)
                    });

                    dbContext.Passengers.Add(new Passenger
                    {
                        FirstName = "Michael",
                        LastName = "Brown",
                        Job = "AWS Cloud Architect",
                        Email = "mmichaelbrown@hotmail.com",
                        Age = 76,
                        DateAdded = new DateTime(2015, 9, 20, 5, 01, 20),
                        DateModified = new DateTime(2017, 9, 20, 8, 03, 25)
                    });

                    dbContext.Passengers.Add(new Passenger
                    {
                        FirstName = "David",
                        LastName = "Jones",
                        Job = "Reading Coach",
                        Email = "DaviJones@yahoo.com",
                        Age = 28,
                        DateAdded = new DateTime(2015, 12, 31, 5, 01, 20),
                        DateModified = new DateTime(2017, 12, 31, 5, 01, 25)
                    });

                    dbContext.Passengers.Add(new Passenger
                    {
                        FirstName = "William",
                        LastName = "Garcia",
                        Job = "Physician",
                        Email = "WilliamGarcia@yahoo.com",
                        Age = 15,
                        DateAdded = new DateTime(2015, 12, 31, 5, 01, 20),
                        DateModified = new DateTime(2017, 12, 31, 5, 01, 25)
                    });

                    dbContext.Passengers.Add(new Passenger
                    {
                        FirstName = "Richard",
                        LastName = "Miller",
                        Job = "Nurse",
                        Email = "RichardMiller@gmail.com",
                        Age = 71,
                        DateAdded = new DateTime(2015, 12, 31, 5, 01, 20),
                        DateModified = new DateTime(2017, 12, 31, 5, 01, 25)
                    });

                    dbContext.Passengers.Add(new Passenger
                    {
                        FirstName = "Joseph",
                        LastName = "Davis",
                        Job = "Cook",
                        Email = "JosephDavis@gmail.com",
                        Age = 32,
                        DateAdded = new DateTime(2015, 12, 31, 5, 01, 20),
                        DateModified = new DateTime(2017, 12, 31, 5, 01, 25)
                    });

                    dbContext.Passengers.Add(new Passenger
                    {
                        FirstName = "Thomas",
                        LastName = "Rodriguez",
                        Job = "Professor",
                        Email = "ThomaRodriguez@gmail.com",
                        Age = 51,
                        DateAdded = new DateTime(2015, 12, 31, 5, 01, 20),
                        DateModified = new DateTime(2017, 12, 31, 5, 01, 25)
                    });

                    dbContext.Passengers.Add(new Passenger
                    {
                        FirstName = "Charles",
                        LastName = "Martinez",
                        Job = "English Teacher",
                        Email = "CharlesMartinez@gmail.com",
                        Age = 32,
                        DateAdded = new DateTime(2015, 12, 31, 5, 01, 20),
                        DateModified = new DateTime(2017, 12, 31, 5, 01, 25)
                    });

                    dbContext.SaveChanges();
                }

                if (!dbContext.Flights.Any())
                {
                    dbContext.Flights.Add(new Flight
                    {
                        FlightNumber = "5575",
                        DepartAirport = "AAL",
                        ArriveAirport = "AAR",
                        DepartTime = new DateTime(2021, 12, 31, 5, 01, 20),
                        ArriveTime = new DateTime(2021, 12, 31, 7, 01, 25),
                        PassengerLimit = 70
                    });

                    dbContext.Flights.Add(new Flight
                    {
                        FlightNumber = "1858",
                        DepartAirport = "AES",
                        ArriveAirport = "ABZ",
                        DepartTime = new DateTime(2021, 11, 30, 1, 01, 20),
                        ArriveTime = new DateTime(2021, 11, 30, 3, 01, 25),
                        PassengerLimit = 90
                    });

                    dbContext.Flights.Add(new Flight
                    {
                        FlightNumber = "1359",
                        DepartAirport = "AAR",
                        ArriveAirport = "ADD",
                        DepartTime = new DateTime(2021, 10, 30, 7, 01, 20),
                        ArriveTime = new DateTime(2021, 10, 30, 9, 01, 25),
                        PassengerLimit = 2
                    });

                    dbContext.Flights.Add(new Flight
                    {
                        FlightNumber = "1329",
                        DepartAirport = "YXX",
                        ArriveAirport = "YXX",
                        DepartTime = new DateTime(2021, 10, 28, 5, 01, 20),
                        ArriveTime = new DateTime(2021, 10, 28, 8, 01, 25),
                        PassengerLimit = 70
                    });

                    dbContext.Flights.Add(new Flight
                    {
                        FlightNumber = "1228",
                        DepartAirport = "YXX",
                        ArriveAirport = "ADL",
                        DepartTime = new DateTime(2021, 10, 28, 9, 01, 20),
                        ArriveTime = new DateTime(2021, 10, 28, 14, 01, 25),
                        PassengerLimit = 140
                    });

                    dbContext.Flights.Add(new Flight
                    {
                        FlightNumber = "1623",
                        DepartAirport = "ABZ",
                        ArriveAirport = "ELS",
                        DepartTime = new DateTime(2021, 10, 28, 5, 01, 20),
                        ArriveTime = new DateTime(2021, 10, 28, 11, 01, 25),
                        PassengerLimit = 70
                    });

                    dbContext.Flights.Add(new Flight
                    {
                        FlightNumber = "2790",
                        DepartAirport = "ABR",
                        ArriveAirport = "YXX",
                        DepartTime = new DateTime(2021, 10, 28, 1, 01, 20),
                        ArriveTime = new DateTime(2021, 10, 28, 7, 01, 25),
                        PassengerLimit = 60
                    });

                    dbContext.Flights.Add(new Flight
                    {
                        FlightNumber = "3280",
                        DepartAirport = "ABJ",
                        ArriveAirport = "AUH",
                        DepartTime = new DateTime(2021, 10, 28, 2, 01, 20),
                        ArriveTime = new DateTime(2021, 10, 28, 7, 01, 25),
                        PassengerLimit = 70
                    });

                    dbContext.Flights.Add(new Flight
                    {
                        FlightNumber = "5071",
                        DepartAirport = "ABI",
                        ArriveAirport = "DUT",
                        DepartTime = new DateTime(2021, 10, 28, 6, 01, 20),
                        ArriveTime = new DateTime(2021, 10, 28, 12, 01, 25),
                        PassengerLimit = 80
                    });

                    dbContext.Flights.Add(new Flight
                    {
                        FlightNumber = "2691",
                        DepartAirport = "AUH",
                        ArriveAirport = "ABR",
                        DepartTime = new DateTime(2021, 10, 28, 1, 01, 20),
                        ArriveTime = new DateTime(2021, 10, 28, 4, 01, 25),
                        PassengerLimit = 60
                    });

                    dbContext.SaveChanges();
                }

                if (!dbContext.Reservations.Any())
                {
                    dbContext.Reservations.Add(new Reservation
                    {
                        PassengerId = 1,
                        FlightId = 1
                    });

                    dbContext.Reservations.Add(new Reservation
                    {
                        PassengerId = 2,
                        FlightId = 2
                    });

                    dbContext.Reservations.Add(new Reservation
                    {
                        PassengerId = 3,
                        FlightId = 3
                    });

                    dbContext.Reservations.Add(new Reservation
                    {
                        PassengerId = 4,
                        FlightId = 4
                    });

                    dbContext.Reservations.Add(new Reservation
                    {
                        PassengerId = 5,
                        FlightId = 5
                    });

                    dbContext.Reservations.Add(new Reservation
                    {
                        PassengerId = 6,
                        FlightId = 6
                    });

                    dbContext.Reservations.Add(new Reservation
                    {
                        PassengerId = 7,
                        FlightId = 7
                    });

                    dbContext.Reservations.Add(new Reservation
                    {
                        PassengerId = 8,
                        FlightId = 8
                    });

                    dbContext.Reservations.Add(new Reservation
                    {
                        PassengerId = 9,
                        FlightId = 9
                    });

                    dbContext.Reservations.Add(new Reservation
                    {
                        PassengerId = 10,
                        FlightId = 10
                    });

                    dbContext.SaveChanges();
                }
            }
        }

    }
}
