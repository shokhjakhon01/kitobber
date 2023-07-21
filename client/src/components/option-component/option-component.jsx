import { Option } from '../../ui-components';
import styles from './option-component.module.css';

const OptionComponent = () => {
	return (
		<div className={styles.option}>
			<Option />
			<Option />
			<Option />
			<Option />
		</div>
	);
};

export default OptionComponent;
