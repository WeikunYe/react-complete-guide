import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
	const pwRef = useRef();
	const authCtx = useContext(AuthContext);
	const history = useHistory();

	const submitHandler = (event) => {
		event.preventDefault();
		const pw = pwRef.current.value;

		fetch(
			"https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyB-_CibTyCG_pgRlyenymJukHWUFCmD3yk",
			{
				method: "POST",
				body: JSON.stringify({
					idToken: authCtx.token,
					password: pw,
					returnSecureToken: false,
				}),
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then((res) => {
			history.replace("/");
		});
	};

	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<div className={classes.control}>
				<label htmlFor="new-password">New Password</label>
				<input
					type="password"
					id="new-password"
					minLength="7"
					ref={pwRef}
				/>
			</div>
			<div className={classes.action}>
				<button>Change Password</button>
			</div>
		</form>
	);
};

export default ProfileForm;
