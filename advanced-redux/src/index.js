import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import store from "./store/index";
console.log("Author: Weikun");
console.log(
	"Repo: https://github.com/WeikunYe/react-complete-guide-advanced-redux"
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
);
