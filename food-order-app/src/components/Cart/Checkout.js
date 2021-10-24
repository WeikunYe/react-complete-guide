import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
	const [formInputValidity, setFormInputValidity] = useState({
		name: true,
		street: true,
		city: true,
		postal: true,
	});

	const nameInputRef = useRef();
	const streetInputRef = useRef();
	const postalInputRef = useRef();
	const cityInputRef = useRef();

	const confirmHandler = (event) => {
		event.preventDefault();

		const name = nameInputRef.current.value;
		const street = streetInputRef.current.value;
		const postal = postalInputRef.current.value;
		const city = cityInputRef.current.value;

		const nameValid = isNotEmpty(name);
		const streetValid = isNotEmpty(street);
		const postalValid = isFiveChars(postal);
		const cityValid = isNotEmpty(city);

		setFormInputValidity({
			name: nameValid,
			street: streetValid,
			postal: postalValid,
			city: cityValid,
		});

		const isFormValid =
			nameValid && streetValid && postalValid && cityValid;

		if (!isFormValid) {
			return;
		}

		props.onConfirm({
			name,
			street,
			postal,
			city,
		});
	};

	return (
		<form className={classes.form} onSubmit={confirmHandler}>
			<div
				className={`${classes.control} ${
					formInputValidity.name ? "" : classes.invalid
				}`}
			>
				<label htmlFor="name">Your Name</label>
				<input type="text" id="name" ref={nameInputRef} />
				{!formInputValidity.name && <p>Please enter a valid name!</p>}
			</div>
			<div
				className={`${classes.control} ${
					formInputValidity.street ? "" : classes.invalid
				}`}
			>
				<label htmlFor="street">Street</label>
				<input type="text" id="street" ref={streetInputRef} />
				{!formInputValidity.street && (
					<p>Please enter a valid street!</p>
				)}
			</div>
			<div
				className={`${classes.control} ${
					formInputValidity.postal ? "" : classes.invalid
				}`}
			>
				<label htmlFor="postal">Postal Code</label>
				<input type="text" id="postal" ref={postalInputRef} />
				{!formInputValidity.postal && (
					<p>Please enter a valid postal code!</p>
				)}
			</div>
			<div
				className={`${classes.control} ${
					formInputValidity.city ? "" : classes.invalid
				}`}
			>
				<label htmlFor="city">City</label>
				<input type="text" id="city" ref={cityInputRef} />
				{!formInputValidity.city && (
					<p>Please enter a valid city name!</p>
				)}
			</div>
			<div className={classes.actions}>
				<button type="button" onClick={props.onCancel}>
					Cancel
				</button>
				<button className={classes.submit}>Confirm</button>
			</div>
		</form>
	);
};

export default Checkout;
