/* eslint-disable react/prop-types */
import styles from "./admin-input.module.css"

const AdminInput = ({label}) => {
	return (
		<div className={styles['input-group']}>
			<label className={styles.label} htmlFor=''>
				{label}
			</label>
			<input type='text' className={styles.input} />
		</div>
	);
};

export default AdminInput;
