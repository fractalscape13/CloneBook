import React from "react";
import PropTypes from "prop-types";

function Friend(props){
  return (
    <React.Fragment>
      <img alt="pic" src={props.image}/>
      <h4>{props.name}</h4>
    </React.Fragment>
  );
}

Friend.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Friend;