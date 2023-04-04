import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleAgeChange = (event) => {
    const ageValue = event.target.value;
    if (ageValue < 0) {
      setErrorMessage("Invalid age value");
    } else {
      setAge(ageValue);
      setErrorMessage("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validation
    if (username.trim() === "") {
      setErrorMessage("Empty username field");
      return;
    }
    if (age === "") {
      setErrorMessage("Empty age field");
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
          <input
            type="text"
            id="username-input"
            size="60"
            className="input_field"
            value={username}
            onChange={handleNameChange}
            required
          />
        </div>

        <div className="input_elements">
          <label className="input_label" htmlFor="age-input">
            Age (Years)
          </label>
          <input
            type="number"
            id="age-input"
            value={age}
            className="input_field"
            onChange={handleAgeChange}
            required
          />
        </div>

        <button className="button" type="submit">
          Submit
        </button>

        {errorMessage && <p className="error">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Form;

