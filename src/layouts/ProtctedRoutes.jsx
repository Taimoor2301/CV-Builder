import React, { useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export default function ProtctedRoutes({ children }) {
	const { isLoggedIn } = useAuthStore();

	const navigate = useNavigate();

	useEffect(() => {
		if (!isLoggedIn) {
			navigate("/login");
		}
	}, [isLoggedIn]);

	return <>{isLoggedIn && children}</>;
}
