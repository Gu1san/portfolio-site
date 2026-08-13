type TechIconProps = {
  icon: React.ReactNode;
  name: string;
  showName?: boolean;
  background?: "secondary" | "tertiary";
};

export default function TechIcon({
  icon,
  name,
  showName = true,
  background = "secondary",
}: TechIconProps) {
  return (
    <div
      className={`flex w-auto items-center gap-2 bg-background-${background} ${showName ? "py-0.5" : "py-1.5"} px-1.5 rounded-full group-hover:bg-hover-secondary shadow transition`}
    >
      {icon}
      {showName && <span className="text-sm">{name}</span>}
    </div>
  );
}
