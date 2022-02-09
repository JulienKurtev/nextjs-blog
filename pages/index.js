import Head from "next/head";
import { Fragment } from "react";
import Hero from '../components/hero/hero';
import FeaturedPosts from '../components/posts/featured-posts/featured-posts';
import { getFeaturedPosts } from "../lib/post-util";

export default function HomePage(props) {
    return <Fragment>
        <Head>
            <title>My Blog</title>
            <meta name="description" content="I post about programming" />
        </Head>
        <Hero />
        <FeaturedPosts posts={props.posts}/>
    </Fragment>
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    };
}
