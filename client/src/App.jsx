import { useState, useEffect } from "react";

function App() {
  const data = { title: 1, weight: 50, reps: "100" };
  const add = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/workouts", {
        method: "POST",
        body: JSON.stringify({ ...data }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const respData = await response.json();
      console.log(respData);
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className="App">
      <h1>Setting up stuff</h1>
      <button onClick={add}></button>
    </div>
  );
}

export default App;
