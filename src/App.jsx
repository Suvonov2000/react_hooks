import React, { useState } from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const App = () => {
  const todoData = useSelector((state) => {
    return state.todo;
  });

  return (
    <div>
      {todoData.data.map((value) => (
        <Card key={value.id} {...value} />
      ))}
    </div>
  );
};

export default App;
