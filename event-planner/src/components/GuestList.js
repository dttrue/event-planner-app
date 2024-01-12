import React, { useState } from "react";
import "../styles/GuestList.css";
import { useEvent } from "../context/EventContext";

const GuestList = () => {
    const { guests = [], addGuest, removeGuest } = useEvent();
  const [newGuestName, setNewGuestName] = useState("");


const handleAddGuest = () => {
    if(newGuestName){
        console.log('new added guest:', newGuestName);
        const guest = {
            id: Date.now(),
            name: newGuestName
        }
        addGuest(guest);
        setNewGuestName("");
    }
    
}
 



  const handleOnChange = (event) => {
    setNewGuestName(event.target.value);
  };

  const handleRemoveGuest = (guestId) => {
    removeGuest(guestId);
   
  }

  const guestList = guests.map((guest) => (
    <li key={guest.id}>
        className="guest-item"
        {guest.name}
        <button onClick={() => handleRemoveGuest(guest.id)}>Remove</button>
    </li>
));

  return (
    <div className="guest-list-container">
      <h2>Guest List</h2>
      <input
        className="new-guest"
        type="text"
        value={newGuestName}
        onChange={handleOnChange}
        placeholder="Add a new guest"
      />
      <button
        className="add-guest-button"
        type="submit"
        disabled={!newGuestName}
        onClick={handleAddGuest}
      >
        Add Guest
      </button>
      <ul className="guest-list">
      {guestList}
      </ul>
    </div>
  );
};

export default GuestList;
