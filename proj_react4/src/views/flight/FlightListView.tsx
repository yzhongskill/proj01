import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Flight from "../../models/flight";

// import APIService from "../../services/apiService";


type FlightListViewProps = {
    flights: Flight[];
}
// type PassengerListViewProps = {
//     passengers: Passenger[];
// }

export class FlightListView extends React.Component<FlightListViewProps> {

    // componentDidMount() {
    //     APIService.getFlights()
    //       .then((response) => {
    //         this.setState({
    //             flights: response.data
    //             // this.setState({flights: response.data })
    //         });
    //       })
    //       .catch((err: Error) => {
    //         console.log(err);
    //       });
    //   }


    render(): React.ReactNode {
        return (
            <div className="App container">
                {/* <div className="jumbotron">
                    <h2>All Flights</h2>
                </div> */}
                <div className="card-header">
                    <p style={{ fontSize: 20, color: "#ffffff", textAlign: "left", paddingLeft: "20px" }}>FLIGHT SYS &gt; View Flights</p>
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
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                      
                        {this.props.flights.map( (flight: Flight) =>  (           
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
                                    <LinkContainer to={"/flightsEdit/" + flight.FlightId}>
                                        <Nav.Link className="btn btn-primary">
                                            Edit
                                        </Nav.Link>
                                    </LinkContainer>
                                </td>
                                <td>
                                    <LinkContainer to={"/flightsDelete/" + flight.FlightId}>
                                        <Nav.Link className="btn btn-primary">
                                            Delete
                                        </Nav.Link>
                                    </LinkContainer>
                                </td>
                            </tr>
                            </React.Fragment>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default FlightListView;
