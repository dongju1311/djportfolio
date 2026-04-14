"use client"

import styles from './projectModal.module.css';
import { FiX,FiGithub} from "react-icons/fi";

interface Project {
    id: string;
    title: string;
    category: string;
    period: string;
    role: string;
    description: string;
    image: string;
    tech: string[];
    link: string;
    tasks: { title: string; desc: string; }[];
}

interface ProjectModalProps{
    project: Project | null;
    onClose: ()=> void;
}

export default function ProjectModal({project, onClose} : ProjectModalProps){
    if (!project) return null;
    return(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <div className={styles.modalHeader}>
                    <h2>{project.title}</h2>
                    <button className={styles.closeBtn} onClick={onClose}>
                        <FiX />
                    </button>
                </div>
                <div className={styles.modalBody}>
                    <img src={project.image} alt={project.title} className={styles.modalImg} />

                    <div className={styles.modalMeta}>
                        <div className={styles.tags}>
                            <span className={styles.category}>{project.category}</span>
                            <span className={styles.period}>{project.period}</span>
                        </div>
                        <div className={styles.techStack}>
                            {project.tech.map((t: string) => (
                                <span key={t} className={styles.techTag}>{t}</span>
                            ))}
                        </div>
                    </div>

                    <div className={styles.content}>
                        <section className={styles.section}>
                            <h3>Project Description</h3>
                            <p>{project.description}</p>
                        </section>
                        <section className={styles.section}>
                            <h3>Key Tasks</h3>
                            <div className={styles.taskList}>
                                {project.tasks.map((task,i) => (
                                    <div key={i} className={styles.taskItem}>
                                        <div className={styles.taskHeader}>
                                            <span className={styles.dot}></span>
                                            <h4>{task.title}</h4>
                                        </div>
                                        <p className={styles.taskDesc}>{task.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                    <div className={styles.modalFooter}>
                        <a href={project.link} target="_blank" rel="noreferrer" className={styles.linkBtn}>
                            <FiGithub /> GitHub 바로가기
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}