import styles from "./mainPage.module.css"
export default function MainPage(){
    return(
        <section className={styles.section}>
            <h1 className={styles.name}>황동주</h1>
            <h2 className={styles.role}>Frontend Developer</h2>
            <p className={styles.desc}>유지보수성과 확장성을 고려해 코드를 설계합니다.</p>
            <div className={styles.btnGroup}>
                <button className={styles.firstBtn}>About Me</button>
                <button className={styles.secondBtn}>View Projects</button>
            </div>
        </section>
    )
}