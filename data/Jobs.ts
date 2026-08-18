import { Job } from "@/types/components";

export const jobs: Job[] = [
  {
    image: "/jobs/freelance.jpg",
    company: "Freelancer",
    role: "Desenvolvedor Full Stack",
    start_date: new Date(2023, 0, 1),
    end_date: "Atualmente",
    topics: [
      "Desenvolvimento Full Stack de aplicações web, atuando na construção de interfaces responsivas e acessíveis e na implementação de regras de negócio no back-end.",
      "Implementação e integração de APIs e serviços web, garantindo comunicação eficiente entre front-end, back-end e banco de dados.",
      "Modelagem, manipulação e consulta de bancos de dados relacionais (PostgreSQL), incluindo criação de queries e suporte à persistência de dados.",
      "Desenvolvimento e manutenção de código limpo e escalável, aplicando boas práticas de programação, organização de projetos e padrões de desenvolvimento.",
      "Versionamento e controle de código com Git, colaborando em fluxos de trabalho baseados em metodologias ágeis (Scrum).",
      "Atuação em treinamento e curadoria de dados para modelos de IA generativa, contribuindo para melhoria da qualidade de respostas e alinhamento semântico de sistemas inteligentes.",
    ],
  },
  {
    image: "/jobs/ufmg.png",
    company: "UFMG",
    role: "Suporte de TI",
    start_date: new Date(2024, 11, 1),
    end_date: "Atualmente",
    topics: [
      "Desenvolvimento de curso interativo para educação infantil, utilizando HTML, CSS e JavaScript, com foco em usabilidade, interatividade e experiência do usuário.",
      "Prestação de suporte técnico e manutenção do projeto após a entrega, realizando ajustes, correções e melhorias funcionais.",
      "Atendimento e suporte técnico a instituições de ensino em âmbito nacional na utilização da plataforma AVAMEC Interativo, contribuindo para a continuidade do programa de educação infantil ProLEEI.",
      "Diagnóstico e resolução de incidentes técnicos e problemas reportados por usuários.",
      "Colaboração com equipes multidisciplinares para identificação de melhorias, validação de funcionalidades e suporte ao ambiente digital educacional.",
    ],
  },
  {
    image: "/jobs/mobradio.png",
    company: "MobRádio",
    role: "Desenvolvedor React Native",
    start_date: new Date(2022, 6, 1),
    end_date: new Date(2024, 5, 1),
    topics: [
      "Desenvolvimento e manutenção de aplicações mobile com React Native, participando de todo o ciclo de desenvolvimento, desde a implementação de funcionalidades até a entrega e publicação.",
      "Evolução e modernização de sistemas legados, aplicando boas práticas de desenvolvimento, refatoração de código e melhorias de performance.",
      "Implementação de correções de bugs, manutenção corretiva e suporte técnico, garantindo estabilidade das aplicações e melhor experiência para os usuários.",
      "Integração de aplicações com APIs e serviços back-end, assegurando comunicação eficiente entre front-end mobile e camadas de dados.",
      "Utilização de Git e GitHub para versionamento e controle de código, seguindo fluxos de trabalho colaborativos.",
      "Colaboração em equipe de desenvolvimento para análise de problemas, implementação de melhorias e evolução contínua dos projetos.",
    ],
  },
];
