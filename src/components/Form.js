import React, { useState } from "react";
import "./Form.css";

const Form = (props) => {
  const [username, setuserName] = useState("")
  const [age, setAge] = useState("");

  const NameChange = (event) => {
    setuserName(event.target.value);
  };

  const ageChange = (event) => {
    setAge(event.target.value);
  };

  const FormSubmitHandler = (event) => {
    event.preventDefault();
    const newUser={
        name: username,
        age:age
    }
    setAge('');
    setuserName('')
    props.changeOfData(newUser);
  };

  return (
    <div className="Form">
      <form className="form_inside" onSubmit={FormSubmitHandler}>
        <div className="input_elements">
          <label className="input_label">Username</label>
          <br></br>
          <input type="text" size="60" value={username} onChange={NameChange}></input>
        </div>
        <br></br>
        <div className="input_elements">
          <label className="input_label">Age (Years)</label>
          <br></br>
          <input type="number" value={age} onChange={ageChange}></input>
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
