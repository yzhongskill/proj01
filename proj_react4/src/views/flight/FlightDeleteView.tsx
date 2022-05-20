import React, { useEffect, useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import { useParams } from 'react-router-dom';
import Flight from '../../models/flight';
import APIService from '../../services/apiService';
import { createHashHistory } from "history";

function PassengerDeleteView() {

    const params = useParams();

    console.log(params);
    console.log('delete url: '+params.flightId);
    var flightId: number = Number(params.flightId);

//   const refFlight = useRef<Flight[]>();
  const refFlightOne = useRef<Flight>();

  const { register, handleSubmit, formState: {errors} } = useForm();
  
  const protocol = window.location.protocol;
  const domain = window.location.hostname;
  const port = window.location.port;
  const full = `${protocol}//${domain}:${port? port : ""}`
  const url_flights = `${full}/Flights`

    useEffect(() => {

        console.log("Y: data.flightId: "+ flightId);

        APIService.deleteFlight(flightId)
        .then((response) => {
            console.log(response.data);
            console.log("S): deteleted the flight.");
            alert("Sys: deteleted the flight!");

            console.log("Y: go to url: "+url_flights);
            window.location.href = url_flights;
        })
        .catch((err: Error) => {
            console.log(err);
        });

    }, [])

  return (
    <div></div>
  );
}

export default PassengerDeleteView;
