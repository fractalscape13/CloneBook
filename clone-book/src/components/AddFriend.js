import React from "react";
import Friend from "./Friend";

const masterFriendList = [
  {
    image: "https://source.unsplash.com/100x150/?cat",
    name: "Steph"
  },
  {
    image: "https://source.unsplash.com/100x150/?human",
    name: "Kristina"
  },
  {
    image: "https://source.unsplash.com/100x150/?person",
    name: "Jose"
  }
]

function AddFriend(){
  return (
    <React.Fragment>
      <h2>Add friends</h2>
      {masterFriendList.map((friend, index) =>
        <Friend image={friend.image}
        name={friend.name}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default AddFriend;