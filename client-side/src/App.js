import { Route, Routes } from 'react-router-dom';
import './App.css';
import AdminBusInventory from './Pages/Dashboard/AdminDashboard/AdminBusInventory/AdminBusInventory';
import ConsumerDashboardHome from './Pages/Dashboard/ConsumerDashboard/ConsumerDashboardHome/ConsumerDashboardHome';
import ConsumerDashboardProfile from './Pages/Dashboard/ConsumerDashboard/ConsumerDashboardProfile/ConsumerDashboardProfile';
import ConsumeRequestSeat from './Pages/Dashboard/ConsumerDashboard/ConsumerRequestSeat/ConsumeRequestSeat';
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
				<Route path='home' element={<Home />} />
				<Route path='adminlogin' element={<AdminLogin />} />
				<Route path='adminRegister' element={<AdminRegister />} />
				<Route path='consumerRegister' element={<ConsumerRegister />} />
				<Route path='consumerLogin' element={<ConsumerLogin />} />
				<Route path='dashboard/*' element={<DashboardHome />}>
					<Route index element={<ConsumerDashboardHome />} />
					<Route
						path='profile'
						element={<ConsumerDashboardProfile />}
					/>
					<Route path='request' element={<ConsumeRequestSeat />} />
					<Route path='inventory' element={<AdminBusInventory />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
