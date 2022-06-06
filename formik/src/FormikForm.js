import React from "react";
import { useFormik, FieldArray } from "formik";
import "./index.css";

const FormikForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    hobby:['']
  };
  const validate = (values) => {
    const error = {};
    
    if (!values.firstName) {
      error.firstName = "First Name is Required";
    } else if (values.firstName.length < 2) {
      error.firstName = "Minimam char is 2";
    }

    if (!values.lastName) {
      error.lastName = "Last Name is Required";
    } else if (values.lastName.length < 2) {
      error.lastName = "Minimam char is 2";
    }

    if (!values.email) {
      error.email = "Email is Required";
    }
    return error;
  };

  const formik = useFormik({
    initialValues ,
    validate ,
    onSubmit: (data) => {
      console.log(data);
    },
  });
  return (
    <>
      {" "}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          {formik.errors.firstName ? (
            <div style={{ color: "red" }}>{formik.errors.firstName}</div>
          ) : null}
          <br />
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />

          {formik.errors.lastName ? (
            <div style={{ color: "red" }}>{formik.errors.lastName}</div>
          ) : null}
          <br />
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          {formik.errors.email ? (
            <div style={{ color: "red" }}>{formik.errors.email}</div>
          ) : null}
          <br/>
          
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default FormikForm;
