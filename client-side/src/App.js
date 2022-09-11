import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Home from './Pages/HomePage/Home/Home';
import AdminLogin from './Pages/LoginPage/AdminLogin/AdminLogin';
import AdminRegister from './Pages/LoginPage/AdminRegister/AdminRegister';
import ConsumerLogin from './Pages/LoginPage/ConsumerLogin/ConsumerLogin';
import ConsumerRegister from './Pages/LoginPage/ConsumerRegister/ConsumerRegister';

import NotFound from './Pages/NotFoundPage/NotFound/NotFound';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/home' element={<Home />} />
				<Route path='/adminlogin' element={<AdminLogin />} />
				<Route path='/adminRegister' element={<AdminRegister />} />
				<Route
					path='/consumerRegister'
					element={<ConsumerRegister />}
				/>
				<Route path='/consumerLogin' element={<ConsumerLogin />} />
				<Route path='/dashboard' element={<DashboardHome />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
