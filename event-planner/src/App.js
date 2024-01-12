import React from "react";
import Header from "./components/Header";
import EventForm from "./components/EventForm";
import TaskTracker from "./components/TaskTracker";
import Footer from "./components/Footer";
import { EventProvider } from "./context/EventContext";
import { UserProvider } from "./context/UserContext";
import EventList from "./components/EventList";
import './styles/App.css';
import GuestList from "./components/GuestList";

function App() {
  return (
    <EventProvider>
      <UserProvider>
        <div className="App">
        <Header />
        <EventForm />
        <EventList />
        <GuestList />
        <TaskTracker />
        <Footer />
        </div>
      </UserProvider>
    </EventProvider>
  
  );
}

export default App;

