import { FaFacebookF } from 'react-icons/fa';
import { IoLogoInstagram } from 'react-icons/io';
import { TbBrandTelegram } from 'react-icons/tb';
import { CardComponent, Footer, Header } from '../components';
import Styles from '../css/home.module.css';
import styles from '../css/personal.module.css';
import { RegisterButton } from '../ui-components';

const Personal = () => {
	const array = [1, 2, 3, 4];
	return (
		<div className={styles.personal}>
			<Header />
			<div className={Styles.container}>
				<div className={styles['personal-main']}>
					<div className={styles.profil}>
						<div className={styles.user}>
							<img src='/avatar.png' alt='avatar' />
							<div className={styles['user-infor']}>
								<p>Khurshidbek Sobirov</p>
								<p>+998 99 055 82 84</p>
							</div>
						</div>
						<RegisterButton title='Joylangan e’lonlar' />

						<div className={styles.socials}>
							<div>
								<IoLogoInstagram className={styles.icon} />
							</div>
							<div>
								<TbBrandTelegram className={styles.icon} />
							</div>
							<div>
								<FaFacebookF className={styles.icon} />
							</div>
						</div>
					</div>
					<div className={styles.card}>
						<CardComponent data={array} />

						<CardComponent data={array} />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Personal;
