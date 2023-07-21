import { Link } from 'react-router-dom';
import styles from '../css/login.module.css';
import { LoginInput } from '../ui-components';

const Login = () => {
	return (
		<div className={styles['login-page']}>
			<div className={styles.login}>
				<form className={styles['form-control']}>
					<h2>Login</h2>

					<LoginInput placeholder={'Username '} type='text' />

					<LoginInput placeholder={'Password '} type='password' />

					<button className={styles.button}>Login</button>

					<p className={styles.navigation}>
						If you don`t have an account <Link to={'/register'}>Register</Link>
					</p>
				</form>
			</div>
		</div>
	);
};
export default Login;
