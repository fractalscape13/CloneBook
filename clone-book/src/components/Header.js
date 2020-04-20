import React from "react";
function Header() {
  return (
    <React.Fragment>
      <h1>Name</h1>
      <img src="http://source.unsplash.com/100x150/?face" />
      <p>Tweets</p>
      <p>Following</p>
      <p>Followers</p>
    </React.Fragment>
  );
}

export default Header;