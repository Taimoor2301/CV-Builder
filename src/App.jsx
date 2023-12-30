import React, { useEffect } from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CV1 from "./Components/Cvs/CV1/CV1";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import CreateCv from "./Pages/CV/CreateCv";
import Test from "./Components/Test";
import SelectTemplate from "./Pages/SeclectTemplate/SelectTemplate";
import MainLayout from "./layouts/MainLayout";
import { fetchUser } from "./utils/auth";
import { useAuthStore } from "./store/authStore";
import ProtctedRoutes from "./layouts/ProtctedRoutes";

function App() {
	const { setUser, setIsLoggedIn, isLoggedIn } = useAuthStore();

	async function getUser() {
		const { user, error } = await fetchUser();
		console.log(user);
		if (user) {
			setIsLoggedIn(true);
			setUser(user);
			console.log(`isloggedin : ${isLoggedIn}`);
		}
	}
	useEffect(() => {
		getUser();
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<MainLayout />}>
					<Route
						index
						element={<Home />}
					/>
					<Route
						path='resume'
						element={<CV1 />}
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
						path='cover'
						element={<Test />}
					/>
					<Route
						path='templates'
						element={<SelectTemplate />}
					/>
					<Route
						path='templates/:id'
						element={<SelectTemplate />}
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
	);
}

export default App;
