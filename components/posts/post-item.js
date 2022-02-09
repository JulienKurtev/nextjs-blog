import Link from "next/link";
import Image from "next/image";
import styles from './post-item.module.css';

export default function PostItem(props) {
    const { image, title, date, excerpt, slug } = props.post;

    const formattedDate = new Date(date).toLocaleDateString('en-Us', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    const imagePath = `/images/posts/${slug}/${image}`;
    const linkPath = `/posts/${slug}`;

    return <li className={styles.post}>
        <Link href={linkPath}>
            <a>
                <div className={styles.image}>
                    <Image src={imagePath} width={300} height={200} alt={title} layout='responsive'/>
                </div>
                <div className={styles.content}>
                    <h3>{title}</h3>
                    <time>{formattedDate}</time>
                    <p>{excerpt}</p>
                </div>
            </a>
        </Link>
    </li>;
}