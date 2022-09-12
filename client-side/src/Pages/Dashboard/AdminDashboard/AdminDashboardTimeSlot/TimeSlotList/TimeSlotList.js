import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaBus } from 'react-icons/fa';
import { MdOutlineLibraryAdd } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const TimeSlotList = () => {
	const navigate = useNavigate();
	const [timeSlotList, setTimeSlotList] = useState();

  useEffect(() => {
		axios
			.get('/timeSlots')
			.then((res) => {
				setTimeSlotList(res.data.data);
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
  }, []);

	return (
		<div>
			{/* add new routes */}
			<div onClick={() => navigate('/dashboard/addTimeSlots')}>
				<h2 className='mb-10 border-2 border-primary inline-block py-2 px-4 rounded-md hover:bg-primary text-dark font-semibold hover:text-dark shadow-sm'>
					<span>
						<MdOutlineLibraryAdd className='inline mr-2 text-3xl' />
					</span>
					Add New Time Slots
				</h2>
			</div>
			{/* update Route Title */}
			<article>
				{' '}
				<div className='flex items-center text-xl font-semibold mb-10'>
					<span>
						<FaBus className='text-dark mr-3' />
					</span>
					<h2 className=' text-dark '>List of Existing Time Slots</h2>
				</div>
				{/* Existing Bus Update list */}
				<div className='grid grid-cols-3 gap-3'>
					{timeSlotList &&
						timeSlotList.map(
							({ _id, routeNo, busNo, timeSlot }) => (
								<div
									key={_id}
									className='border-2 border-gray-200 hover:border-dark   rounded-xl'
								>
									<div className='text-lg font-semibold  text-center py-4'>
										<p>Time {timeSlot}</p>
									</div>
									<div className='border border-light shadow-sm h-0 bg-light mb-5'></div>
									<div className='text-base font-medium text-center'>
										<p className='text-base '>
											{routeNo.map((route) => (
												<span>route no: {route}</span>
											))}
										</p>
										<p className='text-base '>
											{busNo.map((bus) => (
												<span>bus no: {bus}</span>
											))}
										</p>

										<div className='text-center mx-auto'>
											<button
												onClick={() =>
													navigate(
														`/dashboard/timeSlotUpdate/${_id}`
													)
												}
												className='block mx-auto w-full mt-5 py-2 border bg-secondary  rounded-lg hover:bg-dark hover:text-white'
											>
												Edit
											</button>
										</div>
									</div>
								</div>
							)
						)}
				</div>
			</article>
		</div>
	);
};

export default TimeSlotList;
