import React from "react";
import PropTypes from "prop-types";

function FeedItem(props) {
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <hr/>
      <p>{props.posting}</p>
    </React.Fragment>
  );
}

FeedItem.propTypes = {
  name: PropTypes.string.isRequired,
  posting: PropTypes.string.isRequired
};

export default FeedItem;