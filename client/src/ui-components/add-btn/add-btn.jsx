import styles from './add-btn.module.css';

// eslint-disable-next-line react/prop-types
const AddBtn = ({ color = 'black', border = 'black' }) => {
	return (
		<button style={{ color: color, borderColor: border }} className={styles['add-btn']}>
			+add
		</button>
	);
};

export default AddBtn;
