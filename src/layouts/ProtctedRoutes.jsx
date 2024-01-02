import { useAuthStore } from "../store/authStore";
import { useLocation, Navigate } from "react-router-dom";
import Loading from "../Components/Loaders/Loading";

export default function ProtctedRoutes({ children }) {
	const { isLoggedIn, loading } = useAuthStore();
	const location = useLocation();

	return !loading ? (
		<>
			{isLoggedIn ? (
				children
			) : (
				<Navigate
					to='/login'
					state={{ from: location }}
					replace
				/>
			)}
		</>
	) : (
		<Loading />
	);
}
