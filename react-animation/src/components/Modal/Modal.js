import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";
import "./Modal.css";

const animationTime = {
	enter: 400,
	exit: 1000,
};

const modal = (props) => {
	return (
		<CSSTransition
			unmountOnExit
			mountOnEnter
			in={props.show}
			timeout={animationTime}
			classNames={{
				enter: "",
				enterActive: "ModelOpen",
				exit: "",
				exitActive: "ModelClosed",
			}}
		>
			<div className="Modal">
				<h1>A Modal</h1>
				<button className="Button" onClick={props.closed}>
					Dismiss
				</button>
			</div>
		</CSSTransition>
	);
};

export default modal;
