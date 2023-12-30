import axios from "axios";
const baseURL = "http://localhost:3000/api/v1";
import Cookies from "js-cookie";

async function login(email, password) {
	try {
		const res = await axios.post(`${baseURL + "/auth/login"}`, { email, password });
		const { token, user } = res.data;
		Cookies.set("token", token);
		return { user, error: null };
	} catch (error) {
		console.log(error.response.data.error);
		return { user: null, error: error.response.data.error };
	}
}

async function register(name, email, password) {
	try {
		const res = await axios.post(`${baseURL + "/auth/register"}`, { name, email, password });
		const { token, user } = res.data;
		Cookies.set("token", token);
		return { user, error: null };
	} catch (error) {
		console.log(error);
		return { user: null, error: error.response.data.error };
	}
}

async function fetchUser() {
	const token = Cookies.get("token");
	if (!token) return null;

	try {
		const res = await axios.get(`${baseURL + "/auth/user"}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return { user: res.data, error: null };
	} catch (error) {
		console.log(error);
		return { user: null, error: true };
	}
}
async function getCVData(id) {
	const token = Cookies.get("token");
	if (!token) return null;

	try {
		const res = await axios.get(`${`http://localhost:3000/api/v1/cv/${id}`}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return { cv: res.data, error: null };
	} catch (error) {
		console.log(error);
		return { cv: null, error: true };
	}
}

export { login, register, fetchUser, getCVData };
