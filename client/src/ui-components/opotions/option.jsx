/* eslint-disable react/prop-types */
import styles from './option.module.css';
const array = [{ title: 'salom' }, { title: 'ali' }, { title: 'assas' }];

// eslint-disable-next-line react/prop-types
const Option = ({ margin = '0px auto', admin = false }) => {
	return (
		<div style={{ margin: margin }} className={styles.option}>
			<select name='Janr' id='' className={admin ? `${styles['admin-select']}` : `${styles['admin-tool']}` }>
				{array.map((item, i) => {
					return (
						<option value={item.title} className={styles.optionEl} key={i}>
							{item.title}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Option;
