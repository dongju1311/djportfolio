import Link from "next/link";
import styles from "./header.module.css";

export default function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">Portfolio</Link>
            </div>
            <nav>
                <ul className={styles.list}>
                    <li><Link href="/" className={styles.itemHome}>Home</Link></li>
                    <li><Link href="#about" className={styles.item}>About</Link></li>
                    <li><Link href="/" className={styles.item}>Projects</Link></li>
                    <li><Link href="/" className={styles.item}>Skills</Link></li>
                    <li><Link href="/" className={styles.item}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}