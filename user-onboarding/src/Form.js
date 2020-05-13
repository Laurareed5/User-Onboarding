import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const formSubmit = (event) => {
    event.preventDefault();
  };

  const inputChange = (event) => {
    console.log("yeah, boi!", event.target.name);
    setFormState({ ...formState, [event.target.name]: event.target.value });
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
            value={formState.email}
            onChange={inputChange}
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Enter Password Here"
            name="password"
            id="password"
            value={formState.password}
            onChange={inputChange}
          />
        </label>

        <button>Submit</button>
      </div>
    </form>
  );
}
