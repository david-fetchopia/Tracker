import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function InputForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="habit">Target Habit:</label>
        <input
          name="habit"
          type="text"
          className="form-control"
          placeholder="Enter in a new habit"
          id="habit"
        />
        <label htmlFor="phone">Contact Phone Number:</label>
        <input
          name="phone"
          type="text"
          className="form-control"
          placeholder="Your 10 digit phone number"
          id="phone"
        />
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="Your Moniker"
          id="name"
        />
        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Begin
        </button>
      </div>
    </form>
  );
}

export default InputForm;
