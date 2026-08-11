import Button from "@/components/Button";
import Header from "@/components/Header";
import TechIcon from "@/components/TechIcon";
import { SiGithub, SiLinkerd } from "@icons-pack/react-simple-icons";
import Image from "next/image";
import Link from "next/link";
import { technologies } from "@/data/technologies";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-background font-sans">
      <Header />
      <main className="flex flex-1 w-full px-2  max-w-7xl flex-col items-center justify-between py-32 sm:items-start md:px-3">
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
              <Link
                href="https://github.com/Gu1san"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <SiGithub size={20} />
              </Link>

              <Link
                href="https://linkedin.com/in/seu-usuario"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <SiLinkerd size={20} />
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
              <ProjectCard
                slug={p.slug}
                title={p.title}
                description={p.description}
                image={p.image}
                technologies={p.technologies}
                key={index}
              />
            ))}
          </div>
        </section>
        <section id="experiences">
          <h3 className="text-3xl mb-3.5">Experiências</h3>
        </section>
      </main>
    </div>
  );
}
