import Header from "@/components/header/header";
import MainPage from "@/components/mainPage/mainPage";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <div>
        <Header/>
        <main>
            <MainPage/>
        </main>
        <Footer/>
    </div>
  );
}
