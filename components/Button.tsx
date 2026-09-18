import { ButtonProps } from '@/types/components';
import Link from 'next/link';

export default function Button({
  link,
  text,
  containerStyle,
  transparent,
  icon,
}: ButtonProps) {
  return (
    <Link
      href={link}
      target="_blank"
      className={`flex justify-center font-semibold text-black ${transparent ? 'bg-transparent' : 'bg-linear-to-r from-brand-muted to-brand-secondary'} w-36 rounded-full py-1 shadow-sm/25 border transition hover:from-brand-secondary hover:to-brand-muted  ${containerStyle}`}
    >
      {icon ?? icon}
      {text}
    </Link>
  );
}
