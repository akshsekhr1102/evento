import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type PaginationControlsProps = {
  PreviousPath: string;
  NextPath: string;
};
const btnStyles =
  "text-white px-5 py-3 items-center gap-x-2 hover:opacity-100 transition text-xs bg-white/5 rounded-md opacity-75 flex";

export default function PaginationControls({
  PreviousPath,
  NextPath,
}: PaginationControlsProps) {
  return (
    <section className="flex justify-between w-full">
      {PreviousPath ? (
        <Link href={PreviousPath} className={btnStyles}>
          <ArrowLeftIcon />
          Previous
        </Link>
      ) : null}
      {NextPath && (
        <Link href={NextPath} className={btnStyles}>
          Next
          <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
}
