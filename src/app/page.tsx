import Header from "@/components/header/header";
import MainPage from "@/components/mainPage/mainPage";
import Footer from "@/components/footer/footer";
import About from "@/components/about/about";

export default function Home() {
  return (
    <div>
        <Header/>
        <main>
            <MainPage/>
            <About/>
        </main>
        <Footer/>
    </div>
  );
}
