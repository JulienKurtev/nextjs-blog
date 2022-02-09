import Link from 'next/link';
import Logo from './logo';
import styles from './header.module.css';

export default function Header() {
    return <header className={styles.header}>
        <Link href='/'>
            <a>
                <Logo />
            </a>
        </Link>
        <nav>
            <ul>
                <li>
                    <Link href='/posts'>Posts</Link>
                </li>
                <li>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
        </nav>
    </header>;
}