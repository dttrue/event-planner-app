import React from "react";
import { useEvent } from "../context/EventContext";
import '../styles/EventList.css';

const EventList = () => {
    const{ events } = useEvent();

    if (events.length === 0) {
        return <p>No events found</p>;
    }

    return (
        <div className="event-list-container">
            <h2>Event List</h2>
            <ul className="event-list">
            {events.map((event) => (
    <li key={event.id}>
        Name: {event.name}
        Date: {event.date} 
        Time: {event.time},
        Location: {event.location}
        Description: {event.description}
    </li>
))}

            </ul>                            
        </div>
    )
} 

export default EventList