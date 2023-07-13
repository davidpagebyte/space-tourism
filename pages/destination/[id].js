import Head from 'next/head';
import { getAllDestinationsStaticPaths } from '../../lib/destination';
import Layout from '../../components/common/Layout/Layout';
import { getDestination } from '../../lib/destination';
import { getIds } from '../../lib/utils';
import Link from 'next/link';

export async function getStaticProps({ params }) {
    const destData = getDestination(params.id);
    const destinationIds = getIds('destination')
    return {
        props: {
            destData,
            destinationIds
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllDestinationsStaticPaths();
    return {
        paths,
        fallback: false,
    };
}

export default function Destination({ destData, destinationIds }) {
    const destinationLinks = destinationIds.map((el,idx)=>{
        return <li key={idx}>
            <Link href={`/destination/${el}`}>{el}</Link>
        </li>
    })
    return (
        <Layout>
            <Head>
                <title>{destData.name}</title>
            </Head>
            <ul>
                {destinationLinks}
            </ul>
            <article>
                <p>{destData.name}</p>
                <p>{destData.description}</p>
                <p>{destData.distance}</p>
                <p>{destData.travel}</p>
            </article>
        </Layout>
    );
}