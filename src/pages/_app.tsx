import { Console } from "console";
import type { AppProps } from "next/app";
import { useRef, useState } from "react";
import Layout from "../1.layout/Layout";
import TodoItem from "../2.component/todoItem/TodoItem";

export interface todoData {
  text: string;
  id: number;
}
export default function App({ Component, pageProps }: AppProps) {
  const [todos, setTodos] = useState<todoData[]>([]);

  const [inputValue, setInputValue] = useState("");

  const ref = useRef(0);

  const handleTodoSubmit = () => {
    const todoData: todoData = {
      text: inputValue,
      id: ++ref.current,
    };
    setTodos([...todos, todoData]);
    setInputValue("");
    console.log(todoData.id);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app">
      <Layout>
        {/* <Component {...pageProps} /> */}

        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleTodoSubmit}>추가하기</button>
        <ul>
          {todos.map((todo, i) => (
            <TodoItem key={i} todo={todo} handleDeleteTodo={handleDeleteTodo} />
          ))}
        </ul>
      </Layout>
    </div>
  );
}
