type GradientProps = {
  offset: string;
  colors: [string, string];
  rotation?: number;
};

export default function BackgroundGradient({
  offset,
  colors,
  rotation,
}: GradientProps) {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
      <div
        style={{
          clipPath:
            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
        }}
        className={`relative left-[calc(50%${offset}rem)] aspect-1155/678 w-144.5 -translate-x-1/2 ${rotation ?? "rotate-" + rotation}  bg-linear-to-tr from-${colors[0]} to-${colors[1]} opacity-30 sm:left-[calc(50%-${offset + 20}rem)] sm:w-288.75`}
      />
    </div>
  );
}
