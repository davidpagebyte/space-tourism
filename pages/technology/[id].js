import Head from 'next/head';
import { getAllTechStaticPaths } from '../../lib/technology';
import Layout from '../../components/common/Layout/Layout';
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
    const paths = getAllTechStaticPaths();
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