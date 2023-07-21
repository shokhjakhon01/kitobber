import { Footer, Header } from '../components';
import styles from '../css/admin.module.css';
import Styles from '../css/home.module.css';
import { AdminInput, Option, Textarea } from '../ui-components';
const Admin = () => {
	return (
		<div className={styles.adminPage}>
			<Header />
			<div className={Styles.container}>
				<div className={styles['form-control']}>
					<h3>Category kiriting</h3>
					<Option margin='0px' admin={true} />

					<AdminInput label={'kitob nomini kiriting'} />

					<AdminInput label={'kitob yozuvchisini kiriting'} />

					<AdminInput label={'kitob janerini kiriting'} />

					<AdminInput label={'kitob holatini kiriting'} />

					<div className={styles.upload}>
						<label className={styles.label} htmlFor=''>
							Kitobga oid rasimni kiriting
						</label>
						<input type='file' className={styles.input} />
					</div>

					<Textarea label={'kitob haqida qo’shimcha ma’lumot kiriting'} />

					<div className={styles.subdiv}>
						<button className={styles.submit}>E`lon joylash</button>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Admin;
