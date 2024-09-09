// import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios"
import { useAuthContext } from "../context/AuthContext";

const useLogin = () => {
	// const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const login = async ({ username, password }) => {
		const success = handleInputErrors({ username, password});
		if (!success) return;

		// setLoading(true);
		try {
			const response = await axios.post('/api/auth/login', {
                username,
                password
              }, {
                headers: { 'Content-Type': 'application/json' }
              });
          
              const data = response.data;
              console.log(data);
			 if (data.error) {
			 	throw new Error(data.error);
			 }
			localStorage.setItem("chat-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} finally {
			// setLoading(false);
		}
	};

	return { login};
};
export default useLogin;

function handleInputErrors({username, password}) {
	if (!username || !password ) {
		toast.error("Please fill in all fields");
		return false;
	}


	if (password.length < 10) {
		toast.error("Password must be at least 10 characters");
		return false;
	}

	return true;
}
