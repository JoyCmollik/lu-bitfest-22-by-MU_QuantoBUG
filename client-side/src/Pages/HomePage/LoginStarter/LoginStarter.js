import React from 'react';

const userType = ['consumer', 'admin'];

const LoginStarter = () => {
	return (
		<section className='container mx-auto'>
			<div className='mt-20'>
				{/* title */}
				<article>
					<h2 className='text-3xl font-semibold text-sky-600'>
						Select User Type
					</h2>
					<p className='text-base text-gray-500'>
						To continue please select your role in this project
					</p>
				</article>
				{/* user type card */}
				<article className='flex'></article>
			</div>
		</section>
	);
};

export default LoginStarter;
