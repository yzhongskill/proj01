import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
// import { withRouter } from "react-router-dom";
import { Params, useLocation, useParams } from "react-router-dom";
import Flight from "../../models/flight";
import APIService from "../../services/apiService";

// import APIService from "../../services/apiService";

type FlightListViewProps = {
    flights: Flight[];
}
type FlightListViewState = {
    // params: Params<string>;
    para: string;
}

// export class FlightBookView extends React.Component<FlightListViewProps,FlightListViewState> {

function FlightBookView(props: { flights: Flight[]; }) {

    const protocol = window.location.protocol;
    const domain = window.location.hostname;
    const port = window.location.port;
    const full = `${protocol}//${domain}:${port? port : ""}`
    const url_flights = `${full}/passengersBook`

    // const [count, setCount] = useState(0);
    const [passId, setPassId] = useState(0);

    const params = useParams();
    console.log(params);
    console.log('url_FlightBookView: '+params.passengerId);
    var passengerId: number = Number(params.passengerId);
    
    if (passId == 0)
    {
        setPassId(passengerId);
    }

    function update(passengerId: number, flightId: number, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        
        APIService.createResearvation(passengerId, flightId)
        .then((response) => {

            console.log("Y: Response: Create the Reservation.");
            console.log(response.data);

            alert("Sys: Created the Reservation!");

            // if (response.data.FlightId == flightId && response.data.PassengerId == passengerId   )
            //     alert("Sys: Created the Reservation!");
            // else
            //     alert("Sys: Failed to create the Reservation!");

            window.location.href = url_flights;
        })
        .catch((err: Error) => {
            console.log(err);

            alert("Sys: Error: Failed to create the Reservation!");
        });
    }

    return (
        // const { id } = this.props.match.params;

        <div className="App container">
            {/* <div className="jumbotron">
                <h2>Step 2/2, Flights: Select a flight to book</h2>
            </div> */}
            <div className="card-header">
                    <p style={{ fontSize: 20, color: "#ffffff", textAlign: "left", paddingLeft: "20px" }}>
                        FLIGHT SYS &gt; Book a Ticket: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Step 2/2, Select a Flight</p>
                </div>

            <table className="table table-striped table-bordered table-hover table-highlight">
                <thead>
                    <tr>
                        <th>Flight Id</th>
                        <th>Flight Number</th>
                        <th>Depart Airport</th>
                        <th>Depart Time</th>
                        <th>Arrive Airport</th>
                        <th>Arrive Time</th>
                        <th>P. Limit</th>
                        <th>Book</th>
                        {/* <th>Delete</th> */}
                    </tr>
                </thead>
                <tbody>
                    
                    {props.flights.map( (flight: Flight) =>  (           
                        <React.Fragment key={flight.FlightId}>
                        <tr id={"flight-" + flight.FlightId}>
                            <td>{flight.FlightId}</td>
                            <td>{flight.FlightNumber}</td>
                            <td>{flight.DepartAirport}</td>
                            <td>{flight.DepartTime}</td>
                            <td>{flight.ArriveAirport}</td>
                            <td>{flight.ArriveTime}</td>
                            <td>{flight.PassengerLimit}</td>
                            <td>
                                <button className="btn btn-primary" onClick={(e) => update(passId,flight.FlightId, e)} >Book</button>
                                {/* <button className="btn btn-sm btn-primary" onClick={(e) => update(passId,flight.FlightId, e)} >Book</button> */}
                                {/* <LinkContainer to={"/flightsEdit/" + flight.FlightId}>
                                    <Nav.Link className="btn btn-primary" >
                                        Book
                                    </Nav.Link>
                                </LinkContainer> */}
                            </td>
                            {/* <td>
                                <LinkContainer to={"/flightsDelete/" + flight.FlightId}>
                                    <Nav.Link className="btn btn-primary">
                                        Delete
                                    </Nav.Link>
                                </LinkContainer>
                            </td> */}
                        </tr>
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        </div>
    );

}

export default FlightBookView;

// function handleClick() {
//     throw new Error("Function not implemented.");
// }

// function deleteRow(id: any, e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void {
//     throw new Error("Function not implemented.");
// }
// export default withRouter(FlightBookView);
