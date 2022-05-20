import React from 'react';
import { useForm } from "react-hook-form";
import Flight from '../../models/flight';
import APIService from '../../services/apiService';

// import { createHashHistory } from "history";

function FlightAddView() {

  const { register, handleSubmit, formState: {errors} } = useForm();

  const protocol = window.location.protocol;
  const domain = window.location.hostname;
  const port = window.location.port;
  const full = `${protocol}//${domain}:${port? port : ""}`
  const url_flights = `${full}/Flights`

  console.log("Y: full: " + full);
  console.log("Y: url: " + url_flights);

  const onSubmit = (data: any) => {
    console.log(data.name);
    console.log(data.job);

    var flight : Flight = {
        FlightId: 0,
        FlightNumber: data.flightNumber,
        DepartAirport: data.departAirport,
        DepartTime: data.departTime,
        ArriveAirport: data.arriveAirport,
        ArriveTime: data.arriveTime,
        PassengerLimit: data.passengerLimit
    };  

    APIService.createFlight(flight)
      .then((response) => {
        console.log(response.data);
        alert("Sys: Added a flight!");
        console.log("Y: go to url: "+url_flights);
        window.location.href = url_flights;
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  return (
    <div id="app" className="container my-3">

      <div className="card mt-3">
          {/* <div className="card-header">Add a Flight</div> */}
          <div className="card-header">
              <p style={{ fontSize: 20, color: "#ffffff", textAlign: "left", paddingLeft: "20px" }}>FLIGHT SYS &gt; View Flights</p>
          </div>

            <div className="card-body">

              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                  <input {...register("flightNumber", { required: true })} className="form-control" placeholder="flightNumber" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                  <input {...register("departAirport", { required: true })} className="form-control" placeholder="departAirport" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                  <input {...register("departTime", { required: true })} className="form-control" placeholder="departTime" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>

                <div className="form-group">
                  {/* <input type="text" className="form-control"  placeholder="Email" /> */}
                  <input {...register("arriveAirport", { required: true })} className="form-control" placeholder="arriveAirport" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                  <input {...register("arriveTime", { required: true })} className="form-control" placeholder="arriveTime" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                  <input {...register("passengerLimit", { required: true })} className="form-control" placeholder="passengerLimit" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>

                <button className="btn btn-sm btn-primary" >Add Flight</button>
                <button className="btn btn-sm btn-warning ml-2" >Clear</button>

              </form>
            </div>
      </div>
    </div>
  );
}

export default FlightAddView;