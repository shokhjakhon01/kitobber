import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/register.module.css';
import AuthService from '../services/auth.service';
import { registerUserFailore, registerUserStart, registerUserSucces } from '../slice/auth';
import { LoginInput } from '../ui-components';
import { getItem, setItem } from '../utils/StorageManager';

const Register = () => {
	const { isLoading } = useSelector(state => state.auth);
	const dispatch = useDispatch();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [image, setImage] = useState('');
	const [email, setEmail] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const token = getItem('token');
		if (token) {
			navigate('/');
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const submithandler = async e => {
		e.preventDefault();
		dispatch(registerUserStart());

		try {
			const formdata = new FormData();

			formdata.append('username', username);
			formdata.append('email', email);
			formdata.append('password', password);
			formdata.append('avatar', image);

			const { data, access_token } = await AuthService.userRegister(formdata);

			setItem('token', access_token);

			dispatch(registerUserSucces(data));
			navigate('/');
		} catch (error) {
			dispatch(registerUserFailore(error.response.data.message));
			console.log(error.response.data.message);
		}
	};

	return (
		<div className={styles.register}>
			<form className={styles['form-control']}>
				<h2>Register</h2>

				<LoginInput
					placeholder={'Username '}
					value={username}
					onChange={e => setUsername(e.target.value)}
				/>

				<LoginInput
					placeholder={'Email '}
					type='email'
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>

				<LoginInput
					placeholder={'Password '}
					type='password'
					value={password}
					onChange={e => setPassword(e.target.value)}
				/>

				<LoginInput
					placeholder={'avatar '}
					type='file'
					onChange={e => setImage(e.target.files[0])}
				/>

				<button
					disabled={isLoading}
					onClick={submithandler}
					type='submit'
					className={styles.button}
				>
					{isLoading ? 'loading...' : 'Register'}
				</button>

				<p className={styles.navigation}>
					Already have an account <Link to={'/login'}>Login</Link>
				</p>
			</form>
		</div>
	);
};

export default Register;
