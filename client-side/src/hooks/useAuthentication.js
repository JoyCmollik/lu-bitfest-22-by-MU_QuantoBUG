import { useState } from 'react';
import axios from 'axios';

const useAuthentication = () => {
	const [user, setUser] = useState(null);
	const [isAdmin, setIsAdmin] = useState(false);

	const handleConsumerRegister = async (user, navigate) => {
		console.log(user);

       try {
         const response = await axios.post('auth/register', user)
         setUser(response.data.user);
        console.log(response);
        navigate('/dashboard');
       } catch (error) {
            console.log(error)
       }
	};

	const handleConsumerLogin = async (user, navigate) => {
        console.log(user);

       try {
         const response = await axios.post('auth/login', user)
         setUser(response.data.user);
        console.log(response);
         navigate('/dashboard');
       } catch (error) {
            console.log(error.response.data);
       }
    };

	const handleLoginAdmin = async (data, navigate) => {
        console.log(data);

        try {
         const response = await axios.post('auth/admin-login', data);
         setUser(response.data.user);
        console.log(response);
         navigate('/dashboard');
       } catch (error) {
            console.log(error.response.data);
       }
    };

	const handleLogout = async (navigate) => {
        try {
         const response = await axios.get('auth/logout')
         setUser(null);
        console.log(response);
         navigate('/');
       } catch (error) {
            console.log(error.response.data);
       }
    };

	return {
		handleConsumerRegister,
		handleConsumerLogin,
		handleLoginAdmin,
		handleLogout,
	};
};

export default useAuthentication;
