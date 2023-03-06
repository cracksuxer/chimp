import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";
import Chimp from "./routes/Chimp";
import Games from "./routes/Games";

export const routes = {
	home: "/",
	chimp: "chimp",
};

const router = createBrowserRouter([
	{
		path: routes.home,
		element: <Home />,
		children: [
			{
				path: routes.home,
				element: <Games />,
			},
			{
				path: routes.chimp,
				element: <Chimp />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
