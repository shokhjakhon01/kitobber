import { useState } from 'react';
import { HiLocationMarker, HiMenu } from 'react-icons/hi';
import Styles from '../../css/home.module.css';
import { AddBtn, RegisterButton } from '../../ui-components';

import { useNavigate } from 'react-router-dom';
import Menu from '../menu/menu';
import styles from './header.module.css';

const Header = () => {
	const [activeMenu, setActiveMenu] = useState(false);
	const navigate = useNavigate();

	const menuHandler = () => {
		setActiveMenu(prev => !prev);
	};

	return (
		<div className={Styles.container}>
			<header className={styles.header}>
				<img src='/logo.svg' alt='logo-image' />
				<div className={styles['header-location']}>
					<HiLocationMarker className={styles['location-icon']} />
					<span>Toshkent shahar</span>
				</div>
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
					<AddBtn />
					<RegisterButton onClick={() => navigate('/register')} />
				</div>

				<div className={styles.menu} onClick={menuHandler}>
					<HiMenu className={styles.menuIcon} />
				</div>
			</header>

			{activeMenu ? (
				<>
					<Menu />
					<div className={styles.layer} onClick={() => setActiveMenu(prev => !prev)}></div>
				</>
			) : null}
		</div>
	);
};

export default Header;
