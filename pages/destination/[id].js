import Head from 'next/head';
import { getAllDestinations } from '../../lib/destination';
import Layout from '../../components/layout';
import { getDestination } from '../../lib/destination';

export async function getStaticProps({ params }) {
    const destData = getDestination(params.id);
    return {
        props: {
            destData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllDestinations();
    return {
        paths,
        fallback: false,
    };
}


export default function Destination({ destData }) {
    return (
        <Layout>
            <Head>
                <title>{destData.name}</title>
            </Head>
            <article>
                <p>{destData.name}</p>
                <p>{destData.description}</p>
                <p>{destData.distance}</p>
                <p>{destData.travel}</p>
            </article>
        </Layout>
    );
}