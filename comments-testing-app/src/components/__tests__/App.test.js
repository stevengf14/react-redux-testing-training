import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

let wrapped;

beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a comment box", () => {
  /*const div = document.createElement('div');
    
    ReactDOM.render(<App />, div);
    
    // Looks inside the div
    // and checks to see if the CommentBox is in there

    // expect(div.innerHTML).toBeTruthy(); --> verify if the the expression is true or false
    expect(div.innerHTML).toContain('Comment Box');
    
    ReactDOM.unmountComponentAtNode(div);*/

  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it("shows a comment list", () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
