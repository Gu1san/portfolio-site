import { Project } from "@/types/components";
import { technologies } from "./technologies";

export const projects: Project[] = [
  {
    slug: "finance-manager",
    title: "Gerenciador financeiro",
    description: "Gerenciador pessoal de finanças",
    readme: "",
    image: "/projects/finance_manager.png",
    repository: "https://github.com/Gu1san/Finance-Manager-Frontend",
    technologies: [
      "react",
      "nextjs",
      "typescript",
      "nodejs",
      "express",
      "postgresql",
      "knex",
    ],
  },
  {
    slug: "library",
    title: "Biblioteca pessoal",
    description: "Catálogo pessoal de livros",
    readme: "",
    image: "/projects/library.png",
    repository: "https://github.com/Gu1san/book-catalogue",
    technologies: ["react", "vite", "typescript", "tailwindcss"],
  },
  {
    slug: "task-list",
    title: "Lista de tarefas",
    description: "Lista de tarefas com filtragem de concluídas/pendentes",
    readme: "",
    image: "/projects/tasklist.png",
    repository: "https://github.com/Gu1san/tasks-list",
    technologies: ["react", "nextjs", "typescript", "jest"],
  },
];
