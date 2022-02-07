import React from 'react';
import Head from 'next/head';
import { getPost } from '../../lib/posts';
import { getSlugs } from '../../lib/posts';

//-CALLED 1ST
//defining all available dynamic routes for 'localhost:3000/posts/(dynamic slug here)'; 'paths' property is parsed into 'getStaticProps'
export const getStaticPaths = async () => {
    const slugs = await getSlugs();

    return {
        paths: slugs.map(slug => ({
            params: { slug }
        })),
        fallback: false
    }
}

//-CALLED 2ND
//how to pass props to a 'page component' (in 'pages' directory) in next; 'props' property is parsed into 'PostPage' component
//'getStaticProps' is only executed server side (to generate HTML returned to the browser), therefore we have access to all node functions
export const getStaticProps = async ({ params }) => {
    const post = await getPost(params.slug);

    return {
        props: {
            post
        }
    }
}

//-CALLED 3RD
const PostPage = ({ post }) => {
    return (
        <>
            <Head>
                <title>{post.title} - My Blog</title>
            </Head>
            <main>
                <h1>{post.title} &ndash; {post.date}</h1>
                <article dangerouslySetInnerHTML={{ __html: post.body }}/>
            </main>
        </>
    )
}

export default PostPage;