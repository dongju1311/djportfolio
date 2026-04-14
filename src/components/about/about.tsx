import styles from "./about.module.css";

const philosophies = [
    { title: "데이터 무결성에 대한 책임감", desc: "3년간 저축은행에서 근무하며 작은 숫자의 오차가 주는 무게를 배웠습니다. 이 경험을 바탕으로, 예외 처리를 꼼꼼히 하고 에러를 최소화하는 안정적인 코드를 지향합니다." },
    { title: "고객 중심의 UI/UX", desc: "창구에서 다양한 연령층의 고객을 직접 응대하며 소통 능력을 길렀습니다. 화면 너머의 사용자가 겪을 불편함을 먼저 생각하고, 누구나 직관적으로 사용할 수 있는 화면을 고민합니다." },
    { title: "도메인 지식과 기술의 융합", desc: "자산관리학 전공 지식과 K-Digital 과정에서 쌓은 풀스택 기술을 결합하여, 금융/핀테크 도메인의 복잡한 비즈니스 로직을 누구보다 잘 이해하고 화면으로 구현할 수 있습니다." },
    { title: "증명하는 성실함", desc: "사이버대학교 학업 병행, 컴퓨터공학 복수전공, 실무 훈련 수료까지. 새로운 것을 배우는 데 주저하지 않고 꾸준함으로 증명합니다." }
];

const methods = [
    { num: 1, title: "문제의 본질 파악", desc: "코드를 치기 전, 이 기능이 왜 필요한지 비즈니스적 관점과 사용자 관점에서 먼저 묻고 정의합니다." },
    { num: 2, title: "유지보수를 고려한 설계", desc: "컴포넌트의 책임을 명확히 분리하고, 나중에 들어올 팀원도 쉽게 읽을 수 있는 클린 코드를 작성합니다." },
    { num: 3, title: "테스트와 엣지 케이스 확인", desc: "금융 데이터를 다루던 꼼꼼함으로, 발생할 수 있는 다양한 예외 상황(Edge Case)을 미리 차단합니다." },
    { num: 4, title: "유연한 소통과 피드백", desc: "기획자, 디자이너, 백엔드 개발자의 언어를 이해하고, 원활한 협업을 통해 최선의 결과물을 도출합니다." }
];

const educations = [
    {
        period: "2025. 06. ~ 2026. 01.",
        title: "K-Digital Training - 풀스택 개발자 과정",
        details: [
            "React 및 Java 기반 풀스택 실무형 커리큘럼 6개월과정 수료",
            "협업 툴(Git, Notion 등)을 활용한 팀 프로젝트 주도적 수행"
        ]
    },
    {
        period: "2023. 08. ~ 재학중",
        title: "경희사이버대학교",
        details: [
            "자산관리학과 3학년 재학 중",
            "컴퓨터공학과 복수전공 예정 (IT와 금융 비즈니스의 융합 역량 강화)"
        ]
    },
    {
        period: "2022. 10. ~ 2025. 03.",
        title: "삼호저축은행 - 여신 파트",
        details: [
            "3년간 고객 응대 및 수신/여신 관련 금융 데이터 처리",
            "정확한 업무 처리와 고객 중심의 커뮤니케이션 역량 확보"
        ]
    }
];

export default function About() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.header}>
                <h1 className={styles.main}>About Me</h1>
            </div>
            <div className={styles.content}>
                <div className={styles.imageWrapper}>
                    <img alt="황동주프로필사진" src="/images/photo1.jpg" className={styles.profileImage}/>
                </div>
                <div className={styles.textContent}>
                    <h3 className={styles.greeting}>안녕하세요! 프론트엔드 개발자 황동주입니다.</h3>
                    <p className={styles.bio}>
                        은행원으로서 3년간 근무하며 길러낸 <b>'데이터 무결성에 대한 책임감'</b>과 <b>'고객 중심의 소통 능력'</b>을
                        이제는 코드에 담아내고 있습니다.<br/><br/>
                        개발 역량이 화려한 기교에만 있다고 생각하지 않습니다.
                        오히려 사용자가 겪는 불편함을 해결하고, 팀원들이 의지할 수 있는 <b>단단하고 신뢰할 수 있는 코드</b>를
                        작성하는 것이 저의 가장 큰 무기입니다.<br/><br/>
                        금융 지식과 IT 기술을 융합하는 시각으로, 서비스의 가치를 높이는 프론트엔드 개발자가 되겠습니다.
                    </p>
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Name</span>
                            <span className={styles.infoValue}>황동주</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Education</span>
                            <span className={styles.infoValue}>경희사이버대학교</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Experience</span>
                            <span className={styles.infoValue}>삼호저축은행</span>
                        </div>
                        <div className={styles.infoItem}>
                            <span className={styles.infoLabel}>Email</span>
                            <span className={styles.infoValueMail}>ghkd1311@naver.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.subSection}>
                <h2 className={styles.subTitle}>개발 철학</h2>
                <div className={styles.gridContainer}>
                    {philosophies.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDesc}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.subSection}>
                <h2 className={`${styles.subTitle} ${styles.alignRight}`}>개발 방법</h2>
                <div className={styles.listContainer}>
                    {methods.map((item) => (
                        <div key={item.num} className={styles.cardRow}>
                            <div className={styles.circleNumber}>{item.num}</div>
                            <div>
                                <h3 className={styles.cardTitleWhite}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.subSection}>
                <h2 className={styles.subTitle}>경험 & 교육</h2>
                <div className={styles.timelineContainer}>
                    {educations.map((item, index) => (
                        <div key={index} className={styles.timelineItem}>
                            <div className={styles.dot}></div>
                            <div className={styles.timelineCard}>
                                <p className={styles.period}>{item.period}</p>
                                <h3 className={styles.cardTitleWhite}>{item.title}</h3>
                                <ul className={styles.timelineList}>
                                    {item.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}