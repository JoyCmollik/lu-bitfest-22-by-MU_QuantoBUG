import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

const matchedRoute = {
	id: 1,
	routeNumber: '10',
	startLocationLabel: 'Chandipul',
	startLocationLatitudeAndLongitude: '24.8948° N, 91.8690° E',
	startTime: '8:35 AM',
};

const inputs = [
	{
		inputType: 'number',
		inputTitle: 'Route Number',
		inputData: 'routeNo',
		value: matchedRoute.routeNumber,
	},
	{
		inputType: 'text',
		inputTitle: 'label',
		inputData: 'label',
		value: matchedRoute.startLocationLabel,
	},
	{
		inputType: 'text',
		inputTitle: 'Latitude & Longitude',
		inputData: 'Latitude&Longitude',
		value: matchedRoute.startLocationLatitudeAndLongitude,
	},
	{
		inputType: 'text',
		inputTitle: 'Start Time',
		inputData: 'startTime',
		value: matchedRoute.startTime,
	},
];
const AdminBusRouteUpdate = () => {
	const { routeId } = useParams();
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		/* 	console.log(data); */

		reset();
	};
	return (
		<section className='justify-center mt-20'>
			{/* input forms */}

			<div className='flex flex-col justify-center'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='flex justify-between '>
						<div>
							<h2 className='text-2xl font-semibold'>
								Bus Routes
							</h2>
							<p className='text-sm text-gray-600'>
								Updating bus Routes {routeId}
							</p>
						</div>
						<div className='py-2 '>
							<input
								type='submit'
								value={'Update'}
								className=' border py-3 px-4 rounded-lg focus:outline-none focus:ring-1 focus:border-purple-600 text-white bg-dark'
							/>
						</div>
					</div>
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
				</form>
			</div>
		</section>
	);
};

export default AdminBusRouteUpdate;
