import { Education } from "@/types/components";
import { formatDate } from "@/utils";

export default function EducationItem({ props }: { props: Education }) {
  return (
    <div className="flex justify-between items-start gap-10 w-full">
      <div className="absolute left-20.5 md:left-38.5 w-5 h-5 mt-0.5 rounded-full bg-brand-secondary"></div>
      <p className="min-w-20 md:min-w-40 text-sm">
        {formatDate(props.start_date)} - {formatDate(props.end_date)}
      </p>
      <div className="flex flex-col gap-0.5">
        <h4 className="text-lg">
          {props.title} | {props.degree}
        </h4>
        <p className="text-sm italic">{props.institution}</p>
        <p className="mt-1.5">{props.description}</p>
      </div>
    </div>
  );
}
