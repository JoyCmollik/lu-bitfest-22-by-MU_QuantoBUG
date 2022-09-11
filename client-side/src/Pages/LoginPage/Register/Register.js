import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';

const Register = () => {
	// form validation rules

	const validationSchema = Yup.object().shape({
		email: Yup.string().required('Email is required'),

		password: Yup.string()
			.required('Password is required')
			.min(6, 'Password must be at least 6 characters'),
	});

	const formOptions = { resolver: yupResolver(validationSchema) };

	// form submit
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm(formOptions);

	const onSubmit = (data) => {
		console.log(data);
		axios
			.post('auth/register', data)
			.then((res) => {
				console.log(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
		reset();
	};

	// inputFields
	const inputs = [
		{
			inputType: 'name',
			error: errors.name?.message,
		},
		{
			inputType: 'email',
			error: errors.email?.message,
		},
		{
			inputType: 'password',
			error: errors.password?.message,
		},
	];

	return (
		<section className='container mx-auto mt-20'>
			<div className=''>
				{/* title */}
				<article>
					<h2 className='font-semibold text-3xl mb-2'>
						Welcome Back
					</h2>
					<p className='text-base text-gray-500 mb-5'>
						please enter your details and register
					</p>
				</article>
				{/* end of title */}
				{/* form */}
				<article className='flex flex-col'>
					<form onSubmit={handleSubmit(onSubmit)}>
						{inputs.map(({ inputType, error }, index) => (
							<div key={index} className=' py-2'>
								<input
									className='w-1/3 border py-3 pl-3 rounded-lg focus:outline-none focus:ring-1 focus:border-blue-500'
									type={inputType}
									name={inputType}
									placeholder={inputType}
									{...register(`${inputType}`, {
										required: true,
									})}
								/>
								<small className='text-red-500 block mt-2 text-sm'>
									{error}
								</small>
							</div>
						))}

						<div className='py-2 '>
							<input
								type='submit'
								value={'sign up'}
								className='w-1/3 border py-3 pl-3 rounded-lg focus:outline-none focus:ring-1 focus:border-blue-500 text-white bg-blue-900'
							/>
						</div>
					</form>
					{/* google sign in */}

					<SocialLogin />

					{/* signup link */}

					<p className='text-center mt-5'>
						Already have an account ?
						<Link
							className='form-link text-base text-[#0E1C36] font-semibold ml-2'
							to='/login'
						>
							Sign In
						</Link>
					</p>
				</article>
				{/* end of form */}
			</div>
		</section>
	);
};

export default Register;
