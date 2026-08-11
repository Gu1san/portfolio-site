import { ButtonProps } from "@/types/components";

export default function Button({ link, text }: ButtonProps) {
  return (
    <button className="bg-background-secondary min-w-36 rounded-md py-1 hover:bg-hover">
      {text}
    </button>
  );
}
