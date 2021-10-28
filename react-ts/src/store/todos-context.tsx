import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextObj>({
	items: [],
	addTodo: () => {},
	removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
	const [todos, setTodos] = useState<Todo[]>([]);

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
	};

	const contextValue: TodoContextObj = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodoContext.Provider value={contextValue}>
			{props.children}
		</TodoContext.Provider>
	);
};

export default TodosContextProvider;
