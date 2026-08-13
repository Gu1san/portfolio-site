"use client";

import { Job } from "@/types/components";
import { formatDate } from "@/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function JobCard({ props }: { props: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex w-full flex-row items-start gap-5">
      <div className="relative size-30 shrink-0 overflow-hidden rounded-md ">
        <Image
          src={props.image}
          alt={`Logo da empresa ${props.company}`}
          fill
          sizes="192px"
          className="object-cover"
        />
      </div>

      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full min-h-30 cursor-pointer flex-row items-center justify-between rounded-md bg-background-secondary px-3.5 py-5 transition-colors duration-200 hover:bg-hover"
      >
        <div className="flex min-w-0 flex-col">
          <h4>
            {props.company} - {props.role}
          </h4>

          <p>
            {formatDate(props.start_date)} - {formatDate(props.end_date)}
          </p>

          <div
            className={`grid transition-all duration-500 ease-in-out ${
              open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <ul className="mt-2 flex flex-col gap-2 pl-5 list-disc">
                {props.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <ChevronDown
          className={`ml-4 shrink-0 transition-transform duration-500 text-brand ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
    </div>
  );
}
