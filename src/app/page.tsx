import Header from "@/components/header/header";
import MainPage from "@/components/mainPage/mainPage";
import Footer from "@/components/footer/footer";
import About from "@/components/about/about";
import Skills from "@/components/skills/skills";
import Projects from "@/components/projects/projects";

export default function Home() {
  return (
    <div>
        <Header/>
        <main>
            <MainPage/>
            <About/>
            <Projects/>
            <Skills/>
        </main>
        <Footer/>
    </div>
  );
}
