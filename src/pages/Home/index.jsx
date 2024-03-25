import About from "../../components/About";
import Skills from "../../components/Skills";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import FindMe from "../../components/FindMe";


export default function Home() {
  return (
    <main className="max-w-2xl font-geist px-7 mx-auto">
      <Header />
      <Profile />
      <About />
      <Projects />
      <Skills />
      <FindMe />
      <Footer />
    </main>
  );
}