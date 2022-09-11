import React from 'react';

import Navbar from '../../../sharedComponents/Header/Navbar/Navbar';
import LoginStarter from '../LoginStarter/LoginStarter';

const Home = () => {
	return (
		<div className='container'>
			<LoginStarter />
			{/* 	<Navbar /> */}
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
