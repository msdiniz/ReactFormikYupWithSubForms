import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { NameSubForm } from "./NameSubForm";
// https://rajeshnaroth.medium.com/managing-nested-forms-gracefully-with-formik-a7ed35788653
// https://codesandbox.io/s/react-formik-yup-sub-forms-vs0dm2?file=/src/ReactFormikForm.js

const initialValues = {
  name: {
    first: "Rajesh",
    last: "Naroth"
  }
};

const nameSchema = Yup.object().shape({
  name: Yup.string().required("Required")
});

const handleSubmit = (values) => {
  console.log(values);
};

const NameForm = ({ handleSubmit, ...props }) => {
  return (
    <Form>
      <Field name="name" component={NameSubForm} />
      <input type="submit" value="Submit" onSubmit={handleSubmit} />
    </Form>
  );
};

export const ReactFormikForm = () => (
  <div>
    <h3>Sub Forms</h3>
    <Formik
      initialValues={initialValues}
      validationSchema={nameSchema}
      onSubmit={handleSubmit}
      children={NameForm}
    />
  </div>
);
