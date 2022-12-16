import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import * as actions from "../actions";

function App(props) {
  const renderButton = () => {
    if (props.auth) {
      return <button onClick={() => props.changeAuth(false)}>Sign Out</button>;
    } else {
      return <button onClick={() => props.changeAuth(true)}>Sign In</button>;
    }
  };

  const renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a Comment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  };
  return (
    <div>
      {renderHeader()}
      <Routes>
        <Route path="/post" element={<CommentBox />} />
        <Route path="/" exact element={<CommentList />} />
      </Routes>
    </div>
  );
}

function mapStateToProps(state) {
  return { auth: state.auth };
}
export default connect(mapStateToProps, actions)(App);
