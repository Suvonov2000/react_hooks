import React from "react";
import DelButton from "./DelButton";
import { useDispatch } from "react-redux";
import { onToggle } from "./redux/todoSlice";

const Card = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      {props.title}
      <input
        type={"checkbox"}
        checked={props.completed}
        onChange={(e) => dispatch(onToggle({ id: props.id }))}
      />
      <DelButton id={props.id} />
    </div>
  );
};

export default Card;
