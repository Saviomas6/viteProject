import { Field, Form, Formik } from "formik";
import React from "react";

export const StepTwoFrom = ({ data, back, next }: any) => {
  const handleSubmitForm = (value: any) => {
    next(value, true);
  };
  return (
    <div>
      <Formik initialValues={data} onSubmit={handleSubmitForm}>
        {({ values }) => (
          <Form>
            <label htmlFor="username">UserName</label>
            <Field name="username" />
            <label htmlFor="password">Password</label>
            <Field name="password" />
            <button type="button" onClick={() => back(values)}>
              Back
            </button>
            <button type="submit">Next</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
