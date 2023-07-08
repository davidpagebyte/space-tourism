import Head from 'next/head';
import { getAllCrew } from '../../lib/crew';
import Layout from '../../components/layout';
import { getCrewMember } from '../../lib/crew';

export async function getStaticProps({ params }) {
    const crewData = getCrewMember(params.id);
    console.log(crewData)
    return {
        props: {
            crewData,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllCrew();
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
