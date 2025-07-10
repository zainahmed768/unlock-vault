import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

const PublicRoutes = () => {
	return (
		<>
			<HashRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</HashRouter>
		</>
	);
};

export default PublicRoutes;
