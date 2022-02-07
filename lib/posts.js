//'lib' directory in top folder level is a convention used to contain 'modules' that doesn't have code related to certain pages or components

import { readFile, readdir } from 'fs/promises';
//'marked' package to convert markdown to html
import { marked } from 'marked';
//'gray-matter' package to get properties in a markdown file
import matter from 'gray-matter';

export const getPost = async (slug) => {
    const source = await readFile(`content/posts/${slug}.md`, 'utf8');
    const { data, content } = matter(source)
    const html = marked(content);
    
    return {
        title: data.title, 
        date: data.date,
        body: html    
    }

    //BEFORE LECTURE 22
    // //'Body.json()' is asynchronous and returns a Promise object that resolves to a JavaScript object. 
    // //'JSON.parse()' is synchronous can parse a string and change the resulting returned JavaScript object.
    // const source = await readFile(`content/posts/${slug}.json`, 'utf8');
    // return JSON.parse(source);
}

export const getSlugs = async () => {
    const suffix = '.md'
    const files = await readdir('content/posts');
    return files.filter(curr => curr.endsWith(suffix)).map(file => file.slice(0, -suffix.length));
}

export const getPosts = async () => {
    const slugs = await getSlugs();
    const posts = [];

    for(const slug of slugs){
        const post = await getPost(slug);
        posts.push({ ...post, slug });
    }

    return posts;
}