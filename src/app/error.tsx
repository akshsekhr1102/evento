"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex  gap-3 flex-col items-center justify-center">
      {/* <h2 className="text-5xl ">Something went wrong!</h2> */}
      <p className="max-w-[500px] px-10">
        <code className="font-thin italic">{error.message}</code>
      </p>
      <button
        className="bg-white/10 px-3 py-1 rounded-md"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
