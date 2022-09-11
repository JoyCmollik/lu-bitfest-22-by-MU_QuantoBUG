import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const matchedBus = {
	id: 1,
	License: '89890890',
	codeName: '101',
	DriverName: 'kashem',
	DriverContact: '9980980945',
	isActive: 'true',
	capcity: '90',
};

const AdminBusInventoryUpdate = () => {
	const { busId } = useParams();
	//console.log(busId);

	//const { License, capcity, codeName, DriverName, DriverContact } = matchedId;
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = (data) => {
		/* 	console.log(data); */

		reset();
	};

	const inputs = [
		{
			id: 1,
			inputType: 'number',
			inputTitle: 'License Number',
			inputData: 'license',
			value: matchedBus.License,
		},
		{
			id: 2,
			inputType: 'number',
			inputTitle: 'Codename',
			inputData: 'codename',
			value: matchedBus.codeName,
		},
		{
			id: 3,
			inputType: 'text',
			inputTitle: 'Capacity',
			inputData: 'capacity',
			value: matchedBus.capcity,
		},

		{
			id: 4,
			inputType: 'text',
			inputTitle: 'Driver Name',
			inputData: 'driverName',
			value: matchedBus.DriverName,
		},
		{
			id: 5,
			inputType: 'text',
			inputTitle: 'Driver Contact Number',
			inputData: 'DriverContact',
			value: matchedBus.DriverContact,
		},
	];
	return (
		<div>
			<h2>inventory update:{busId}</h2>
			<div className='flex flex-col justify-center'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='flex justify-between '>
						<div>
							<h2 className='text-2xl font-semibold'>
								Update Bus {busId}
							</h2>
							<p className='text-sm text-gray-600'>
								adding new bus to inventory
							</p>
						</div>
						<div className='py-2 '>
							<input
								type='submit'
								value={'submit'}
								className=' border py-3 px-3 rounded-lg focus:outline-none focus:ring-1 focus:border-purple-600 text-white bg-dark'
							/>
						</div>
					</div>
					{/* update the form */}
					{inputs.map(
						(
							{ inputType, inputTitle, inputData, value },
							index
						) => (
							<div
								key={index}
								className='grid grid-cols-12 justify-between py-2 '
							>
								<div className='col-span-4'>
									<label>{inputTitle}</label>
								</div>
								<div className='col-span-8'>
									<input
										className='w-full bg-light border  py-3 pl-3 rounded-lg focus:outline-none focus:ring-1 focus:border-blue-500 border-secondary'
										type={inputType}
										name={inputTitle}
										defaultValue={value}
										placeholder={inputTitle}
										{...register(`${inputData}`, {
											required: true,
										})}
									/>
								</div>
							</div>
						)
					)}
					<div>
						<input
							defaultValue={matchedBus.isActive}
							type='checkbox'
							className='p-5 inline-block'
						/>
						<p className='inline-block ml-3 text-base'>
							Bus is Active
						</p>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AdminBusInventoryUpdate;
