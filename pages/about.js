import React from 'react';
import Head from 'next/head';

//localhost:3000/about
const AboutPage = () => {
    return ( 
        <>
            <Head>
                <title>About &ndash; My Blog</title>
                <meta name='descripion' value='About my blog'/>
            </Head>
            <main>
                <h1>About</h1>
            </main>
        </>
    )
}

export default AboutPage;