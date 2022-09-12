import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const TimeSlotUpdate = () => {
	const { timeId: id } = useParams();
	const { register, handleSubmit, reset } = useForm();
	const [timeSlot, setTimeSlot] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`/timeSlots/${id}`)
			.then((res) => {
				setTimeSlot(res.data.timeSlot);
				console.log(res.data.timeSlot);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const inputs = [
		{
			inputType: 'number',
			inputTitle: 'Time',
			inputData: 'timeSlot',
			value: timeSlot?.timeSlot,
		},
		{
			inputType: 'text',
			inputTitle: 'Bus No',
			inputData: 'busNo',
			value: timeSlot?.busNo.join(','),
		},
		{
			inputType: 'text',
			inputTitle: 'Route No',
			inputData: 'routeNo',
			value: timeSlot?.routeNo.join(','),
		},
	];

	const onSubmit = async (data) => {
		/* 	console.log(data); */
		const { timeSlot, routeNo, busNo } = data;
		console.log(data);
		data.routeNo = routeNo.split(',');
		data.busNo = busNo.split(',');

		try {
			const res = await axios.post(`timeSlot/${id}`, data);
			navigate('/dashboard/routes');
		} catch (error) {
			console.log(error);
		}

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
								Updating bus Routes {id}
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
										{...register(`${inputData}`, {})}
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
export default TimeSlotUpdate;
