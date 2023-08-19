"use client";

import { useState } from "react";

export type TodoListType = {
  id: string;
  todoText: string;
};

const useTodoList = () => {
  const [listTodo, setListTodo] = useState<TodoListType[]>([]);
  const [todoInput, setTodoInput] = useState<string>("");

  const addTodo = () => {
    const todoUUID = global.crypto.randomUUID();

    if (todoInput) {
      setListTodo((prevState) => [
        ...prevState,
        { id: todoUUID, todoText: todoInput },
      ]);

      setTodoInput("");
    }
  };

  const removeTodo = (id: string) => {
    setListTodo((prevState) =>
      prevState.filter((todoItem) => todoItem.id !== id)
    );
  };

  return { listTodo, todoInput, addTodo, removeTodo, setTodoInput };
};

export default useTodoList;
