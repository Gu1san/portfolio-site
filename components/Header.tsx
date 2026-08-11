import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header className="absolute top-3.5 flex flex-row justify-between align-center bg-background-tertiary border-background-tertiary border-2 rounded-3xl w-1/2 max-h-16 py-4 px-3">
      <a>Logo aqui</a>
      <div>
        <nav className="flex flex-row justify-between gap-3">
          <HeaderLink link={"#"} text="Início" />
          <HeaderLink link={"#"} text="Sobre" />
          <HeaderLink link={"#"} text="Tecnologias" />
          <HeaderLink link={"#"} text="Projetos" />
          <HeaderLink link={"#"} text="Experiências" />
          {/* <HeaderLink link={"#"} text="Educação" /> */}
        </nav>
        <div></div>
      </div>
    </header>
  );
}
