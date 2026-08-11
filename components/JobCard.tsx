import { Job } from "@/types/components";
import Image from "next/image";

export default function JobCard(props: Job) {
  return (
    <div className="flex flex-row justify-between w-full gap-5">
      <Image
        src={props.image}
        alt={"Logo da empresa " + props.company}
        height={200}
        width={200}
        className="rounded-md"
      />
      <div className="flex flex-row bg-background-secondary rounded-md w-full">
        <div className="flex"></div>
      </div>
    </div>
  );
}
