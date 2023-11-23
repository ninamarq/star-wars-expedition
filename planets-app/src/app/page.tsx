"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import SpinLoadingDiv from "@/components/spin-loading";

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    push("/planets");
  }, []);

  return <SpinLoadingDiv />;
}
