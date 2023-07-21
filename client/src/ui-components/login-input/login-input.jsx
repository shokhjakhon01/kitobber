/* eslint-disable react/prop-types */
import styles from './login-input.module.css';

const LoginInput = ({ type = 'text', placeholder, width = '326px', ...props }) => {



	return (
		<input
			type={type}
			className={styles.input}
			placeholder={placeholder}
			style={{ maxWidth: width }}
			{...props}
		/>
	);
};

export default LoginInput;
