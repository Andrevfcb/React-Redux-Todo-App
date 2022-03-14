import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import TodoItem from "./TodoItem";
import { AnimatePresence, motion } from "framer-motion";

const DisplayTodos = (props) => {

  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  const [sort, setSort] = useState("active");
  return (
    <div className="displaytodos">
      <div className="buttons">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("active")}
        >
          Active
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("completed")}
        >
          Completed
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setSort("all")}
        >
          All
        </motion.button>
      </div>
      <ul>
        <AnimatePresence>
          {state.length > 0 && sort === "active"
            ? state.map((item) => {
                return (
                  item.completed === false && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={(id) => dispatch(removeTodos(id))}
                      updateTodo={(obj) => dispatch(updateTodos(obj))}
                      completeTodo={(id) => dispatch(completeTodos(id))}
                    />
                  )
                );
              })
            : null}
          {/* for completed items */}
          {state.length > 0 && sort === "completed"
            ? state.map((item) => {
                return (
                  item.completed === true && (
                    <TodoItem
                      key={item.id}
                      item={item}
                      removeTodo={(id) => dispatch(removeTodos(id))}
                      updateTodo={(obj) => dispatch(updateTodos(obj))}
                      completeTodo={(id) => dispatch(completeTodos(id))}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {state.length > 0 && sort === "all"
            ? state.map((item) => {
                return (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={(id) => dispatch(removeTodos(id))}
                    updateTodo={(obj) => dispatch(updateTodos(obj))}
                    completeTodo={(id) => dispatch(completeTodos(id))}
                  />
                );
              })
            : null}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default DisplayTodos;
