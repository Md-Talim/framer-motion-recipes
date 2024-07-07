"use client";

import { cn } from "@/app/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Multistep Wizard", href: "/steps" },
  { name: "Email Client", href: "/email-client" },
  { name: "Header", href: "/header" },
];

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      viewBox="0 0 16 16"
      version="1.1"
      data-view-component="true"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
    </svg>
  );
}

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="relative z-10 hidden lg:block">
      <div className="fixed flex h-screen w-[300px] grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6">
        <div className="flex h-16 shrink-0 items-center">
          <h2 className="text-2xl font-bold text-indigo-50">
            Animation Recipes
          </h2>
        </div>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        pathname === item.href
                          ? "bg-indigo-700 text-white"
                          : "text-indigo-200 hover:bg-indigo-700 hover:text-white",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li className="-mx-6 mt-auto">
              <Link
                href="https://github.com/md-talim/framer-motion-recipes/"
                target="_blank"
                className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-white hover:bg-indigo-700"
              >
                <GitHubIcon />
                <span className="sr-only">Repository Link</span>
                <span aria-hidden="true">Get Code</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
