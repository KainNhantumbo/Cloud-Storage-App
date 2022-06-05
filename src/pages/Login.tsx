import type { ChangeEvent, FC } from 'react';
import { useState } from 'react';
import { LoginContainer as Container } from '../styles/login';
import { FaCloud } from 'react-icons/all';
interface UserData {
	email: string;
	password: string;
}

const Login: FC = (): JSX.Element => {
	const [formData, setFormData] = useState<UserData>({
		email: '',
		password: '',
	});
	const [errorMessage, setErrorMessage] = useState('');

	const handleChange = (e: ChangeEvent | any): void => {
		setFormData((prevData) => ({
			...prevData,
			[e.target.name]: e.target.value,
		}));
		console.log(formData);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
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
			</section>
			<article className='main-article'>
				<section className='message'>
					<h2>
						<span>Wellcome back!</span>
					</h2>
				</section>
				<section className='form-container'>
					<section className='user-credentials'>
						<span>Login</span>
					</section>
					<form onSubmit={handleSubmit}>
						<label htmlFor='email'>
							<span>E-mail</span>
						</label>
						<input type='email' name='email' required onChange={handleChange} />
						<label htmlFor='password'>
							<span>Password</span>
						</label>
						<input
							type='password'
							name='password'
							required
							onChange={handleChange}
						/>
						<span className='errrorMessage'>{errorMessage}</span>
						<button type='submit'>
							<span>Log In</span>
						</button>
						<button>
							<span>Create account</span>
						</button>
					</form>
				</section>
			</article>
			<section className='false-footer'>
				<div>
					<FaCloud />
					<span>Nava Cloud Drive</span>
				</div>
				<div>
					<span>Copyright &copy; 2022 Kain Nhantumbo</span>
				</div>
			</section>
		</Container>
	);
};

export default Login;
