import { Field, Form, Formik } from "formik";
import React from "react";

export const StepOneForm = ({ data, next }: any) => {
  const handleSubmitForm = (value: any) => {
    next(value);
  };

  return (
    <div>
      <Formik initialValues={data} onSubmit={handleSubmitForm}>
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" />
          <label htmlFor="age">Age</label>
          <Field name="age" />
          <button type="submit">Next</button>
        </Form>
      </Formik>
    </div>
  );
};
