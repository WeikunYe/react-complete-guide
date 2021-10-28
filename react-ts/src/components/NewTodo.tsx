import React, { useRef, useContext } from "react";
import classes from "./NewTodo.module.css";
import { TodoContext } from "../store/todos-context";

/* const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
	const todoRef = useRef<HTMLInputElement>(null);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const text = todoRef.current!.value;

		if (text.trim().length === 0) {
			return;
		}

		props.onAddTodo(text);
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor="text">Todo Text</label>
			<input type="text" id="text" ref={todoRef} />
			<button>Add Todo</button>
		</form>
	);
}; */

const NewTodo: React.FC = () => {
	const todoRef = useRef<HTMLInputElement>(null);
	const todosCtx = useContext(TodoContext);

	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();
		const text = todoRef.current!.value;

		if (text.trim().length === 0) {
			return;
		}

		todosCtx.addTodo(text);
	};

	return (
		<form onSubmit={submitHandler} className={classes.form}>
			<label htmlFor="text">Todo Text</label>
			<input type="text" id="text" ref={todoRef} />
			<button>Add Todo</button>
		</form>
	);
};

export default NewTodo;
