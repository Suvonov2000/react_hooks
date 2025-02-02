import React from "react";

const DelButton = (props) => {
  return <button onClick={() => props.onDelete(props.id)}>Delete</button>;
};

export default DelButton;
