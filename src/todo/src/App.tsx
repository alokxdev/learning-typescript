import Todo from "./Todo";
import type { TodoType } from "./Todo";

const todos: TodoType[] = [
  {
    title: "Go to gym",
    description: "go to gym at 9am",
    done: false,
  },
  {
    title: "Buy groceries",
    description: "buy groceries from supermarket",
    done: false,
  },
];

function App() {
  return (
    <>
      {todos.map((item: TodoType, index: number) => {
        return <Todo key={index} todo={item} />;
      })}
    </>
  );
}

export default App;
