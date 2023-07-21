import { HiLocationMarker } from 'react-icons/hi';
import { AddBtn, RegisterButton } from '../../ui-components';
import styles from './menu.module.css';

const Menu = () => {
	return (
		<div className={styles.menu}>
			<div className={styles['menu-body']}>
				<div className={styles['btn-group']}>
					<AddBtn color='white' border='white'/>
					<RegisterButton />
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

				<div className={styles['menu-location']}>
					<HiLocationMarker className={styles['location-icon']} />
					<span>Toshkent shahar</span>
				</div>
			</div>
		</div>
	);
};

export default Menu;
