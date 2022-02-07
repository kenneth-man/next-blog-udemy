import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { getPosts } from '../lib/posts';

//advantages of next js:
//-better for seo than standard react (pre-rendering - initial page content is rendered instead of empty div like in react)
//-better performance (pre-renedering - content rendered as soon as html is loaded, doesn't need to wait for js files to execute like in react)
//-comes with routing built in (no 3rd party packages needed for routing e.g. react-router-dom)

//'robots.txt' in 'public' directory (folder) is used to tell search engines which pages they can access

export const getStaticProps = async () => {
  const posts = await getPosts();

  return {
    props: { posts }
  }
}

//localhost:3000/
const HomePage = ({ posts }) => {
  return (
    <>
      {/* 'Head' component from next is used for elements that would normally go inside a <head> tag in HTML */}
      <Head>
        <title>My Blog</title>
        <meta name='descripion' value='This is my blog'/>
      </Head>
      <main>
        <h1>My Blog</h1>
        <ul>
          <li>
            {
              posts.map((curr, index) => 
                <Link key={index} href={`/posts/${curr.slug}`}>
                  <a>{curr.title}</a>
                </Link>
              )
            }
          </li>
        </ul>
      </main>
    </>
  )
}

export default HomePage;