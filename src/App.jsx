import React, { useEffect, useState } from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import CreateCv from "./Pages/CV/CreateCv";
import Result from "./Pages/SeclectTemplate/Result";
import MainLayout from "./layouts/MainLayout";
import { fetchUser } from "./utils/auth";
import { useAuthStore } from "./store/authStore";
import ProtctedRoutes from "./layouts/ProtctedRoutes";
import MainTemplatePage from "./Pages/MainTemplatePage/MainTemplatePage";

function App() {
	const { setUser, setIsLoggedIn, setLoading } = useAuthStore();

	async function getUser() {
		setLoading(true);
		const { user, error } = await fetchUser();
		if (user) {
			setIsLoggedIn(true);
			setUser(user);
			setLoading(false);
		} else {
			console.log(error);
			setIsLoggedIn(false);
			setUser(null);
			setLoading(false);
		}
	}
	useEffect(() => {
		getUser();
	}, [setIsLoggedIn, setUser]);

	return (
		<>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route
						path='/'
						element={<MainLayout />}>
						<Route
							index
							element={<Home />}
						/>

						<Route
							path='build'
							element={
								<ProtctedRoutes>
									<CreateCv />
								</ProtctedRoutes>
							}
						/>

						<Route
							path='templates'
							element={
								<ProtctedRoutes>
									<MainTemplatePage />
								</ProtctedRoutes>
							}
						/>
						<Route
							path='cv/:id'
							element={
								<ProtctedRoutes>
									<Result />
								</ProtctedRoutes>
							}
						/>
					</Route>
					<Route
						path='/login'
						element={<Login />}
					/>
					<Route
						path='/signup'
						element={<Signup />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
};
