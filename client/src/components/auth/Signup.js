import React from "react";
import { Field, reduxForm } from "redux-form";
import { compose } from "redux";
import { connect } from "react-redux";
import * as actions from "../../actions";

const Signup = (props) => {
  const { handleSubmit } = props;

  const onSubmit = (formProps) => {
    props.signup(formProps);
  };

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
      <button type="submit">Sign Up!</button>
    </form>
  );
};
export default compose(
  connect(null, actions),
  reduxForm({ form: "signup" })
)(Signup);
