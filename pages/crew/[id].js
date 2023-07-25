import Head from 'next/head';
import { getAllCrewStaticPaths } from '../../lib/crew';
import Layout from '../../components/common/Layout/Layout';
import { getCrewMember } from '../../lib/crew';

export async function getStaticProps({ params }) {
    const crewData = getCrewMember(params.id);
    return {
        props: {
            crewData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllCrewStaticPaths();
    return {
        paths,
        fallback: false,
    };
}


export default function Crew({ crewData }) {
    return (
        <Layout>
            <Head>
                <title>{crewData.name}</title>
            </Head>
            <article>
                <p>{crewData.role}</p>
                <p>{crewData.name}</p>
                <p>{crewData.bio}</p>
            </article>
        </Layout>
    );
}
