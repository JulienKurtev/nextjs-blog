import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'content');

export function getPostsFiles() {
    return fs.readdirSync(postsDir);
}

export function getPostData(postIdentifier){
    const postSlug =  postIdentifier.replace(/\.md$/, ''); //Removes file extenstion
    const filePath = path.join(postsDir, `${postSlug}.md`); 
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content
    };

    return postData;
}

export function getAllPosts() {
    const postFiles = getPostsFiles();

    const allPosts = postFiles.map(postFile => getPostData(postFile))
    .sort((postA , postB) => postA.date > postB.date ? -1 : 1);
    
    return allPosts;
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts();

    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}