import "./App.css";
/* import { useState } from "react";
import Todo from "./models/todo"; */
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

function App() {
	/* 	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todo: string) => {
		const newTodo = new Todo(todo);
		setTodos((prev) => {
			return prev.concat(newTodo);
		});
	};

	const removeTodoHandler = (id: string) => {
		setTodos((prev) => {
			return prev.filter((todo) => todo.id !== id);
		});
	}; */

	/* 	return (
		<div>
			<NewTodo onAddTodo={addTodoHandler} />
			<Todos items={todos} onRemoveTodo={removeTodoHandler} />
		</div>
	); */

	return (
		<TodosContextProvider>
			<NewTodo />
			<Todos />
		</TodosContextProvider>
	);
}

export default App;
