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
import SectionTitle from "@/components/SectionTitle";
import BackgroundGradient from "@/components/BackgroundGradient";

export default function Home() {
  return (
    <>
      <div className="flex flex-col z-10 flex-1 items-center justify-center font-sans">
        <Header />
        <main className="flex flex-1 w-full px-2  max-w-7xl flex-col items-center justify-between pt-32 sm:items-start md:px-3">
          <section
            id="home"
            className="flex flex-col w-full items-center justify-center gap-3 mb-10"
          >
            {/* <BackgroundGradient
            offset={"-11"}
            colors={["brand-secondary", "brand-active"]}
            rotation={30}
          /> */}
            <p className="text-sm">Belo Horizonte, Brasil</p>
            <h1 className="text-5xl font-bold text-center text-brand">
              Guilherme Cesário
            </h1>
            <h2>Desenvolvedor Full-Stack</h2>
            <div className="flex w-full gap-5 center justify-center items-center">
              <Button
                text="Baixar currículo"
                link={""}
                containerStyle="bg-brand-secondary font-semibold"
              />
              <Button
                text="Linkedin"
                link={
                  "https://www.linkedin.com/in/guilherme-cesário-b5138221a/"
                }
                containerStyle="font-semibold"
              />
            </div>
          </section>
          <section
            id="about"
            className="flex flex-col gap-5 items-center justify-between my-15 md: gap-1 md:flex-row"
          >
            <div className="flex flex-col">
              <SectionTitle>Sobre mim</SectionTitle>
              <p>
                Sou desenvolvedor com experiência em{" "}
                <span className="font-bold text-brand">
                  aplicações web, mobile, back-end e desenvolvimento de jogos
                </span>
                . Gosto de transformar ideias em{" "}
                <span className="font-bold text-brand">
                  soluções funcionais
                </span>
                , buscando escrever código{" "}
                <span className="font-bold text-brand">
                  organizado, escalável e fácil de manter
                </span>
                . Minha experiência em{" "}
                <span className="font-bold text-brand">
                  projetos colaborativos
                </span>{" "}
                também me permitiu desenvolver habilidades de{" "}
                <span className="font-bold text-brand">
                  comunicação, organização e trabalho em equipe
                </span>
                . Atualmente, busco continuar evoluindo tecnicamente enquanto
                participo de projetos que me permitam{" "}
                <span className="font-bold text-brand">
                  aprender e criar soluções relevantes
                </span>
                .
              </p>
            </div>
            <div className=" flex flex-col gap-2.5 ml-7 w-1/2 sm:w-1/3 md:min-w-3xs h-full">
              <Image
                src="/foto_perfil.jpg"
                width={400}
                height={400}
                alt="Foto de perfil"
                className="rounded-full border-2 border-foreground"
              />
              <nav
                aria-label="Redes sociais"
                className="flex items-center justify-center gap-3.5"
              >
                <Link target="_blank" href={"https://github.com/Gu1san"}>
                  <GitHubIcon
                    className="text-foreground-muted hover:text-brand-hover transition-all"
                    sx={{ fontSize: 29 }}
                  />
                </Link>
                <Link
                  target="_blank"
                  href={
                    "https://www.linkedin.com/in/guilherme-cesário-b5138221a/"
                  }
                >
                  <LinkedInIcon
                    className="text-foreground-muted hover:text-brand-hover transition-all"
                    sx={{ fontSize: 30 }}
                  />
                </Link>
              </nav>
            </div>
          </section>
          <section id="technologies" className="mb-15">
            <SectionTitle>Tecnologias</SectionTitle>
            {/* <BackgroundGradient offset={"+3"} colors={["brand", "brand-muted"]} /> */}
            <div className="flex flex-1 flex-wrap gap-2 mt-3.5">
              {technologies.map(({ id, name, icon: Icon }) => (
                <TechIcon icon={<Icon size={15} />} name={name} key={id} />
              ))}
            </div>
          </section>
          <section id="projects" className="mb-15 w-full">
            <SectionTitle>Projetos</SectionTitle>
            <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-10">
              {projects.map((p, index) => (
                <ProjectCard props={p} key={index} />
              ))}
            </div>
          </section>
          <section id="experiences" className="mb-15 w-full">
            <SectionTitle>Experiências profissionais</SectionTitle>

            <div className="flex flex-col gap-4 w-full">
              {jobs.map((j, index) => (
                <JobCard props={j} key={index} />
              ))}
            </div>
          </section>
          <section id="education" className="relative mb-15 w-full">
            <SectionTitle>Acadêmico</SectionTitle>
            {/* <BackgroundGradient
            offset={"-11"}
            colors={["brand-secondary", "brand-active"]}
            rotation={30}
          /> */}
            <div className="relative">
              <div className="absolute left-22 md:left-40 w-2 top-3 bottom-0 bg-background-tertiary rounded-full"></div>
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
    </>
  );
}
