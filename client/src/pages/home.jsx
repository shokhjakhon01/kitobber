import { CardComponent, Footer, Header, OptionComponent, Search } from '../components';
import styles from '../css/home.module.css';
const array = [1, 2, 3, 4];

const Home = () => {
	return (
		<>
			<Header />
			<div className={styles.container}>
				<Search />
				<OptionComponent />
				<div className={styles['card-section']}>
					<h1>Siz izlagan Kitoblar</h1>
					<CardComponent data={array} />

					<CardComponent title='Yangi Kitoblar' data={array}/>

					<CardComponent title='Tavsiya etilgan Kitoblar' data={array}/>

					<CardComponent title='Bolalar kitobi' data={array} />

					<p className={styles.p}>Kitob albatta bizga ham suhbat, do‘st, ilm beruvchi va bizni yaxshi yulga eltuvchidir.</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
