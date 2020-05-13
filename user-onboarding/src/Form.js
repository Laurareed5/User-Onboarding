import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const formSubmit = (event) => {
    event.preventDefault();
  };

  const inputChange = (event) => {
    setFormState({ name: event.target.value });
  };
  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        <input
          type="text"
          placeholder="First and Last Name"
          name="name"
          id="name"
          value={formState.name}
          onChange={inputChange}
        />
      </label>
      <div>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Enter Email Address Here"
            name="email"
            id="email"
            value={""}
            onChange={inputChange}
          />
        </label>
        <button>Submit</button>
      </div>
    </form>
  );
}
