"use client";

import { SVGButton } from "@/shared/components";
import useTodoList, { TodoListType } from "./useTodoList";

type CheckListPropsType = {
  onRemove: (id: string) => void;
} & TodoListType;

const CheckList = ({ id, todoText, onRemove }: CheckListPropsType) => {
  return (
    <div className="group flex items-start relative w-full">
      <input
        id={id}
        type="checkbox"
        value=""
        className="w-6 h-6 text-black bg-white border-black border-2 rounded focus:ring-black dark:focus:ring-black"
      />
      <label
        htmlFor={id}
        className="ml-2 text-md font-medium text-gray-900 dark:text-gray-300"
      >
        {todoText}
      </label>
      <SVGButton
        className="hidden group-hover:block absolute -right-5"
        icon="x-mark"
        onClick={() => onRemove(id)}
      />
    </div>
  );
};

const TodoList = () => {
  const { listTodo, todoInput, addTodo, removeTodo, setTodoInput } =
    useTodoList();
  return (
    <div className="flex flex-col mt-6 w-64 items-center gap-6">
      <div className="flex flex-col gap-1 w-full">
        {listTodo.length ? (
          listTodo.map((todoItem) => (
            <CheckList
              key={todoItem.id}
              todoText={todoItem.todoText}
              id={todoItem.id}
              onRemove={removeTodo}
            />
          ))
        ) : (
          <p className="text-center">Please add at least 1 Todo List</p>
        )}
      </div>
      <form
        className={`
          w-full
          flex flex-col items-center gap-4
      `}
      >
        <input
          className={`
            p-2 w-full
            border-2 border-black rounded
            dark:border-white dark:bg-black
          `}
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button
          type="submit"
          className={`
            px-10 py-1 w-fit text-lg 
            border-black border-2 rounded 
            hover:bg-black hover:text-white
            dark:border-white dark:hover:bg-white dark:hover:text-black
          `}
          onClick={(e) => {
            e.preventDefault();
            addTodo();
          }}
        >
          +
        </button>
      </form>
    </div>
  );
};

export default TodoList;
