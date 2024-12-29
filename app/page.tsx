"use client";

import { AnimatedColorButton } from "./components/AnimatedColorButton";
import Link from "next/link";

export default function Home() {
  const fileUrl = process.env.NEXT_PUBLIC_DMG_DOWNLOAD_URL;
  const githubUrl = "https://github.com/taylorwaddell/mindrop";
  const twaddUrl = "https://twadd.dev";

  return (
    <main className="bg-[#191919] text-[#E8E8E8] min-h-screen flex justify-center items-center p-5 font-sans">
      <div className="max-w-xl w-full">
        <div className="flex items-baseline gap-4">
          <h1 className="text-4xl md:text-5xl mb-2 text-left">mindrop</h1>
          <small className="text-sm md:text-base text-gray-500">
            by{" "}
            <Link
              className="underline hover:text-teal-500"
              target="_blank"
              href={twaddUrl}
            >
              twadd
            </Link>
            .
          </small>
        </div>
        <p className="text-lg md:text-xl mb-8 text-left">
          A color picker resembling the native Mac color picker, upgraded with
          keyboard shortcuts.
        </p>
        {fileUrl ? (
          <Link href={fileUrl} target="_blank" download>
            <AnimatedColorButton
              colors={["#845ec2", "#1A8255", "#F25723"]}
              duration={3}
            >
              Download
            </AnimatedColorButton>
          </Link>
        ) : (
          <p className="text-red-500">
            Whoops. Looks like the file has gone missing. Try the{" "}
            <Link className="underline" href={githubUrl}>
              GitHub repo.
            </Link>
          </p>
        )}
      </div>
    </main>
  );
}
