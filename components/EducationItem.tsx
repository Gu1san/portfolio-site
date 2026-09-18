import { Education } from '@/types/components';
import { formatDate } from '@/utils';

export default function EducationItem({ props }: { props: Education }) {
  return (
    <div className="flex justify-between py-10 items-start gap-10 w-full">
      <p className="min-w-20 md:min-w-40 text-sm font-mono text-brand-secondary-muted">
        {formatDate(props.start_date)} - {formatDate(props.end_date)}
      </p>
      <div className="flex flex-col gap-0.5">
        <h4 className="text-xl font-semibold">{props.title}</h4>
        <p className="text-sm text-foreground-muted">
          {props.institution} - {props.degree}
        </p>
        <p className="mt-2.5">{props.description}</p>
      </div>
    </div>
  );
}
