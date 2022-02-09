import Image from "next/image";
import styles from './hero.module.css';

export default function Hero() {
    return <section className={styles.hero}>
        <div className={styles.image}>
            <Image src='/images/banner.jpg' width={300} height={300} alt='Profile image of me' />
        </div>
        <h1>Hi, I&apos;m Julien</h1>
        <p>I blog about web development</p>
    </section>;
}  