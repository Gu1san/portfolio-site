type TechIconProps = {
  icon: React.ReactNode;
  name: string;
  showName?: boolean;
  background?: 'secondary' | 'tertiary';
};

export default function TechIcon({
  icon,
  name,
  showName = true,
  background = 'secondary',
}: TechIconProps) {
  return (
    <div className="w-auto rounded-full p-px bg-linear-to-r from-brand-muted to-brand-secondary">
      <div
        className={`flex w-full h-full items-center gap-2 ${background === 'secondary' ? 'bg-background-secondary' : 'bg-background-tertiary'} ${showName ? 'p-2' : 'p-1.5'}  rounded-full group-hover:bg-hover-secondary shadow transition`}
      >
        {icon}
        {showName && <span className="text-sm">{name}</span>}
      </div>
    </div>
  );
}
