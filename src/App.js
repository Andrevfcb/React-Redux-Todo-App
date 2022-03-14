import "./css/main.css";
import DisplayTodos from "./components/DisplayTodos";
import Todos from "./components/Todos";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { setTodos } from "./redux/reducer";
import { useDispatch, useSelector } from "react-redux";
function App() {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if(data) {
      dispatch(setTodos(JSON.parse(data)))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state))
  })
  

  return (
    <div className="App">
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo App
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
}

export default App;
