import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header className="absolute top-3.5 flex flex-row justify-between align-center bg-background-tertiary/50 border border-brand rounded-3xl w-1/2 max-h-16 py-4 px-3">
      <a>Logo aqui</a>
      <div>
        <nav className="flex flex-row justify-between gap-3">
          <HeaderLink link={"#"} text="Início" />
          <HeaderLink link={"#about"} text="Sobre" />
          <HeaderLink link={"#technologies"} text="Tecnologias" />
          <HeaderLink link={"#projects"} text="Projetos" />
          <HeaderLink link={"#experiences"} text="Experiências" />
          {/* <HeaderLink link={"#"} text="Educação" /> */}
        </nav>
        <div></div>
      </div>
    </header>
  );
}
