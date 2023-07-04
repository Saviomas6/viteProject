import { Form, Formik, Field } from "formik";
import axios from "axios";

const ContactForm = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmitForm = async (values: any) => {
    const result = await axios.post("https://formspree.io/f/xbjejyad", values);
    console.log("result", result);
  };

  return (
    <Formik onSubmit={handleSubmitForm} initialValues={initialValues}>
      <Form>
        <label htmlFor="email">Name</label>
        <Field id="email" type="text" name="name" />
        <label htmlFor="email">Email Address</label>
        <Field id="email" type="email" name="email" />
        <label htmlFor="message">Message</label>
        <Field id="message" type="text" name="message" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
