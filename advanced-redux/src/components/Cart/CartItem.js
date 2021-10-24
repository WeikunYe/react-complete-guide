import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
	const { id, title, quantity, total, price } = props.item;
	const dispatch = useDispatch();

	const addToCartHandler = () => {
    console.log({
      id: id,
      title: title,
      price: price,
    })
		dispatch(
			cartActions.addItemToCart({
				id: id,
				title: title,
				price: price,
			})
		);
	};

	const removeFromCartHandler = () => {
		dispatch(cartActions.removeItemToCart(id));
	};

	return (
		<li className={classes.item}>
			<header>
				<h3>{title}</h3>
				<div className={classes.price}>
					${total.toFixed(2)}{" "}
					<span className={classes.itemprice}>
						(${price.toFixed(2)}/item)
					</span>
				</div>
			</header>
			<div className={classes.details}>
				<div className={classes.quantity}>
					x <span>{quantity}</span>
				</div>
				<div className={classes.actions}>
					<button onClick={removeFromCartHandler}>-</button>
					<button onClick={addToCartHandler}>+</button>
				</div>
			</div>
		</li>
	);
};

export default CartItem;
