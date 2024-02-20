import About from "../../components/About";
import Skills from "../../components/Skills";
import Header from "../../components/Header";
import Profile from "../../components/Profile";
import Projects from "../../components/Projects";


export default function Home() {
  return (
    <main 
      className="
        max-w-2xl
        md:px-0
        px-10
        font-inter
      "
    >
      <Header />
      <Profile />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}