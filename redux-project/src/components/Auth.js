import classes from "./Auth.module.css";
import { useDispatch } from "react-redux";
import { authActions } from "../store/auth";
import { useRef } from "react";

const Auth = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

	const dispatch = useDispatch();

	const formSumbitHandler = (event) => {
		event.preventDefault();
		if (emailRef.current.value === "test@test.com" && passwordRef.current.value === "123") {
			dispatch(authActions.login());
		} else {
			return;
		}
	};

	return (
		<main className={classes.auth}>
			<section>
				<form onSubmit={formSumbitHandler}>
					<div className={classes.control}>
						<label htmlFor="email">Email</label>
						<input type="email" id="email" ref={emailRef}/>
					</div>
					<div className={classes.control}>
						<label htmlFor="password">Password</label>
						<input type="password" id="password" ref={passwordRef}/>
					</div>
					<button type="submit">Login</button>
				</form>
			</section>
		</main>
	);
};

export default Auth;
