import { createContext, useState, useContext } from "react";

export const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [guests, setGuests] = useState([]);

  const addGuest = (guestName) => {
    console.log('added guest:', guestName);
    const newGuest = {
      id: Date.now(),
      name: guestName
    };
    setGuests([...guests, newGuest]);
   
      
  }

  const removeGuest = (guestId) => {
    const updatedGuests = guests.filter((guest) => guest.id !== guestId);
    setGuests(updatedGuests);
      
  }

  const addEvent = (event) => {
    setEvents([...events, event]);
  }

  const deleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    setEvents(updatedEvents);
  }

  const editEvent = (event) => {
    const updatedEvents = events.map((ev) => {
      if (ev.id === event.id) {
        return event;
      }
      return ev;
    });
    setEvents(updatedEvents);
  }
  

  return (
    <EventContext.Provider
      value={{
        events,
        addEvent,
        deleteEvent,
        editEvent,
        addGuest,
        removeGuest
      }}
    >
      {children}
    </EventContext.Provider>
  )
};

export const useEvent = () => useContext(EventContext);


