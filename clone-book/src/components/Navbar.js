import React from "react";
import Search from "./Search";

function Navbar() {
  return (
    <React.Fragment>
      <h1>Home</h1>
      <h1>Notifications</h1>
      <h1>Messages</h1>
      <Search />
    </React.Fragment>
  );
}

export default Navbar;