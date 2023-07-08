import Head from 'next/head';
import { getAllTech } from '../../lib/technology';
import Layout from '../../components/layout';
import { getTechnology } from '../../lib/technology';

export async function getStaticProps({ params }) {
    const techData = getTechnology(params.id);
    return {
        props: {
            techData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllTech();
    return {
        paths,
        fallback: false,
    };
}


export default function Destination({ techData }) {
    return (
        <Layout>
            <Head>
                <title>{techData.name}</title>
            </Head>
            <article>
                <p>{techData.name}</p>
                <p>{techData.description}</p>
            </article>
        </Layout>
    );
}