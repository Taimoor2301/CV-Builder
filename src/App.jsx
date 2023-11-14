import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import CV1 from "./Components/Cvs/CV1/CV1";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Login/Signup";
import CreateCv from "./Pages/CV/CreateCv";

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/resume' element={<CV1 />} />
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				<Route path='cv' element={<CreateCv />} />
			</Routes>

			<Footer />
		</BrowserRouter>
	);
}

export default App;
