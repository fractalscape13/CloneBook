import React from "react";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Newsfeed from "./Newsfeed";
import AddFriend from "./AddFriend";

function App(){
  return (
    <React.Fragment>
      <Navbar />
      <hr/>
      <Profile />
      <Newsfeed />
      <AddFriend />
    </React.Fragment>
  );
}

export default App;
