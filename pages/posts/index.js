import Head from "next/head";
import { Fragment } from "react";
import AllPosts from "../../components/posts/all-posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

export default function AllPostsPage(props) {
    return <Fragment>
        <Head>
            <title>My Blog Post</title>
            <meta name="description" content="I post about programming post" />
        </Head>
        <AllPosts posts={props.posts} />
    </Fragment> 
}

export function getStaticProps() {
    const posts = getAllPosts();

    return {
        props: {
            posts
        }
    };
}