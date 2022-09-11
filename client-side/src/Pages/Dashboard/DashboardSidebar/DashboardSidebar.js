import React from 'react';
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { GrUserSettings } from 'react-icons/gr';
import { IoBusOutline } from 'react-icons/io5';
import { NavLink } from 'react-router-dom';

const studentLinks = [
	{
		to: '/dashboard',
		text: 'Dashboard',
		icon: <AiOutlineHome />,
	},
	{
		to: '/dashboard/profile',
		text: 'Profile',
		icon: <GrUserSettings />,
	},
	{
		to: '/dashboard/request',
		text: 'Manage Requests',
		icon: <IoBusOutline />,
	},
];

const adminLinks = [
	{
		to: '/dashboard',
		text: 'Dashboard',
		icon: <AiOutlineHome />,
	},
	{
		to: '/dashboard/inventory',
		text: 'Bus Inventory',
		icon: <AiOutlineHome />,
	},
	{
		to: '/routes',
		text: 'Routes',
		icon: <AiOutlineHome />,
	},
	{
		to: '/stoppages',
		text: 'Stoppages',
		icon: <AiOutlineHome />,
	},
	{
		to: '/allocate-route',
		text: 'Allocate route',
		icon: <AiOutlineHome />,
	},
	{
		to: '/more',
		text: 'Suggestions',
		icon: <AiOutlineHome />,
	},
];

const DashboardSidebar = () => {
	return (
		<div className='min-h-screen bg-white shadow rounded-lg flex flex-col items-center p-[25px] space-y-20'>
			{/* logo */}
			<div className=''>
				<h4 className='text-2xl font-bold'>Bus Stat</h4>
			</div>

			{/* user information */}
			<div className='space-y-1 flex flex-col justify-center items-center'>
				<div className='rounded-full h-[50px] w-[50px] border flex justify-center items-center'>
					{/* <img src="" alt="" /> */}
					<AiOutlineUser size={40} />
				</div>
				<p className='text-gray-500'>Welcome Back</p>
				<h5 className='text-xl font-bold'>Taylor Silora</h5>
				<small>student</small>
			</div>

			{/* links */}
			<div className='flex flex-col place-items-center gap-4'>
				{studentLinks.map(({ to, text, icon }, linkIdx) => (
					<NavLink
						to={to}
						key={linkIdx}
						className={({ isActive }) =>
							`px-4 py-2 text-xl flex justify-start items-center box-shadow border rounded-lg space-x-3 w-full ${
								isActive
									? ' text-dark border-secondary'
									: 'text-black'
							}`
						}
					>
						{icon}
						<h5 className='font-medium text-lg'>{text}</h5>
					</NavLink>
				))}

				<h4>admin links</h4>
				{adminLinks.map(({ to, text, icon }, linkIdx) => (
					<NavLink
						to={to}
						key={linkIdx}
						className={({ isActive }) =>
							`px-4 py-2 text-xl flex justify-start items-center box-shadow border rounded-lg space-x-3 w-full ${
								isActive
									? ' text-dark border-secondary'
									: 'text-black'
							}`
						}
					>
						{icon}
						<h5 className='font-medium text-lg'>{text}</h5>
					</NavLink>
				))}
			</div>
		</div>
	);
};

export default DashboardSidebar;
