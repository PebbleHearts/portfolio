import Projects from "../../components/projects/Projects";
import Header from "../../components/header/Header";
import Introduction from "../../components/introduction/Introduction";
import Skills from "../../components/skills/Skills";
import Contact from "../../components/contact/Contact";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start">
      <div className="max-w-[1190px] w-full pl-10 pr-10">
        <Header />
        <Introduction />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
