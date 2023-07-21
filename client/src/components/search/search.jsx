import { AiOutlineSearch } from 'react-icons/ai';
import styles from './search.module.css';

const Search = () => {
	return (
		<div className={styles.search}>
			<form className={styles.formControl}>
				<AiOutlineSearch className={styles.icon} />
				<input type='text' name='sarch' placeholder='Qidiruv' />
				<button type='submit' className={styles.submit}>
					Izlash
				</button>
			</form>
		</div>
	);
};

export default Search;
