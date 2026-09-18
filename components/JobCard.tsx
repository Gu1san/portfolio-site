'use client';

import { Job } from '@/types/components';
import { formatDate } from '@/utils';
import { useState } from 'react';

export default function JobCard({ props }: { props: Job }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex w-full flex-row items-start gap-5">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full min-h-30 cursor-pointer flex-row items-center justify-between rounded-md bg-background-secondary px-3.5 py-5 transition-colors duration-200 hover:bg-hover"
      >
        <div className="absolute -left-5 md:-left-8 top-11 w-5 h-5 mt-0.5 rounded-full bg-brand-secondary"></div>
        <div className="flex min-w-0 flex-col">
          <p className="min-w-20 md:min-w-40 font-mono text-sm text-brand-secondary-muted">
            {formatDate(props.start_date)} - {formatDate(props.end_date)}
          </p>
          <div className="flex flex-col gap-0.5">
            <h4 className="text-xl font-semibold">{props.role}</h4>
            <p className="text-sm italic">{props.company}</p>
            <div
              className={`grid transition-all duration-500 ease-in-out ${
                open
                  ? 'grid-rows-[1fr] opacity-100'
                  : 'grid-rows-[0fr] opacity-0'
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
        </div>
      </div>
    </div>
  );
}
