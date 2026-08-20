import { Project } from "@/types/components";
import Image from "next/image";
import Link from "next/link";
import TechIcon from "./TechIcon";
import { ExternalLink } from "lucide-react";
import { technologies } from "@/data/technologies";

export default function ProjectCard({ props }: { props: Project }) {
  return (
    <Link href={props.repository} target="_blank">
      <div className="group flex flex-col bg-background-secondary justify-between p-3 rounded-2xl h-96 w-xs shadow-sm shadow-foreground/25 hover:-translate-y-1 hover:bg-hover hover:shadow-md transition-all">
        <div>
          <Image
            src={props.image}
            alt="Capa do projeto"
            width={300}
            height={250}
            className="rounded-xl h-40 "
          />

          <h4 className="text-lg font-bold my-2">{props.title}</h4>
          <div className="flex flex-wrap gap-2 mb-2">
            {props.technologies.map((id) => {
              const tech = technologies.find((t) => t.id === id);

              if (!tech) return null;

              const { icon: Icon, name } = tech;

              return (
                <TechIcon
                  key={id}
                  icon={<Icon size={16} />}
                  name={name}
                  showName={false}
                  background="tertiary"
                />
              );
            })}
          </div>
          <p>{props.description}</p>
        </div>
        <p className="flex gap-0.5 items-center bold mt-2 group-hover:text-brand">
          Ver mais <ExternalLink className="group-hover:text-brand" />
        </p>
      </div>
    </Link>
  );
}
