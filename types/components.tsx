import { IconType } from "@icons-pack/react-simple-icons";
import { Url } from "next/dist/shared/lib/router/router";

export type ButtonProps = {
  link: Url | string;
  text: string;
};

export type Technologies = {
  id: string;
  name: string;
  icon: IconType;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  readme?: string;
  image: string;
  repository: string;
  deploy?: string;
  technologies: Technologies["id"][];
};

export type Job = {
  image: string;
  company: string;
  role: string;
  start_date: Date;
  end_date: Date | "Atualmente";
  topics: string[];
};

export type Education = {
  title: string;
  degree: string;
  institution: string;
  description: string;
  start_date: Date;
  end_date: Date | "Atualmente";
};
