import styles from './modal.module.css';

const Modal = () => {
	return <div className={styles.modal}>
		
		<h1>Siz hisobni ochirishni hohlaysizmi?</h1>

		<div className={styles.buttons}>

			<button>
				ha
			</button>

			<button className={styles.close}>
				yoq
			</button>

		</div>
	</div>;
};

export default Modal;
