import React, { useState } from "react";
import Card from "./Card";

const App = () => {
  const [data, setData] = useState([
    { id: 0, completed: false, title: "Task" },
    { id: 1, completed: true, title: "Task" },
  ]);

  const onToggleChange = (id) => {
    setData(
      data.map((value) =>
        value.id === id ? { ...value, completed: !value.completed } : value
      )
    );
  };

  const onDelete = (id) => {
    setData(data.filter((value) => value.id !== id));
  };

  return (
    <div>
      {data.map((value) => (
        <Card
          key={value.id}
          {...value}
          onToggleChange={onToggleChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default App;
