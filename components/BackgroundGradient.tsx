type GradientProps = {
  side: 'left' | 'right';
  color: 'brand' | 'muted';
};

export default function BackgroundGradient({ side, color }: GradientProps) {
  const colorVariants = {
    brand: 'from-brand-secondary to-brand-active',
    muted: 'from-brand to-brand-muted',
  };

  const sides = {
    left: 'sm:left-0',
    right: 'sm:right-0',
  };

  return (
    <div
      aria-hidden="true"
      className="absolute overflow-hidden inset-x-0 top-40 -z-10 transform-gpu blur-3xl sm:top-30"
    >
      <div
        className={`size-16 rounded-full bg-radial ${colorVariants[color]} ${sides[side]} sm:size-20`}
      />
    </div>
  );
}
