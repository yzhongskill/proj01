import Song from '../models/song';
import Passenger from '../models/passenger';
import axios from "axios";
import Flight from '../models/flight';
import Reservation from '../models/reservation';


const http = axios.create({
    // baseURL: "https://localhost:7072",
    baseURL: "https://localhost:7198",
    headers: {
        'Content-Type': 'application/json'
    }
});

// -------------- Y: begin -----------

const getPassengers = () => {
    return http.get<Array<Passenger>>("/api/Passengers");
};

const getPassenger = (id: number) => {
    return http.get<Passenger>(`api/Passengers/${id}`);
}

const createPassenger = (passenger: Passenger) => {
    return http.post<Passenger>("api/Passengers", passenger);
};

const updatePassenger = (passenger: Passenger) => {
    return http.put<Passenger>(`api/Passengers/${passenger.PassengerId}`, passenger);
};

const deletePassenger = (id: number) => {
    return http.delete<Passenger>(`api/Passengers/${id}`);
};

const getFlights = () => {
    return http.get<Array<Flight>>("/api/Flights");
};

const getFlight = (id: number) => {
    return http.get<Flight>(`api/Flights/${id}`);
}

const createFlight = (flight: Flight) => {
    return http.post<Flight>("api/Flights", flight);
};

const updateFlight = (flight: Flight) => {
    return http.put<Flight>(`api/Flights/${flight.FlightId}`, flight);
};

const deleteFlight = (id: number) => {
    return http.delete<Flight>(`api/Flights/${id}`);
};

const getReservations = () => {
    return http.get<Array<Reservation>>("/api/Reservations");
};

const createResearvation = (passengerId: number, flightId: number) => {
    return http.post<Reservation>(`api/Reservations/${passengerId}/Flight/${flightId}`);
};

const deleteResearvation = (passengerId: number, flightId: number) => {
    return http.delete<Reservation>(`api/Reservations/${passengerId}/Flight/${flightId}`);
};

// -------------- Y: End -----------

const getSongs = () => {
    return http.get<Array<Song>>("/api/Music");
};

const getSong = (id: number) => {
    return http.get<Song>(`api/Music/${id}`);
}

const createSong = (song: Song) => {
    return http.post<Song>("api/Music", song);
};

const updateSong = (song: Song) => {
    return http.put<Song>(`api/Music/${song.Id}`, song);
};

const deleteSong = (id: number) => {
    return http.delete<Song>(`api/Music/${id}`);
};

const APIService = {
    getSongs,
    getSong,
    createSong,
    updateSong,
    deleteSong,

    getPassengers,
    getPassenger,
    createPassenger,
    updatePassenger,
    deletePassenger,
    getFlights,
    getFlight,
    createFlight,
    updateFlight,
    deleteFlight,

    getReservations,
    createResearvation,
    deleteResearvation
};

export default APIService;