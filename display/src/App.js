import "./App.css";
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isName, setIsName] = useState(false);

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullName = `${firstName} ${lastName}`;
    setFullName(fullName);

    setIsName(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Full Name Display</h1>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          value={firstName}
          name="firstName"
          onChange={handleFirstName}
          required
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          value={lastName}
          name="lastName"
          onChange={handleLastName}
          required
        />
        <br />
        <button type="submit">Submit</button>
        {isName && <p>FullName: {fullName}</p>}
      </form>
    </div>
  );
}

export default App;
