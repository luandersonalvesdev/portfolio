import About from "../../components/About";
import Header from "../../components/Header";
import Profile from "../../components/Profile";


export default function Home() {
  return (
    <main 
      className="
        w-screen
        max-w-2xl
        md:px-0
        pl-8
        font-inter
      "
    >
      <Header />
      <Profile />
      <About />
    </main>
  );
}