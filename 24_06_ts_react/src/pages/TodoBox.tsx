import { useEffect, useReducer, useRef, useState } from "react";
import { Todo } from "../type";
import Editor from "../components/Editor";
import TodoItem from "../components/TodoItem";

type Action =
  | {
      type: "CREATE";
      data: { id: number; content: string };
    }
  | {
      type: "DELETE";
      id: number;
    };

const reducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "DELETE": {
      return state.filter((i) => i.id !== action.id);
    }
  }
};

function TodoBox() {
  const [todos, dispatch] = useReducer(reducer, []);
  // const [todos, setTodos] = useState<Todo[]>([]);
  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    // setTodos([...todos, { id: idRef.current++, content: text }]);
    dispatch({
      type: "CREATE",
      data: { id: idRef.current++, content: text },
    });
  };

  const onClickDelete = (id: number) => {
    // setTodos(todos.filter((todo) => todo.id !== id));
    dispatch({
      type: "DELETE",
      id: id,
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <>
      <h1>TODO</h1>
      <Editor onClickAdd={onClickAdd} />
      <div>
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} onClickDelete={onClickDelete} />
        ))}
      </div>
    </>
  );
}

export default TodoBox;
