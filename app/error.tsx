"use client";

import { title } from "@/components/primitives";
import { LinkIcon } from "@nextui-org/link";
import Link from "next/link";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    /* eslint-disable no-console */
    console.error(error);
  }, [error]);

  return (
   
    <div className='w-max m-auto flex flex-col items-center justify-center gap-4 mt-7'>
        <p className={`${title({ size: 'sm' })} capitalize`}>
          {error.message}
        </p>
        <Link
          className='flex w-max space-x-3 items-center outline-white/50 hover:outline-white transition outline p-2 rounded-lg text-sm'
          href='/'
        >
          <LinkIcon /> Back to home
        </Link>
      </div>
  );
}
