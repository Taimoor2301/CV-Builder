import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
	return (
		<>
			<Navbar />
			<Sidebar />
			<Outlet />
			<Footer />
		</>
	);
}
