import React from 'react';
import { useForm } from "react-hook-form";
import Passenger from '../../models/passenger';
import APIService from '../../services/apiService';

import { createHashHistory } from "history";

function PassengerAddView() {

  const { register, handleSubmit, formState: {errors} } = useForm();
  // const onSubmit = (data: any) => console.log(data);
  // {"email":"abc@gmail.com"}

  // const history = createHashHistory();

  const protocol = window.location.protocol;
  const domain = window.location.hostname;
  const port = window.location.port;
  const full = `${protocol}//${domain}:${port? port : ""}`
  const url_passengers = `${full}/Passengers`

  console.log("Y: full: " + full);
  console.log("Y: url_passengers: " + url_passengers);

  const onSubmit = (data: any) => {
    console.log(data.name);
    console.log(data.job);

    var passenger : Passenger = {
      FirstName: data.firstname,
      LastName: data.lastname,
      Job: data.job,
      Email: data.email,
      Age: data.age,
      PassengerId: 0,
      Flights: []
    };  

    APIService.createPassenger(passenger)
      .then((response) => {
        console.log(response.data);
        alert("Sys: Added a passenger!");

        console.log("Y: go to url: "+url_passengers);
        // history.push(url_passengers);
        window.location.href = url_passengers;
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }

  return (
    <div id="app" className="container my-3">

      <div className="card mt-3">
          {/* <div className="card-header">Add a Passenger</div> */}
          <div className="card-header">
          <p style={{ fontSize: 20, color: "#ffffff", textAlign: "left", paddingLeft: "20px" }}>FLIGHT SYS &gt; Add a Passenger</p>
                </div>
            <div className="card-body">

              <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-group">
                  <input {...register("firstname", { required: true })} className="form-control" placeholder="FirstName" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                  <input {...register("lastname", { required: true })} className="form-control" placeholder="LastName" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                  <input {...register("job", { required: true })} className="form-control" placeholder="Job" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>

                <div className="form-group">
                  {/* <input type="text" className="form-control"  placeholder="Email" /> */}
                  <input {...register("email", { required: true })} className="form-control" placeholder="Email" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                  <input {...register("age", { required: true })} className="form-control" placeholder="Age" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>

                <button className="btn btn-sm btn-primary" >Add Passenger</button>
                <button className="btn btn-sm btn-warning ml-2" >Clear</button>

              </form>
            </div>
      </div>
    </div>
  );
}

export default PassengerAddView;