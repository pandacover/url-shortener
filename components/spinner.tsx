import styles from "../styles/spinner.module.css";

export default function Spinner() {
	return (
		<div className={styles.container}>
			<div className={styles.spinner} />
		</div>
	);
}
