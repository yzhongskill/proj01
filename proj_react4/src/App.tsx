import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import Person from "./models/person";
import Playlist from "./models/playlist";
import Song from "./models/song";
import Passenger from "./models/passenger";
import APIService from "./services/apiService";
import HomeView from "./views/home/HomeView";
import PassengerListView from "./views/passenger/passengerListView";
import PassengerAddView from "./views/passenger/PassengerAddView"
import PassengerEditView from "./views/passenger/PassengerEditView";
import PassengerDeleteView from "./views/passenger/PassengerDeleteView";
import FlightListView from "./views/flight/FlightListView";
import Flight from "./models/flight";
import FlightAddView from "./views/flight/FlightAddView";
import FlightEditView from "./views/flight/FlightEditView";
import FlightDeleteView from "./views/flight/FlightDeleteView";
import PassengerBookView from "./views/book/PassengerBookView";
import FlightBookView from "./views/book/FlightBookView";

type AppProps = {
  songs: Song[];
  people: Person[];
  playlists: Playlist[];
  passengers: Passenger[];
  flights: Flight[];
};

type AppState = {
  passengerList: Passenger[];
  flightList: Flight[];
};

class App extends React.Component<AppProps, AppState> {

  state: AppState ={
    passengerList: [],
    flightList: []
  };
  
  componentDidMount() {
    APIService.getPassengers()
      .then((response) => {
        this.setState({
          passengerList: response.data
        });
      })
      .catch((err: Error) => {
        console.log(err);
      });

      APIService.getFlights()
      .then((response) => {
        this.setState({
          flightList: response.data
        });
      })
      .catch((err: Error) => {
        console.log(err);
      });
  }
  
  render() {
    return (
      <main>
        <NavigationBar />
        <Routes>
          <Route path="/" element={ <HomeView />} />

            <Route path="/passengers/*" element={ 
            <React.Suspense fallback={<>...</>}>
              <PassengerListView passengers={this.state.passengerList} />
            </React.Suspense>} />

            <Route path="/passengersAdd/*" element={ 
            <React.Suspense fallback={<>...</>}>
              <PassengerAddView/>
            </React.Suspense>} />

            <Route path="/passengersEdit/:passengerId" element={ 
            <React.Suspense fallback={<>...</>}>
              <PassengerEditView/>
            </React.Suspense>} />

            <Route path="/passengersDelete/:passengerId" element={ 
            <React.Suspense fallback={<>...</>}>
              <PassengerDeleteView/>
            </React.Suspense>} />

            <Route path="/flights/*" element={ 
            <React.Suspense fallback={<>...</>}>
              <FlightListView flights={this.state.flightList}/>
            </React.Suspense>} />

            <Route path="/flightsAdd/*" element={ 
            <React.Suspense fallback={<>...</>}>
              <FlightAddView/>
            </React.Suspense>} />

            <Route path="/flightsEdit/:flightId" element={ 
            <React.Suspense fallback={<>...</>}>
              <FlightEditView/>
            </React.Suspense>} />

            <Route path="/FlightsDelete/:flightId" element={ 
            <React.Suspense fallback={<>...</>}>
              <FlightDeleteView/>
            </React.Suspense>} />

            <Route path="/passengersBook/*" element={ 
            <React.Suspense fallback={<>...</>}>
              <PassengerBookView passengers={this.state.passengerList} />
            </React.Suspense>} />

            <Route path="/flightsBook/:passengerId" element={ 
            <React.Suspense fallback={<>...</>}>
              <FlightBookView flights={this.state.flightList}/>
            </React.Suspense>} />

        </Routes>
      </main>
    );
  }

  componentDidUpdate() {}

  componentDidCatch() {}

  componentWillUnmount() {}

  // addSong = (song: Song) => {
  //   this.setState((state) => {
  //     state.songList.push(song)
  //   });
  // };
}

export default App;
