import { FaTelegramPlane } from 'react-icons/fa';
import { HiOutlinePhone } from 'react-icons/hi';
import { RxInstagramLogo } from 'react-icons/rx';
import Styles from '../../css/home.module.css';
import { AddBtn, RegisterButton } from '../../ui-components';
import styles from './footer.module.css';

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={Styles.container}>
				<div className={styles.footerEco}>
					<div className={styles['footer-main']}>
						<img src='/footer.svg' alt='logo-image' />

						<ul className={styles.nav}>
							<li className={styles['nav-item']}>
								<a href='#'>Almashaman</a>
							</li>
							<li className={styles['nav-item']}>
								<a href='#'>Vaqtincha almashaman</a>
							</li>
							<li className={styles['nav-item']}>
								<a href='#'>Sotaman</a>
							</li>
							<li className={styles['nav-item']}>
								<a href='#'>Hadya</a>
							</li>
							<li className={styles['nav-item']}>
								<a href='#'>Izlayapman</a>
							</li>
						</ul>

						<div className={styles['btn-group']}>
							<AddBtn color={'white'} border={'white'} />
							<RegisterButton />
						</div>
					</div>
					<div className={styles['footer-faq']}>
						<h5 className={styles.title}>Umid qilamizki, bizdan yaxshi foyda kurdingiz</h5>
						<ul className={styles.nav}>
							<li className={styles['nav-item']}>
								<a href=''>Asosiy</a>
							</li>
							<li className={styles['nav-item']}>
								<a href=''>E’lonlar</a>
							</li>
							<li className={styles['nav-item']}>
								<a href=''>Kontaktlar</a>
							</li>
						</ul>
					</div>
					<div className={styles.devider}></div>
					<div className={styles.network}>
						<p>©2022 Thousand Sunny. All rights reserved</p>
						<div className={styles.socials}>
							<div className={styles['icon-wrapper']}>
								<HiOutlinePhone className={styles.icon} />
							</div>
							<div className={styles['icon-wrapper']}>
								<FaTelegramPlane className={styles.icon} />
							</div>
							<div className={styles['icon-wrapper']}>
								<RxInstagramLogo className={styles.icon} />
							</div>
						</div>
						<p>Design by Suges group</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
