/* eslint-disable react/prop-types */
import styles from './register-button.module.css';

// eslint-disable-next-line react/prop-types
const RegisterButton = ({
	title = 'Ro’yxatdan o’tish',
	color = '#fff279',
	width = '250px',
	padding = '10px 22px',
	...other
}) => {
	return (
		<button
			className={styles['auth']}
			style={{ backgroundColor: color, maxWidth: width, padding: padding }}
			{...other}
		>
			{title}
		</button>
	);
};

export default RegisterButton;
