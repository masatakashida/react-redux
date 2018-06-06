import React, { PropTypes } from 'react';

function Greeting(props) {
  return (<div>Hi {props.name}</div>);
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};
// nameはstringじゃないといけない
export default Greeting;
