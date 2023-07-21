/* eslint-disable react/prop-types */
import { Card } from '../../ui-components';
import styles from './card-component.module.css';

// eslint-disable-next-line react/prop-types
const CardComponent = ({ title = '', data }) => {
	return (
		<div className={styles.card}>
			{title.length != 0 ? <h3>{title}</h3> : null}
			<div className={styles.wrapper}>
				{data.map((item, i) => {
					return <Card key={i} card={item} />;
				})}
			</div>
		</div>
	);
};

export default CardComponent;
