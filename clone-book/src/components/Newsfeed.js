import React from "react";
import WhatsHappening from "./WhatsHappening";
import Feed from "./Feed";

function Newsfeed(){
  return (
    <React.Fragment>
      <WhatsHappening />
      <Feed />
    </React.Fragment>
  );
}

export default Newsfeed;