"use client";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { NotebookPen, Share2, SquarePen } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const { user, isSignedIn } = useUser();

  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-center text-accentv md:text-4xl lg:text-5xl">
          Transform Your Form Creation
        </h1>
        <h1 className="mt-4 text-3xl font-semibold text-center text-accentv md:text-4xl lg:text-5xl">
          With AI Magic in a Snap
        </h1>
        <div className="flex flex-col items-center justify-center pt-2">
          <h1 className="max-w-xl pt-2 text-sm font-medium leading-5 text-center text-primarytext sm:text-sm sm:pt-4 lg:text-xl">
            Generate, publish and share your form right away with AI. Dive into
            insightful results and analytics.
          </h1>
          {isSignedIn ? (
            <Link href="/dashboard">
              <Button className="mt-4 rounded-lg">+ Build AI Form</Button>
            </Link>
          ) : (
            <Link href="/sign-in">
              <Button className="mt-4 rounded-lg">+ Build AI Form</Button>
            </Link>
          )}
        </div>
      </div>
      <div className="w-full">
        <main className="flex flex-col flex-wrap items-center justify-center w-full m-auto mt-6 max-w-13xl">
          <section
            className="flex flex-col items-center justify-center pb-24 mt-12 space-y-4"
            id="features"
          >
            <h2 className="text-xl font-bold tracking-tighter text-center sm:text-2xl md:text-3xl">
              How It Works
            </h2>
            <section className="flex flex-row flex-wrap items-center justify-center gap-4 px-8">
              <div className="flex flex-grow max-w-md gap-2 px-4 pb-3 border rounded-lg">
                <div className="p-3 rounded-full">
                  <NotebookPen />
                </div>
                <div className="mt-2">
                  <h1 className="text-lg font-medium">
                    Write a Prompt for Your Form
                  </h1>
                  <p className="text-sm text-gray-600">
                    Describe what you need in simple terms. Our AI will take
                    care of the rest, generating a tailored form to meet your
                    specific requirements.
                  </p>
                </div>
              </div>
              <div className="flex flex-grow max-w-md gap-2 px-4 pb-3 border rounded-lg">
                <div className="p-3 rounded-full">
                  <SquarePen />
                </div>
                <div className="mt-2">
                  <h1 className="text-lg font-medium">Edit Your Form</h1>
                  <p className="text-sm text-gray-600">
                    Customize the form to fit your needs perfectly. Add, remove,
                    or adjust fields with ease to ensure it captures all the
                    necessary information.
                  </p>
                </div>
              </div>
              <div className="flex flex-grow max-w-md gap-2 px-4 pb-3 border rounded-lg">
                <div className="p-3 rounded-full">
                  <Share2 />
                </div>
                <div className="mt-2">
                  <h1 className="text-lg font-medium">
                    Share & Start Accepting Responses
                  </h1>
                  <p className="text-sm text-gray-600">
                    Distribute your form and start collecting responses
                    immediately. Easily share the form link via email, social
                    media, or embed it on your website.
                  </p>
                </div>
              </div>
            </section>
          </section>
        </main>
        <div className="absolute bottom-0 w-full">
          <section className="flex items-center justify-between w-full px-4 py-6 border-t">
            <h1>Privacy Policy</h1>
            <h1>Formy - AI</h1>
            <h1>Copyright @ 2024</h1>
          </section>
        </div>
      </div>
    </main>
  );
}
