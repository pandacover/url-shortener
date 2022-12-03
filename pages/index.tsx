import Head from "next/head";
import Link from "next/link";
import { useState, FormEvent } from "react";
import { shorten } from "../utils/shorten";
import Spinner from "../components/spinner";
import styles from "../styles/Home.module.css";

export default function Home() {
	const [link, setLink] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [shortenedLink, setShortenedLink] = useState("");

	const onSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		shorten(link)
			.then((url) => setShortenedLink(url))
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	};

	return (
		<>
			<Head>
				<title>@pandacover / url shortener</title>
				<meta
					name='description'
					content='A url shortener made by @pandacover'
				/>
				<meta http-equiv='Content-Type' content='text/html;charset=UTF-8' />
			</Head>

			<div className={styles.urlContainer}>
				{error ? (
					<span className='error'>{error}</span>
				) : (
					<Link href={shortenedLink}>{shortenedLink}</Link>
				)}
			</div>
			<form className={styles.container} onSubmit={onSubmit}>
				<div className={styles.inputContainer}>
					<input
						id='text'
						type='text'
						name='text'
						disabled={loading}
						className={styles.input}
						placeholder='https://your_very_long_url'
						onChange={(e) => setLink(e.target.value)}
					/>
				</div>
				<div className={styles.btnContainer}>
					<button disabled={loading} type='submit' className='btn-primary'>
						{loading ? <Spinner /> : "Submit URL"}
					</button>
				</div>
			</form>
			<div className={styles.footer}>
				<Link href='https://github.com/pandacover/' className='me'>
					@pandacover
				</Link>{" "}
				/ Link Shortener
			</div>
		</>
	);
}
