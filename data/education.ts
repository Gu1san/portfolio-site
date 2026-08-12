import { Education } from "@/types/components";

export const education: Education[] = [
  {
    title: "Desenvolvimento Full Stack Java",
    degree: "Curso Profissionalizante",
    institution: "EBAC",
    description:
      "Formação profissionalizante em desenvolvimento Full Stack com foco no ecossistema Java, abrangendo desenvolvimento de aplicações web, back-end, bancos de dados e boas práticas de programação.",
    start_date: new Date(2026, 1, 1),
    end_date: new Date(2027, 5, 1),
  },
  {
    title: "Jogos Digitais",
    degree: "Bacharelado",
    institution: "PUC Minas",
    description:
      "Formação superior em desenvolvimento de jogos digitais, envolvendo programação, desenvolvimento de software, game design e produção de projetos digitais.",
    start_date: new Date(2022, 1, 1),
    end_date: new Date(2025, 11, 1),
  },
  {
    title: "Técnico de Informática",
    degree: "Ensino Médio Técnico",
    institution: "IFMG Sabará",
    description:
      "Formação técnica em informática integrada ao ensino médio, com fundamentos de programação, desenvolvimento de sistemas, banco de dados, redes e suporte computacional.",
    start_date: new Date(2019, 1, 1),
    end_date: new Date(2022, 1, 1),
  },
];
