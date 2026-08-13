import Button from "@/components/Button";
import Header from "@/components/Header";
import TechIcon from "@/components/TechIcon";
import Image from "next/image";
import Link from "next/link";
import { technologies } from "@/data/technologies";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import JobCard from "@/components/JobCard";
import { jobs } from "@/data/jobs";
import { education } from "@/data/education";
import EducationItem from "@/components/EducationItem";
import Footer from "@/components/Footer";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <Header />
      <main className="flex flex-1 w-full px-2  max-w-7xl flex-col items-center justify-between pt-32 sm:items-start md:px-3">
        <section
          id="home"
          className="flex flex-col w-full items-center justify-center gap-3 mb-10"
        >
          <p className="text-sm">Belo Horizonte, Brasil</p>
          <h1 className="text-4xl text-center">Guilherme Cesário</h1>
          <h2>Desenvolvedor Full-Stack</h2>
          <div className="flex w-full gap-5 center justify-center items-center">
            <Button text="Baixar currículo" link={""} />
            <Button text="Linkedin" link={""} />
          </div>
        </section>
        <section id="about" className="flex items-center justify-between my-15">
          <div className="flex flex-col gap-3.5">
            <h3 className="text-3xl">Sobre mim</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className=" flex flex-col gap-2.5 ml-7 h-full">
            <Image
              src="/foto_perfil.jpg"
              width={400}
              height={400}
              alt="Foto de perfil"
              className="rounded-full"
            />
            <nav
              aria-label="Redes sociais"
              className="flex items-center justify-center gap-3.5"
            >
              <Link href={"https://github.com/Gu1san"}>
                <GitHubIcon
                  className="text-foreground-muted hover:text-foreground transition-all"
                  sx={{ fontSize: 29 }}
                />
              </Link>
              <Link
                href={
                  "https://www.linkedin.com/in/guilherme-cesário-b5138221a/"
                }
              >
                <LinkedInIcon
                  className="text-foreground-muted hover:text-foreground transition-all"
                  sx={{ fontSize: 30 }}
                />
              </Link>
            </nav>
          </div>
        </section>
        <section id="technologies" className="mb-15">
          <h3 className="text-3xl">Tecnologias</h3>
          <p>Ferramentas de trabalho que uso em meus projetos</p>
          <div className="flex flex-1 flex-wrap gap-2 mt-3.5">
            {technologies.map(({ id, name, icon: Icon }) => (
              <TechIcon icon={<Icon size={15} />} name={name} key={id} />
            ))}
          </div>
        </section>
        <section id="projects" className="mb-15 w-full">
          <h3 className="text-3xl mb-3.5">Projetos</h3>
          <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-10">
            {projects.map((p, index) => (
              <ProjectCard props={p} key={index} />
            ))}
          </div>
        </section>
        <section id="experiences" className="mb-15 w-full">
          <h3 className="text-3xl mb-3.5">Experiências</h3>
          <div className="flex flex-col gap-4 w-full">
            {jobs.map((j, index) => (
              <JobCard props={j} key={index} />
            ))}
          </div>
        </section>
        <section id="education" className="mb-15 w-full">
          <h3 className="text-3xl mb-3.5">Educação</h3>
          <div className="relative">
            <div className="absolute left-22 md:left-40 w-2 top-3 bottom-0 bg-background-secondary rounded-full"></div>
            <div className="flex flex-col gap-4 w-full">
              {education.map((e, index) => (
                <EducationItem props={e} key={index} />
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
}
