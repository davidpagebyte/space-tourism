import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'David';
export const siteTitle = 'Next.js Sample Website';

import { app_constants } from '../lib/data/globals';

import NavigationMenu from './NavigationMenu';

export default function Layout({ children, home }) {
	return (
		<div className={styles.container}>
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="Exploring space! Know all about it"
					content="Space Tourism"
				/>
			</Head>
			<NavigationMenu></NavigationMenu>
			<main>{children}</main>
		</div>
	);
}