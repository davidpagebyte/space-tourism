import Head from 'next/head';
import Layout, { siteTitle } from '../components/common/Layout/Layout';
// import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { app_constants } from '../lib/data/globals';
import styles from './../styles/Home.module.scss'
import RoundLinkButton from '../components/common/RoundLinkButton/RoundLinkButton';

export default function Home({ homeData }) {
	
	return (
		<Layout>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={styles.background}>
				<article className={styles.homepage}>
					<main>
						<h2>{homeData.header}</h2>
						<h3>{homeData.highlight}</h3>
						<p>{homeData.content}</p>
					</main>
					<aside>
						<div>
							<RoundLinkButton type="main" text="EXPLORE" href={app_constants.sections[1].url}></RoundLinkButton>
						</div>
					</aside>
				</article>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const homeData = app_constants.home
	return {
		props: {
			homeData
		}
	}
}