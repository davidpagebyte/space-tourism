import Head from 'next/head';
import Image from 'next/image';
// import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'David';
export const siteTitle = 'Next.js Sample Website';

import Header from '../Header/Header';
import styles from './Layout.module.scss'

export default function Layout({ children, home }) {
	return (
		<div className={styles['app-container']}>
			<div className='wrapper'>
				<Head>
					<link rel="icon" href="/favicon.ico" />
					<meta
						name="Exploring space! Know all about it"
						content="Space Tourism"
					/>
				</Head>
				<Header></Header>
				<main>{children}</main>
			</div>
		</div>
	);
}