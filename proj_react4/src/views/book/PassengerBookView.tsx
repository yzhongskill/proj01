import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Passenger from "../../models/passenger";

type PassengerListViewProps = {
    passengers: Passenger[];
}

export class PassengerBookView extends React.Component<PassengerListViewProps> {
    render(): React.ReactNode {
        return (
            <div className="App container">
                {/* <div className="jumbotron">
                    <h2>Step 1/2, Book a Ticket: Select a passager to a book a Ticket</h2>
                </div> */}
                <div className="card-header">
                    <p style={{ fontSize: 20, color: "#ffffff", textAlign: "left", paddingLeft: "20px" }}>
                        FLIGHT SYS &gt; Book a Ticket: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Step 1/2, Select a Passanger</p>
                </div>

                <table className="table table-striped table-bordered table-hover table-highlight">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>Job</th>
                            <th>Email</th>
                            <th>Edit</th>
                            {/* <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.passengers.map( (passenger: Passenger) =>  (           
                            <React.Fragment key={passenger.PassengerId}>
                            <tr id={"passenger-" + passenger.PassengerId}>
                                <td>{passenger.PassengerId}</td>
                                <td>{passenger.FirstName}</td>
                                <td>{passenger.LastName}</td>
                                <td>{passenger.Job}</td>
                                <td>{passenger.Email}</td>
                                <td>
                                    <LinkContainer to={"/flightsBook/" + passenger.PassengerId}>
                                        <Nav.Link className="btn btn-primary">
                                            Book
                                        </Nav.Link>
                                    </LinkContainer>
                                </td>
                                {/* <td>
                                    <LinkContainer to={"/passengersDelete/" + passenger.PassengerId}>
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
}

export default PassengerBookView;
