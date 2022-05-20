import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import Passenger from '../../models/passenger';
import APIService from '../../services/apiService';
import { createHashHistory } from "history";

function PassengerDeleteView() {

    const params = useParams();

    console.log(params);

    console.log('delete url: '+params.passengerId);
    var passengerId: number = Number(params.passengerId);

  const refPass = useRef<Passenger[]>();
  const refPassOne = useRef<Passenger>();

  const { register, handleSubmit, formState: {errors} } = useForm();
  
  // const history = createHashHistory();
  
  const protocol = window.location.protocol;
  const domain = window.location.hostname;
  const port = window.location.port;
  const full = `${protocol}//${domain}:${port? port : ""}`
  const url_passengers = `${full}/Passengers`

    useEffect(() => {

        console.log("Y: data.passengerId: "+ passengerId);

        APIService.deletePassenger(passengerId)
        .then((response) => {
            console.log(response.data);
            // alert("S): deteleted the passenger.");
            console.log("S): deteleted the passenger.");
            alert("Sys: deteleted the passenger!");

            console.log("Y: go to url: "+url_passengers);
            // history.push(url_passengers);
            window.location.href = url_passengers;

            // history.push("/passengers");
            // history.go(2);
        })
        .catch((err: Error) => {
            console.log(err);
        });

        // code to run on component mount
        // console.log("Yao: useEffect(). ");

        // APIService.getPassenger(passengerId)
        // .then((response) => {
        //     refPassOne.current = response.data;
        //     console.log(refPassOne.current.Name);
        // })
        // .catch((err: Error) => {
        //     console.log(err);
        // });

    }, [])

  // const onSubmit = (data: any) => {

  //   console.log("Y: data.passengerId: "+ data.passengerId);

  //   APIService.deletePassenger(data.passengerId)
  //     .then((response) => {
  //       console.log(response.data);
  //       console.log("S): deteleted the passenger.");
  //       alert("Sys: deteleted the passenger!");
  //     })
  //     .catch((err: Error) => {
  //       console.log(err);
  //     });
  // }

  return (
    <div></div>
    // <div id="app" className="container my-3">

    //   <div className="card mt-3">
    //       <div className="card-header">Delete a Passenger</div>
    //         <div className="card-body">

    //           <form onSubmit={handleSubmit(onSubmit)}>

    //           <div className="form-group">
    //               <input {...register("passengerId", { required: true })} className="form-control" value={refPassOne.current?.PassengerId} placeholder="PassengerId" />
    //               {errors.name?.type === 'required' && <span> This field is required</span>}
    //             </div>

    //             <div className="form-group">
    //                 {/* <input type="text" className="form-control" defaultValue={refPassOne.current?.Name} placeholder="Name" /> */}
    //               <input {...register("name", { required: true })} className="form-control" defaultValue={refPassOne.current?.Name} placeholder="Name" />
    //               {errors.name?.type === 'required' && <span> This field is required</span>}
    //             </div>
    //             <div className="form-group">
    //               <input {...register("job", { required: true })} className="form-control" defaultValue={refPassOne.current?.Job} placeholder="Job" />
    //               {errors.name?.type === 'required' && <span> This field is required</span>}
    //             </div>

    //             <div className="form-group">
    //               {/* <input type="text" className="form-control"  placeholder="Email" /> */}
    //               <input {...register("email", { required: true })} className="form-control" defaultValue={refPassOne.current?.Email} placeholder="Email" />
    //               {errors.name?.type === 'required' && <span> This field is required</span>}
    //             </div>
    //             <div className="form-group">
    //               {/* <input type="text" className="form-control" placeholder="Age" /> */}
    //               <input {...register("age", { required: true })} className="form-control" defaultValue={refPassOne.current?.Age} placeholder="Age" />
    //               {errors.name?.type === 'required' && <span> This field is required</span>}
    //             </div>

    //             <button className="btn btn-sm btn-primary" >Delete Passenger</button>
    //             <button className="btn btn-sm btn-warning ml-2" >Clear</button>

    //           </form>
    //         </div>
    //   </div>
    // </div>
  );

}

export default PassengerDeleteView;
