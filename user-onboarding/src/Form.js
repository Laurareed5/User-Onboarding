import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup.string().required("Oops, you forgot your own name!"),
  email: yup
    .string()
    .required("Don't forget your email!")
    .email("Don't forget your email!"),
  password: yup.string().required("What's the secret password?"),
  terms: yup.boolean().oneOf([true]),
});

export default function Form() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
  });

  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    password: "",
    terms: "",
  });

  const validate = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrorState({
          ...errorState,
          [event.target.name]: err.errors[0],
        });
      });
  };

  const inputChange = (event) => {
    event.persist();
    validate(event);
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormState({ ...formState, [event.target.name]: value });
  };

  const formSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://reqres.in/api/users", formState)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
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
        {errorState.name.length > 0 ? (
          <p className="error">{errorState.name}</p>
        ) : null}
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
          {errorState.email.length > 0 ? (
            <p className="error">{errorState.email}</p>
          ) : null}
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
          {errorState.password.length > 0 ? (
            <p className="error">{errorState.password}</p>
          ) : null}
        </label>

        <label htmlFor="terms">
          Terms & Conditions
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formState.terms}
            onChange={inputChange}
          />
        </label>

        <button>Submit</button>
      </div>
    </form>
  );
}
