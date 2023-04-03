import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAgeChange = (event) => {
    const ageValue = event.target.value;
    if (ageValue < 0) {
      return;
    }
    setAge(ageValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (username.trim() === "" || age === "") {
      return;
    }

    const newUser = {
      name: username,
      age: age,
    };
    setAge("");
    setUsername("");
    props.changeOfData(newUser);
  };

  return (
    <div className="Form">
      <form className="form_inside" onSubmit={handleSubmit}>
        <div className="input_elements">
          <label className="input_label" htmlFor="username-input">
            Username
          </label>
          <br />
          <input
            type="text"
            id="username-input"
            className="input_field"
            size="60"
            value={username}
            onChange={handleNameChange}
          />
        </div>
        <br />
        <div className="input_elements">
          <label className="input_label" htmlFor="age-input">
            Age (Years)
          </label>
          <br />
          <input
            type="number"
            id="age-input"
            className="input_field"
            value={age}
            onChange={handleAgeChange}
          />
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default Form;

