import React from "react";
import DelButton from "./DelButton";

const Card = (props) => {
  return (
    <div>
      {props.title}
      <input
        type={"checkbox"}
        checked={props.completed}
        onChange={(e) => props.onToggleChange(props.id)}
      />
      <DelButton id={props.id} onDelete={props.onDelete} />
    </div>
  );
};

export default Card;
