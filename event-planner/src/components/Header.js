import React, { useState } from "react";
import "../styles/Header.css";
import { useUser } from "../context/UserContext";

const Header = ({ onSearch }) => {
    const { user } = useUser();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="header">
      <h1>Event Planner</h1>
      <input
        className="search-input"
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />
      <button className="search-button" onClick={() => onSearch(search)}>Search</button>
      {user ? (
          <>
          <span>Welcome, {user.name}</span>
          <button className="logout-button" onClick={() => user.logout()}>Logout</button>
          </>
      ) : (
      <button className="login-button" onClick={() => user.login()}>Login</button>
      
      )}
    </header>
  );
};

export default Header;
