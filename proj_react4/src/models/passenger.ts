interface Passenger {
    PassengerId: number;
    FirstName: string;
    LastName: string;
    Job: string;
    Email: string;
    Age: number;
    Flights: Array<string>;
}

export default Passenger;
