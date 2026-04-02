import Link from "next/link";
import { FiGithub, FiMail } from "react-icons/fi";
import styles from "./footer.module.css";

export default function Footer(){
    return(
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copyRight}>@2026 Portfolio. All rights reserved.</p>
                <nav>
                    <ul className={styles.iconList}>
                        <li><Link href="https://github.com/dongju1311" target="_blank" className={styles.iconItem}><FiGithub/></Link></li>
                        <li><Link href="mailto:ghkd1311@naver.com" className={styles.iconItem}><FiMail/></Link></li>
                    </ul>
                </nav>
            </div>
        </footer>
    )
}