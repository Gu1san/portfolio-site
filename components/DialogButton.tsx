export default function DialogButton({
  link,
  children,
}: {
  link: string;
  children: string;
}) {
  return (
    <a
      href={link}
      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-foreground hover:bg-hover"
    >
      {children}
    </a>
  );
}
