"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SpinLoadingDiv } from "@/components";

export default function Home() {
  const { push } = useRouter();

  useEffect(() => {
    push("/planets");
  }, []);

  return <SpinLoadingDiv />;
}
