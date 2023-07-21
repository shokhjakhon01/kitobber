/* eslint-disable react/prop-types */
import styles from './textarea.module.css';

const Textarea = ({ label }) => {
	return (
		<div className={styles['input-group']}>
			<label className={styles.label} htmlFor='textarea'>
				{label}
			</label>

			<textarea
				className={styles.textarea}
				name='description'
				id='textarea'
				cols='30'
				rows='15'
			></textarea>
		</div>
	);
};

export default Textarea;
