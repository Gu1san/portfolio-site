type Props = {
  title: string;
  comment: string;
};

export default function SectionTitle({ title, comment }: Props) {
  return (
    <>
      <p className="text-brand-secondary-muted font-mono">{'//' + comment}</p>
      <h3 className="text-3xl font-semibold my-3.5">{title}</h3>
    </>
  );
}
