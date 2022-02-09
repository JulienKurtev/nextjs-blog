import styles from './post-content.module.css';
import PostHeader from './post-header';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export default function PostContent(props) {
    const { post } = props;
    const imagePath = `/images/posts/${post.slug}/${post.image}`;

    const customComponents = {
        image(image) {
            return <Image 
                src={`/images/posts/${post.slug}/${image.src}`}
                alt={image.alt}
                width={600}
                height={300}/>
        }
    };

    return <article className={styles.content}>
        <PostHeader title={post.title} image={imagePath} />

        <ReactMarkdown components={customComponents}>
            {post.content}
        </ReactMarkdown>
    </article>
}