import Head from "next/head";
import { Fragment } from "react";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostsFiles } from "../../lib/post-util";

export default function PostDetailPage(props) {
    return <Fragment>
        <Head>
            <title>My Blog {props.title}</title>
            <meta name="description" content="I post about programming post" />
        </Head>
        <PostContent post={props.post} />
    </Fragment> 
}

export function getStaticProps(context) {
    const { params } = context;
    const post = getPostData(params.slug);

    return {
        props: {
            post
        },
        revalidate: 600
    };
}

export function getStaticPaths() {
    const postFilenames = getPostsFiles();

    const slugs = postFilenames.map(fileName => fileName.replace(/\.md$/, ''));

    const pathsObj = slugs.map(slug => ({ params: { slug }}));

    return {
        paths: pathsObj,
        fallback: false
    };
}