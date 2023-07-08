import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { app_constants } from '../lib/data/globals';

export default function Home({ homeData }) {
	
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section>
				<p>{homeData.header}</p>
				<p>{homeData.highlight}</p>
				<p>{homeData.content}</p>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	const homeData = app_constants.home
	return {
		props: homeData
	}
}