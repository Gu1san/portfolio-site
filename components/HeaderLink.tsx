import { ButtonProps } from "@/types/components";
import Link from "next/link";

export default function HeaderLink({ link, text }: ButtonProps) {
  return (
    <Link
      href={link}
      className="transparent rounded-xl py-1 px-2 hover:bg-background-secondary transition"
    >
      {text}
    </Link>
  );
}
