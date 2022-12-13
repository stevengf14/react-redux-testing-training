import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function requireAuth(ChildComponent) {
  const ComposedComponent = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      shouldNavigateAway();
    });

    const shouldNavigateAway = () => {
      if (!props.auth) {
        navigate("/");
      }
    };
    return <ChildComponent {...props} />;
  };
  function mapStateToProps(state) {
    return { auth: state.auth.authenticated };
  }
  return connect(mapStateToProps)(ComposedComponent);
}
