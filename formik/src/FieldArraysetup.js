import React from "react";
import { useFormik, FieldArray, Formik, Form, Field } from "formik";
import "./index.css";

const FieldArraysetup = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    hobby: [""],
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

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {(errors) => (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field id="firstName" name="firstName" type="text" />

              <br />
              <label htmlFor="lastName">Last Name</label>
              <Field id="lastName" name="lastName" type="text" />

              <br />
              <label htmlFor="email">Email Address</label>
              <Field id="email" name="email" type="email" />

              <br />
              <label htmlFor="hobby">Hobbies</label>
              <FieldArray
                name="hobby"
                render={(props) => {
                  const { form, push, remove } = props;
                  const { values } = form;
                  const { hobby } = values;

                  return (
                    <>
                      {hobby?.map((hobby, index) => (
                        <>
                          <Field name={`hobby[${index}]`} />
                          <button
                            onClick={() => {
                              push("");
                            }}
                          >
                            Add
                          </button>

                          {index > 0 ? (
                            <button
                              onClick={() => {
                                remove(index);
                              }}
                            >
                              Remove
                            </button>
                          ) : null}
                        </>
                      ))}
                    </>
                  );
                }}
              />
              <br />
              <br />
              <br />
              <button type="submit">Submit</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export default FieldArraysetup;
