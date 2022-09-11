import React from 'react';
import { Routes } from 'react-router-dom';
import AdminDashboardHome from '../AdminDashboard/AdminDashboardHome/AdminDashboardHome';
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar'

const DashboardHome = () => {
  return (
		<div className=''>
            <div className="h-[100px] bg-dark"></div>
			<div className='grid grid-cols-12 px-[25px] bg-light'>
				<div className='col-span-3 bg-light rounded-xl -mt-[50px]'>
					<DashboardSidebar />
				</div>
				<div className='col-span-9'>
                    <AdminDashboardHome />
                </div>
			</div>
		</div>
  );
}

export default DashboardHome