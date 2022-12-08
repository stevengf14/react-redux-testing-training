import React from "react";
import { reduxForm, Field } from "redux-form";

function Signup(props) {
  const onSubmit = (formProps) => {
    console.log(formProps);
  };

  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <button>Sign Up!</button>
    </form>
  );
}
export default reduxForm({ form: "signup" })(Signup);
