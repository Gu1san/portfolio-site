import { ButtonProps } from "@/types/components";
import Link from "next/link";

export default function Button({
  link,
  text,
  textStyle,
  containerStyle,
}: ButtonProps) {
  return (
    <Link
      href={link}
      className={`flex justify-center bg-background-secondary min-w-36 rounded-md py-1 shadow-sm/25 shadow-foreground transition hover:shadow-brand-active hover:shadow-sm/100 ${containerStyle}`}
    >
      {text}
    </Link>
  );
}
