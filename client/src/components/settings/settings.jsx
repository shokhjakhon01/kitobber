import { useState } from 'react';
import RegisterButton from '../../ui-components/register-button/register-button';
import Modal from '../modal/modal';
import styles from './settings.module.css';

const Settings = () => {
	const [modalActive, setModalActive] = useState(false);

	return (
		<div className={styles.settings}>
			<div className={styles['settings-main']}>
				<RegisterButton color='white' title='Hisobni o’zgartirish' padding='23px' width='515px' />

				<RegisterButton color='white' title='Hisobni ulashish' padding='23px' width='515px' />

				<RegisterButton color='white' title='Hisobdan chiqish' padding='23px' width='515px' />

				<RegisterButton color='white' title='Yangi hisob o’chish' padding='23px' width='515px' />
			</div>

			<div className={styles['settings-footer']}>
				<RegisterButton
					color='white'
					title='Hisobni ochirish '
					padding='23px'
					width='515px'
					onClick={() => {
						setModalActive(true);
						document.body.style.overflow = 'hidden';
					}}
				/>
			</div>
			{modalActive ? <Modal /> : null}
			{modalActive ? (
				<div
					onClick={() => {
						setModalActive(false);
						document.body.style.overflow = 'scroll';
					}}
					className={styles.layer}
				></div>
			) : null}
		</div>
	);
};

export default Settings;
