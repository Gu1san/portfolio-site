import Button from '@/components/Button';
import Header from '@/components/Header';
import TechIcon from '@/components/TechIcon';
import Image from 'next/image';
import Link from 'next/link';
import { technologies } from '@/data/technologies';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';
import JobCard from '@/components/JobCard';
import { jobs } from '@/data/jobs';
import { education } from '@/data/education';
import EducationItem from '@/components/EducationItem';
import Footer from '@/components/Footer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import SectionTitle from '@/components/SectionTitle';
import EmailIcon from '@mui/icons-material/Email';
import BackgroundGradient from '@/components/BackgroundGradient';
import AboutTerminal from '@/components/AboutTerminal';

export default function Home() {
  return (
    <div className="flex w-full flex-col z-10 flex-1 items-center justify-center font-sans">
      <Header />
      <main className="flex flex-1 w-full  flex-col items-center justify-between pt-32 sm:items-start">
        <section
          id="home"
          className="flex w-full items-center justify-center px-10 pb-15"
        >
          <BackgroundGradient side="right" color="brand" />

          <div className="flex flex-row max-w-7xl items-center justify-start gap-34 mb-10">
            <div className="flex flex-col w-auto items-left justify-center gap-3">
              <div className="flex items-center justify-center md:justify-start gap-1.5">
                <span className="relative flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-brand-secondary"></span>
                </span>
                <p className="text-sm">Belo Horizonte, Brasil</p>
              </div>

              <h1 className="text-5xl font-bold text-center md:text-left">
                Guilherme Cesário
              </h1>
              <h2 className="text-center md:text-left">
                Desenvolvedor Full-Stack
              </h2>
              <div className="flex gap-5 items-center justify-center md:justify-start">
                <Button
                  text="Baixar currículo"
                  link={'./resume/CV_FullStack.pdf'}
                />
                <Button
                  text="Linkedin"
                  link={
                    'https://www.linkedin.com/in/guilherme-cesário-b5138221a/'
                  }
                  containerStyle="text-foreground"
                  transparent={true}
                />
              </div>
            </div>

            <Image
              src="/foto_perfil.jpg"
              width={200}
              height={200}
              alt="Foto de perfil"
              className="rounded-full hidden md:block"
            />
          </div>
        </section>
        <section
          id="about"
          className="flex w-full px-10 py-20 flex-col gap-5 bg-background-secondary items-center justify-center"
        >
          <div className="flex w-full max-w-7xl flex-col gap-5 items-center justify-between md:gap-1 md:flex-row">
            <div className="flex flex-col">
              <SectionTitle
                comment="sobre mim"
                title="Desenvolvimento além do código"
              />
              <p className="mb-8 max-w-3xl">
                Sou desenvolvedor com experiência em{' '}
                <span className="font-bold text-brand">
                  aplicações web, mobile, back-end e desenvolvimento de jogos
                </span>
                . Gosto de transformar ideias em soluções funcionais , buscando
                escrever código organizado, escalável e fácil de manter . Minha
                experiência em projetos colaborativos também me permitiu
                desenvolver habilidades de{' '}
                <span className="font-bold text-brand">
                  comunicação, organização e trabalho em equipe
                </span>
                . Atualmente, busco continuar evoluindo tecnicamente enquanto
                participo de projetos que me permitam aprender e criar soluções
                relevantes .
              </p>
              <Button
                link={'https://github.com/Gu1san'}
                text="GitHub"
                icon={
                  <GitHubIcon className="text-black" sx={{ fontSize: 24 }} />
                }
                containerStyle="items-center justify-start px-2.5 w-10 gap-2.5"
              />
            </div>
            <div className=" flex flex-col gap-2.5 ml-7 w-1/2 sm:w-1/3 md:min-w-3xs h-full">
              <AboutTerminal />
            </div>
          </div>
        </section>
        <section
          id="technologies"
          className="flex justify-center w-full items-center px-10 py-20"
        >
          <div className="flex flex-col justify-center items-start max-w-7xl">
            <SectionTitle comment="stack" title="Tecnologias e ferramentas" />
            <p>
              Tecnologias e ferramentas de trabalho que uso em meus projetos
            </p>
            <div className="flex flex-1 flex-wrap gap-x-4 gap-y-6 mt-10">
              {technologies.map(({ id, name, icon: Icon }) => (
                <TechIcon icon={<Icon size={15} />} name={name} key={id} />
              ))}
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="flex items-start justify-center px-10 py-20 w-full"
        >
          <div className="max-w-7xl w-full">
            <SectionTitle comment="cases" title="Projetos que desenvolvi" />
            <div className="flex flex-wrap justify-center md:justify-start mt-10 items-center gap-x-20 gap-y-10">
              {projects.map((p, index) => (
                <ProjectCard props={p} key={index} />
              ))}
            </div>
          </div>
        </section>
        <section
          id="experiences"
          className="flex items-start justify-center px-10 py-20 w-full bg-background-secondary"
        >
          <div className="max-w-7xl w-full">
            <SectionTitle
              comment="experiências profissionais"
              title="Trajetória"
            />

            <div className="relative pl-5 md:pl-11">
              <div className="absolute left-2 md:left-5 w-1 top-12 -bottom-20 bg-linear-to-b from-brand-muted to-brand-secondary"></div>
              <div className="flex flex-col gap-4 w-full">
                {jobs.map((j, index) => (
                  <JobCard props={j} key={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="education"
          className="flex items-start justify-center px-10 py-20 w-full"
        >
          <div className="max-w-7xl w-full">
            <SectionTitle comment="acadêmico" title="Formação" />
            <div className="mt-15">
              <div className="flex flex-col border-y border-[#595959] divide-y w-full divide-[#595959]">
                {education.map((e, index) => (
                  <EducationItem props={e} key={index} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="flex flex-col gap-5 items-center justify-center px-10 pb-20 w-full"
        >
          <h4 className="text-3xl font-semibold">Vamos trabalhar juntos?</h4>
          <p>Disponível para novos projetos, oportunidades e colaborações.</p>
          <nav className="flex justify-between gap-3.5 items-center">
            <Link target="_blank" href={'https://github.com/Gu1san'}>
              <GitHubIcon
                className="text-brand-secondary-muted hover:text-brand-secondary transition-all"
                sx={{ fontSize: 35 }}
              />
            </Link>
            <Link
              target="_blank"
              href={'mailto:guilhermecesario1808@gmail.com'}
            >
              <EmailIcon
                className="text-brand-secondary-muted hover:text-brand-secondary transition-all"
                sx={{ fontSize: 40 }}
              />
            </Link>
            <Link
              target="_blank"
              href={'https://www.linkedin.com/in/guilherme-cesário-b5138221a/'}
            >
              <LinkedInIcon
                className="text-brand-secondary-muted hover:text-brand-secondary transition-all"
                sx={{ fontSize: 40 }}
              />
            </Link>
          </nav>
        </section>
        <Footer />
      </main>
    </div>
  );
}
