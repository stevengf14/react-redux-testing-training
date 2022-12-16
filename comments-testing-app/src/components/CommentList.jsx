import React from "react";
import { connect } from "react-redux";

function CommentList(props) {
  function renderComments() {
    return props.comments.map((comment) => {
      return <li key={comment}>{comment}</li>;
    });
  }

  return (
    <div>
      <h4>Comment List</h4>
      <ul>{renderComments()}</ul>
    </div>
  );
}
function mapStateToProps(state) {
  return { comments: state.comments };
}
export default connect(mapStateToProps)(CommentList);
