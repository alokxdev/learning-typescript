export interface TodoType {
  title: string;
  description: string;
  done: boolean;
}

interface TodoInput {
  todo: TodoType;
}

function Todo({ todo }: TodoInput) {
  return (
    <>
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
    </>
  );
}

export default Todo;
