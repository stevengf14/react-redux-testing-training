import React from "react";
import requireAuth from "./requireAuth";

const Feature = (props) => {
  return <div>This is a Feature!</div>;
};
export default requireAuth(Feature);
