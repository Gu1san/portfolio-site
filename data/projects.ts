import { Project } from '@/types/components';
import { technologies } from './technologies';

export const projects: Project[] = [
  {
    slug: 'finance-manager',
    title: 'Gerenciador financeiro',
    description:
      'Aplicação web desenvolvida para facilitar o controle de finanças pessoais.',
    readme: '',
    image: '/projects/finance_manager.png',
    repository: 'https://github.com/Gu1san/Finance-Manager-Frontend',
    technologies: [
      'react',
      'nextjs',
      'typescript',
      'nodejs',
      'express',
      'postgresql',
      'knex',
    ],
  },
  {
    slug: 'library',
    title: 'Biblioteca pessoal',
    description:
      'Catálogo pessoal de livros que permite cadastrar, visualizar, e alterar o status de livros adicionados.',
    readme: '',
    image: '/projects/library.png',
    repository: 'https://github.com/Gu1san/book-catalogue',
    technologies: ['react', 'vite', 'typescript', 'tailwindcss'],
  },
  {
    slug: 'task-list',
    title: 'Lista de tarefas',
    description:
      'Lista de tarefas com conceitos de gerenciamento de estado, Context API, Hooks e testes unitários.',
    readme: '',
    image: '/projects/tasklist.png',
    repository: 'https://github.com/Gu1san/tasks-list',
    technologies: ['react', 'nextjs', 'typescript', 'jest'],
  },
];
