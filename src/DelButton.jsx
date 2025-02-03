import React from "react";
import { useDispatch } from "react-redux";
import { onDelete } from "./redux/todoSlice";

const DelButton = (props) => {
  const dispatch = useDispatch();
  return (
    <button onClick={() => dispatch(onDelete({ id: props.id }))}>Delete</button>
  );
};

export default DelButton;
