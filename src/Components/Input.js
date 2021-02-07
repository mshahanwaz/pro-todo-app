import React, { useState } from "react";
import "./Input.css";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";

function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = (e) => {
    e.preventDefault();
    if (input) {
      console.log(`adding ${input}`);
      dispatch(
        saveTodo({
          item: input,
          done: false,
          id: Date.now(),
        })
      );
    }
    setInput("");
  };

  return (
    <form className="input">
      <input
        type="text"
        placeholder="Enter a todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </form>
  );
}

export default Input;
