import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import Store from "./store/Store";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<Provider store={Store}>
			<App />
		</Provider>
	</StrictMode>,
);
