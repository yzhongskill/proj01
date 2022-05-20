import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import Flight from '../../models/flight';
import APIService from '../../services/apiService';

// import { createHashHistory } from "history";

//create your forceUpdate hook
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
  }

function FlightEditView() {

    const [isOnline, setIsOnline] = useState<Flight>();
    const [count, setCount] = useState(0);

    const params = useParams();
    console.log(params);
    console.log('url: '+params.flightId);
    var flightId: number = Number(params.flightId);

    const refFlightOne = useRef<Flight>();
  
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data: any) => console.log(data);
    
    const protocol = window.location.protocol;
    const domain = window.location.hostname;
    const port = window.location.port;
    const full = `${protocol}//${domain}:${port? port : ""}`
    const url_flights = `${full}/Flights`
  
    // console.log("Yao: APIService.getPassenger(). ");
  
    if (count == 0)
    {
        APIService.getFlight(flightId)
            .then((response) => {
                refFlightOne.current = response.data;
                console.log("Y: inside useEffect(): refPassOne.current.PassengerId: "+refFlightOne.current.FlightId);
                console.log("Y: inside useEffect(): refPassOne.current.FlightNumber: "+refFlightOne.current.FlightNumber);
                setIsOnline(response.data);

                setCount(1);
            })
            .catch((err: Error) => {
                console.log(err);
            });
    }
        
    const handleSubmit_y = function (event: any){
        event.preventDefault()

        var ele = event.currentTarget.elements;

        var flight : Flight = {
            FlightId: Number(ele.flightId.value),
            FlightNumber: ele.flightNumber.value,
            DepartAirport: ele.departAirport.value,
            DepartTime: ele.departTime.value,
            ArriveAirport: ele.arriveAirport.value,
            ArriveTime: ele.arriveTime.value,
            PassengerLimit: ele.passengerLimit.value
        };  

        APIService.updateFlight(flight)
        .then((response) => {
            console.log("Y: updated the Flight.");
            console.log(response.data);
            alert("Sys: updated the Flight!");

            window.location.href = url_flights;
        })
        .catch((err: Error) => {
            console.log(err);
        });
    }

  return (
    <div id="app" className="container my-3">

      <div className="card mt-3">
          {/* <div className="card-header">Edit a Flight</div> */}
          <div className="card-header">
              <p style={{ fontSize: 20, color: "#ffffff", textAlign: "left", paddingLeft: "20px" }}>FLIGHT SYS &gt; Edit a Flight</p>
          </div>

            <div className="card-body">

              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <form onSubmit={handleSubmit_y}>

              <div className="form-group">
                  <input {...register("flightId", { required: true })} className="form-control" defaultValue={refFlightOne.current?.FlightId} placeholder="flightId" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>

                <div className="form-group">
                  <input {...register("flightNumber", { required: true })} className="form-control" defaultValue={refFlightOne.current?.FlightNumber} placeholder="flightNumber" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                  <input {...register("departAirport", { required: true })} className="form-control" defaultValue={refFlightOne.current?.DepartAirport} placeholder="departAirport" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                  <input {...register("departTime", { required: true })} className="form-control" defaultValue={refFlightOne.current?.DepartTime} placeholder="departTime" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>

                <div className="form-group">
                  {/* <input type="text" className="form-control"  placeholder="Email" /> */}
                  <input {...register("arriveAirport", { required: true })} className="form-control" defaultValue={refFlightOne.current?.ArriveAirport} placeholder="arriveAirport" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                  {/* <input type="text" className="form-control" placeholder="Age" /> */}
                  <input {...register("arriveTime", { required: true })} className="form-control" defaultValue={refFlightOne.current?.ArriveTime} placeholder="arriveTime" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                  <input {...register("passengerLimit", { required: true })} className="form-control" defaultValue={refFlightOne.current?.PassengerLimit} placeholder="passengerLimit" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>

                <button className="btn btn-sm btn-primary" >Edit Flight</button>
                <button className="btn btn-sm btn-warning ml-2" >Clear</button>

              </form>
            </div>
      </div>
    </div>
  );

}

export default FlightEditView;