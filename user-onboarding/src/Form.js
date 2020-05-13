import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
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
        Name:
        <input type="text" name="name" />
      </label>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}
