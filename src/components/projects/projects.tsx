"use client"

import styles from "./projects.module.css";
import {useState} from "react";
import ProjectModal from "@/components/projects/projectModal";

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

const projectData = [
    {
        id: "bicycle-app",
        title: "Bicycle-app: 자전거 통합 플랫폼",
        category: "Team Project (5인)",
        period: "2025.10 - 2025.12",
        role: "FullStack Developer",
        description: "자전거 판매, 대여 및 여행지 추천을 위한 플랫폼입니다. 상품 데이터 처리와 외부 API 연동을 통해 기능을 구현했습니다.",
        image: "/images/bicycle.jpg",
        tech: ["Next.js", "Spring Boot", "JPA", "My SQL", "CSS Modules"],
        link: "https://github.com/SUNGJISUCK95/teamproject",
        tasks: [
            {
                title: "제품 조회 및 비교",
                desc: "다양한 자전거 라인업을 카테고리별로 조회하고, 최대 3가지 제품의 사양을 한눈에 비교할 수 있는 인터페이스를 구현하여 사용자 편의성을 높였습니다."
            },
            {
                title: "장바구니 및 주문 결제 로직 구현",
                desc: "장바구니부터 토스페이 API를 활용한 실제 결제 프로세스까지의 흐름을 안정적으로 구축했습니다."
            },
            {
                title: "RESTful API 설계를 통한 프론트-백 연동",
                desc: "Spring Boot 서버를 이용하여 상품 리스트 필터링(로드, MTB, 하이브리드 등) 및 상세 페이지 데이터를 효율적으로 렌더링했습니다."
            }
        ]
    },
    {
        id: "portfolio v1",
        title: "portfolio: 포트폴리오 초기버전",
        category: "portfolio",
        period: "2026.01 - 2026.01",
        role: "Frontend Developer",
        description: "리액트비트를 이용한 포트폴리오 초기버전입니다.",
        image: "/images/portfolio.jpg",
        tech: ["React"],
        link: "https://github.com/dongju1311/Portfolio",
        tasks: [
            {
                title: "포트폴리오 초기버전",
                desc: "Window Xp를 테마로 하여 만든 초기 포트폴리오입니다."
            }
        ]
    }
];

export default function Projects(){
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    return(
        <section className={styles.section} id="projects">
            <div className={styles.header}>
                <h1 className={styles.main}>Projects</h1>
            </div>
            <div className={styles.grid}>
                {projectData.map((project,idx) => (
                    <article
                        key={idx}
                        className={styles.card}
                        onClick={()=> setSelectedProject(project)}>
                        <div className={styles.imageArea}>
                            <img src={project.image} alt={project.title}/>
                        </div>
                        <div className={styles.infoArea}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </article>
                ))}
            </div>
            <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    )
}