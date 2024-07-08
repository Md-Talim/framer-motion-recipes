"use client";

import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Home | Framer Motion Recipes",
  description:
    "Framer motion practice projects I built while learning framer motion.",
};

export default function HomePage() {
  const { push } = useRouter();

  useEffect(() => {
    push("/steps");
  });
}
