import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import useAxios from "../../hooks/use-axios";

const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const cartCtx = useContext(CartContext);
	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;
	const [success, setSuccess] = useState(false);
	const { error, loading, sendRequest: postOrder } = useAxios();
	const [orderName, setOrderName] = useState("");

	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 });
	};

	const orderHandler = () => {
		setIsCheckout(true);
	};

	const submitOrderHandler = (userData) => {
		const getRes = (res) => {
			const { name } = res;
			setOrderName(name);
			setSuccess(true);
			cartCtx.clearCart();
		};
		postOrder(
			{
				method: "POST",
				url: "https://food-order-441e3-default-rtdb.firebaseio.com/orders.json",
				data: { userData, items: cartCtx.items },
			},
			getRes
		);
	};
	const cartItems = (
		<ul className={classes["cart-items"]}>
			{cartCtx.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
		</ul>
	);
	const modalActions = (
		<div className={classes.actions}>
			<button className={classes["button--alt"]} onClick={props.onClose}>
				Close
			</button>
			{hasItems && (
				<button className={classes.button} onClick={orderHandler}>
					Order
				</button>
			)}
		</div>
	);

	const cartModalContent = (
		<>
			{" "}
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && (
				<Checkout
					onConfirm={submitOrderHandler}
					onCancel={props.onClose}
				/>
			)}
			{!isCheckout && modalActions}
		</>
	);
	const isSubmittingModalContent = <p>Sending Order Data</p>;
	const didSumitModalContent = (
		<>
			<p>Successfully sent the order! Your order number is: {orderName}</p>
			<div className={classes.actions}>
				<button className={classes.button} onClick={props.onClose}>
					Close
				</button>
			</div>
		</>
	);

	const hasErrorModalContent = (
		<>
			<p>Something went wrong, please try later.</p>
			<div className={classes.actions}>
				<button className={classes.button} onClick={props.onClose}>
					Close
				</button>
			</div>
		</>
	);

	return (
		<Modal onClose={props.onClose}>
			{!loading && !success && !error && cartModalContent}
			{loading && isSubmittingModalContent}
			{!loading && success && didSumitModalContent}
			{!loading && !success && error && hasErrorModalContent}
		</Modal>
	);
};

export default Cart;
