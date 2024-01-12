import React, { useState } from "react";
import "../styles/EventForm.css";
import { useEvent } from "../context/EventContext";

const EventForm = () => {
    const { addEvent, events, editEvent, deleteEvent } = useEvent();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
    });
    
    const handleChange = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    });
    };
    
    const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
    editEvent(formData);
    } else {
    addEvent(formData);
    }
    setFormData({
    name: "",
    date: "",
    time: "",
    location: "",
    description: "",
    });
    setIsEditing(false); 
    };
    
    const handleEdit = (eventToEdit) => {
    setFormData(eventToEdit);
    setIsEditing(true);
    }

const handleDelete = (event) => {
    deleteEvent(event.id);
    setIsEditing(false);
}
    
    return (
    <div className="event-form-container">
    <h1>Event Form</h1>
    <form className="event-form" onSubmit={handleSubmit}>
    {events.map(event => (
    <div key={event.id}> 
        {event.name}
        <button className="edit-button" onClick={() => handleEdit(event)}>Edit</button>
        <button className="delete-button" onClick={() => handleDelete(event)}>Delete</button>
    </div>
))}

    <label>
    Name:
    <input
             className="event-name"
             placeholder="Event Name"
             type="text"
             name="name"
             value={formData.name}
             onChange={handleChange}
           />
    </label>
    <label>
    Date:
    <input
             className="event-date"
             type="date"
             name="date"
             value={formData.date}
             onChange={handleChange}
           />
    </label>
    <label>
    Time:
    <input
             className="event-time"
             type="time"
             name="time"
             value={formData.time}
             onChange={handleChange}
           />
    </label>
    <label>
    Location:
    <input
             className="event-location"
             type="text"
             name="location"
             value={formData.location}
             onChange={handleChange}
           />
    </label>
    <label>
    Description:
    <input
             className="event-description"
             type="text"
             name="description"
             value={formData.description}
             onChange={handleChange}
           />
    </label>
    <button className="event-submit" type="submit">
    Submit
    </button>
    </form>
    </div>
    );
    };
    
    export default EventForm;