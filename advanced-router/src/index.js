import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
console.log("Author: Weikun");
console.log("Repo: https://github.com/WeikunYe/react-complete-guide-advanced-react-router")
ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
