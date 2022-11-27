import React, { FC } from "react";
import { todoData } from "../../pages/_app";
interface Props {
  todo: todoData;
  handleDeleteTodo: (id: number) => void;
}
const TodoItem: FC<Props> = ({ todo, handleDeleteTodo }) => {
  return (
    <div style={{ display: "flex" }}>
      <li>{todo.text}</li>
      <span
        style={{ cursor: "pointer", marginLeft: 10 }}
        onClick={() => {
          handleDeleteTodo(todo.id), console.log(todo.id);
        }}
      >
        x
      </span>
    </div>
  );
};

export default TodoItem;
