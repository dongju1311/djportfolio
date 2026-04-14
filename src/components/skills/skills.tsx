import styles from './skills.module.css';
import {FiCheckCircle, FiCode, FiDatabase, FiLayers} from "react-icons/fi";

export default function Skills(){
    const skillData = [
        {
            category: "Frontend",
            icon: <FiCode />,
            skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "React", "Next.js", "TypeScript"]
        },
        {
            category: "Backend",
            icon: <FiDatabase />,
            skills: ["Java 17", "Spring Boot", "Spring Data JPA", "MySQL"]
        },
        {
            category: "Styling & Tools",
            icon: <FiLayers />,
            skills: ["CSS Modules", "Tailwind CSS", "Git / GitHub"]
        },
        {
            category: "Collaboration",
            icon: <FiCheckCircle />,
            skills: ["GitHub (Project Management)", "Notion (Wiki & Documentation)"]
        }
    ];
    return(
        <section className={styles.section} id="skills">
            <div className={styles.header}>
                <h1 className={styles.main}>Skills</h1>
                <p className={styles.subText}>실무에 적용 가능한 기술 스택입니다.</p>
            </div>
            <div className={styles.skillsGrid}>
                {skillData.map((group, idx) => (
                    <div key={idx} className={styles.skillCard}>
                        <div className={styles.cardHeader}>
                            <span className={styles.icon}>{group.icon}</span>
                            <h3>{group.category}</h3>
                        </div>
                        <div className={styles.skillList}>
                            {group.skills.map((skill, sIdx) => (
                                <div key={sIdx} className={styles.skillTag}>
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}