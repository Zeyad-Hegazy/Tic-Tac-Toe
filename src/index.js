import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Script from "./Script";
// import App from "./udemy";

const root = createRoot(document.querySelector(".board"));

root.render(
	<StrictMode>
		<h1>Tic-Tac-Toe</h1>
		<Script />
		{/* <App /> */}
	</StrictMode>
);
