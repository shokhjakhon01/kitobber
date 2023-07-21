import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoLogoInstagram } from 'react-icons/io';
import { TbBrandTelegram } from 'react-icons/tb';
import { Footer, Header, Settings } from '../components';
import Styles from '../css/home.module.css';
import styles from '../css/profil-settings.module.css';
import { Card, RegisterButton } from '../ui-components';

const ProfilSettings = () => {
	const [active, setActive] = useState(false);

	return (
		<div className={styles['profil-settings']}>
			<Header />
			<div className={Styles.container}>
				<div className={styles.settings}>
					<div className={styles.profil}>
						<div className={styles.user}>
							<img src='/avatar.png' alt='avatar' />
							<div className={styles['user-infor']}>
								<p>Khurshidbek Sobirov</p>
								<p>+998 99 055 82 84</p>
							</div>
						</div>

						<RegisterButton
							title='Joylangan e’lonlar'
							width='281px'
							padding='23px'
							color={active ? 'white' : '#fff279'}
							onClick={() => setActive(false)}
						/>

						<RegisterButton
							title='Hisobni sozlash'
							color={active ? '#fff279' : 'white'}
							width='281px'
							padding='23px'
							onClick={() => setActive(true)}
						/>

						<div className={styles.socials}>
							<div>
								<IoLogoInstagram className={styles.icon} />
							</div>
							<div>
								<TbBrandTelegram className={styles.icon} />
							</div>
							<div>
								<AiOutlinePlus className={styles.icon} />
							</div>
						</div>
					</div>

					{active ? (
						<Settings />
					) : (
						<div className={styles.card}>
							<Card />
							<Card />
							<Card />
							<Card />
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProfilSettings;
