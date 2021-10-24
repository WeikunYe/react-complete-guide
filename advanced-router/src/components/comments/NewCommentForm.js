import { useEffect, useRef } from "react";
import useHttp from "../../hooks/use-http";
import classes from "./NewCommentForm.module.css";
import { addComment } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";

const NewCommentForm = (props) => {
	const commentTextRef = useRef();
	const { onAddedComment } = props;
	const { sendRequest, status, error } = useHttp(addComment);

	useEffect(() => {
		if (status === "completed" && !error) {
			onAddedComment();
		}
	}, [status, error, onAddedComment]);

	const submitFormHandler = (event) => {
		event.preventDefault();
		const enteredText = commentTextRef.current.value;
		if (enteredText.trim().length !== 0) {
			sendRequest({
				commentData: { text: enteredText },
				quoteId: props.quoteId,
			});
		} else {
			alert("Please enter your comment");
		}
	};

	return (
		<form className={classes.form} onSubmit={submitFormHandler}>
			{status === "pending" && (
				<div className="centered">
					<LoadingSpinner />
				</div>
			)}
			<div className={classes.control} onSubmit={submitFormHandler}>
				<label htmlFor="comment">Your Comment</label>
				<textarea id="comment" rows="5" ref={commentTextRef}></textarea>
			</div>
			<div className={classes.actions}>
				<button className="btn">Add Comment</button>
			</div>
		</form>
	);
};

export default NewCommentForm;
