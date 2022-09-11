import React from 'react';
import { FaBus } from 'react-icons/fa';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const busList = [
	{
		id: 1,
		License: '89890890',
		codeName: '101',
		DriverName: 'kashem',
		DriverContact: '9980980945',
		isActive: 'true',
		capcity: '90',
	},
	{
		id: 2,
		License: '89890890',

		codeName: '102',
		DriverName: 'kashem',
		DriverContact: '9980980945',
		isActive: 'false',
		capcity: '40',
	},
	{
		id: 3,
		License: '89890890',
		codeName: '103',
		DriverName: 'kashem',
		DriverContact: '9980980945',
		isActive: 'true',
		capcity: '30',
	},
	{
		id: 4,
		License: '89890890',
		codeName: '104',
		DriverName: 'kashem',
		DriverContact: '9980980945',
		isActive: 'true',
		capcity: '90',
	},
];

const AdminBusInventory = () => {
	const navigate = useNavigate();

	return (
		<section>
			{/* add new bus */}
			<div onClick={() => navigate('/dashboard/addBus')}>
				<h2 className='mb-10 border-2 border-primary inline-block py-2 px-4 rounded-md hover:bg-primary text-dark font-semibold hover:text-dark shadow-sm'>
					<span>
						<MdOutlineLibraryAdd className='inline mr-2 text-3xl' />
					</span>
					Add New Bus
				</h2>
			</div>
			{/* existing bus title */}
			<article>
				{' '}
				<div className='flex items-center text-xl font-semibold mb-10'>
					<span>
						<FaBus className='text-dark mr-3' />
					</span>
					<h2 className=' text-dark '>List of Existing Bus</h2>
				</div>
				{/* Existing Bus Update list */}
				<div>
					{busList.map(
						({
							id,
							codeName,
							License,
							isActive,
							capcity,
							DriverName,
							DriverContact,
						}) => (
							<div
								key={id}
								className='border-2 border-gray-200 hover:border-dark space-y-2 mb-2 rounded items-center py-2 px-3 flex justify-between'
							>
								<p>CodeName : {codeName}</p>
								<p>License: {License}</p>
								<p>Capacity: {capcity}</p>
								<p>License: {DriverName}</p>
								<p>Capacity: {DriverContact}</p>
								{/* should be dynamic */}

								<p className='font-medium'>
									Active : {isActive}
								</p>
								<div>
									<button
										onClick={() =>
											navigate(
												`/dashboard/busUpdate/${id}`
											)
										}
										className='block border bg-secondary py-2 px-3 rounded-lg hover:bg-dark hover:text-white'
									>
										Edit
									</button>
								</div>
							</div>
						)
					)}
				</div>
			</article>
		</section>
	);
};

export default AdminBusInventory;
