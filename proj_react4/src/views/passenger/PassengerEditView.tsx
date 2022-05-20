import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import Passenger from '../../models/passenger';
import APIService from '../../services/apiService';

//create your forceUpdate hook
function useForceUpdate(){
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

function PassengerEditView() {

  const [isOnline, setIsOnline] = useState<Passenger>();
  const [count, setCount] = useState(0);

  const params = useParams();
  console.log(params);
  console.log('url: '+params.passengerId);
  var passengerId: number = Number(params.passengerId);

  const refPassOne = useRef<Passenger>();

  const { register, handleSubmit, formState: {errors} } = useForm();
  const onSubmit = (data: any) => console.log(data);
  
  const protocol = window.location.protocol;
  const domain = window.location.hostname;
  const port = window.location.port;
  const full = `${protocol}//${domain}:${port? port : ""}`
  const url_passengers = `${full}/Passengers`

  console.log("Yao: APIService.getPassenger(). ");

  if (count == 0)
  {
    APIService.getPassenger(passengerId)
        .then((response) => {
            refPassOne.current = response.data;
            console.log("Y: inside useEffect(): refPassOne.current.PassengerId: "+refPassOne.current.PassengerId);
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

        var passenger : Passenger = {
          PassengerId: Number(ele.passengerId.value),
          FirstName: ele.firstname.value,
          LastName: ele.lastname.value,
          Job: ele.job.value,
          Email: ele.email.value,
          Age: ele.age.value,
          Flights: []
        };  

        APIService.updatePassenger(passenger)
        .then((response) => {
            console.log("Y: updated Passenger.");
            console.log(response.data);
            alert("Sys: updated the passenger!");

            window.location.href = url_passengers;
        })
        .catch((err: Error) => {
            console.log(err);
        });
      }

  return (
    
    <div id="app" className="container my-3">

      <div className="card mt-3">
          {/* <div className="card-header">Edit a Passenger 2</div> */}
            <div className="card-header">
                <p style={{ fontSize: 20, color: "#ffffff", textAlign: "left", paddingLeft: "20px" }}>FLIGHT SYS &gt; Edit a Passenger</p>
            </div>

            <div className="card-body">

              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <form onSubmit={handleSubmit_y}>

              <div className="form-group">
                  <input {...register("passengerId", { required: true })} className="form-control" defaultValue={refPassOne.current?.PassengerId} placeholder="PassengerId" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>

                <div className="form-group">
                    {/* <input type="text" className="form-control" defaultValue={refPassOne.current?.Name} placeholder="Name" /> */}
                  <input {...register("firstname", { required: true })} className="form-control" defaultValue={refPassOne.current?.FirstName} placeholder="Name" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                    {/* <input type="text" className="form-control" defaultValue={refPassOne.current?.Name} placeholder="Name" /> */}
                  <input {...register("lastname", { required: true })} className="form-control" defaultValue={refPassOne.current?.LastName} placeholder="Name" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                  <input {...register("job", { required: true })} className="form-control" defaultValue={refPassOne.current?.Job} placeholder="Job" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>

                <div className="form-group">
                  {/* <input type="text" className="form-control"  placeholder="Email" /> */}
                  <input {...register("email", { required: true })} className="form-control" defaultValue={refPassOne.current?.Email} placeholder="Email" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                <div className="form-group">
                  {/* <input type="text" className="form-control" placeholder="Age" /> */}
                  <input {...register("age", { required: true })} className="form-control" defaultValue={refPassOne.current?.Age} placeholder="Age" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div>
                {/* <div className="form-group">
                  <input {...register("age", { required: true })} className="form-control" placeholder="Age" />
                  {errors.name?.type === 'required' && <span> This field is required</span>}
                </div> */}

                <button className="btn btn-sm btn-primary" >Edit Passenger</button>
                <button className="btn btn-sm btn-warning ml-2" >Clear</button>

              </form>
            </div>
      </div>
    </div>
  );

}

export default PassengerEditView;