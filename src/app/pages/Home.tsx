import { Hero } from "../components/Hero";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { GithubStats } from "../components/GithubStats";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <GithubStats />
      <Contact />
    </>
  );
}
