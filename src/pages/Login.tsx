import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { LoginContainer as Container } from '../styles/login';
import {
	BiLogIn,
	FaCloud,
	FaEnvelope,
	FaLock,
	FaUserPlus,
} from 'react-icons/all';
import { NavigateFunction, useNavigate } from 'react-router-dom';
interface UserData {
	email: string;
	password: string;
}

const Login: FC = (): JSX.Element => {
	const navigate: NavigateFunction = useNavigate();
	const [formData, setFormData] = useState<UserData>({
		email: '',
		password: '',
	});
	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
		console.log(formData);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		console.log(e);
	};

	return (
		<Container>
			<section className='false-header'>
				<section>
					<h1 className='logo'>
						<FaCloud />
						<span>Nava Drive</span>
					</h1>
				</section>
				<section className='slogan'>
					<p>
						<span>There are lot of good things in the world, </span>
						<i>but we want to offer the best for you.</i>
					</p>
				</section>
			</section>
			<article className='main-article'>
				<section className='form-container'>
					<section className='message'>
						<h2>
							<span>Login</span>
						</h2>
					</section>
					<form onSubmit={handleSubmit}>
						<label htmlFor='email'>
							<FaEnvelope />
							<span>E-mail</span>
						</label>
						<input
							type='email'
							name='email'
							placeholder='Type your e-mail here'
							required
							onChange={handleChange}
						/>
						<label htmlFor='password'>
							<FaLock />
							<span>Password</span>
						</label>
						<input
							type='password'
							name='password'
							placeholder='Type your password here'
							required
							onChange={handleChange}
						/>
						<span className='errorMessage'>{errorMessage}</span>
						<div className='actions'>
							<button type='submit'>
								<BiLogIn />
								<span>Login</span>
							</button>
							<button onClick={(e) => navigate('/register')}>
								<FaUserPlus />
								<span>Create account</span>
							</button>
						</div>
					</form>
				</section>
			</article>
			<section className='false-footer'>
				<div>
					<FaCloud />
					<span>Nava Cloud Drive</span>
				</div>
				<div>
					<i>Copyright &copy; 2022 Kain Nhantumbo</i>
				</div>
			</section>
		</Container>
	);
};

export default Login;
