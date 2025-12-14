import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={Yup.object({
        username: Yup.string().required("Username is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string().required("Password is required"),
      })}
      onSubmit={(values, { resetForm }) => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
          method: "POST",
          body: JSON.stringify(values),
          headers: { "Content-Type": "application/json" },
        }).then(() => resetForm());
      }}
    >
      <Form>
        <Field name="username" placeholder="Username" />
        <ErrorMessage name="username" />

        <Field name="email" type="email" placeholder="Email" />
        <ErrorMessage name="email" />

        <Field name="password" type="password" placeholder="Password" />
        <ErrorMessage name="password" />

        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
