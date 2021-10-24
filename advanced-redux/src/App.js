import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { sendCartData, fetchCartData } from "./store/cart-action";
import Notification from "./components/UI/Notification";

let initial = true;

function App() {
	const showCart = useSelector((state) => state.ui.carIsVisible);
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	const notification = useSelector((state) => state.ui.notification);

	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		if (initial) {
			initial = false;
			return;
		}
		if (cart.changed) {
			dispatch(sendCartData(cart));
		}
	}, [cart, dispatch]);
	return (
		<>
			{notification && (
				<Notification
					status={notification.status}
					title={notification.title}
					message={notification.message}
				/>
			)}
			<Layout>
				{showCart && <Cart />}
				<Products />
			</Layout>
		</>
	);
}

export default App;
