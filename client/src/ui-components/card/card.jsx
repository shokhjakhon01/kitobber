import styles from './card.module.css';
const Card = () => {
	return (
		<div className={styles.card}>
			<img src='/card.png' alt='card-image' />
			<div className={styles['card-body']}>
				<h3>Ihyou Ulumid din</h3>
				<p>Abu Homid G’azzoliy</p>
				<a href='#'>Vaqtincha Almashtiraman</a>
				<span>Holati :O’rtacha</span>
			</div>
		</div>
	);
};

export default Card;
