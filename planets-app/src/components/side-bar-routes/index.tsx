"use client";

import { useMemo } from "react";
import { styles as s } from "./styles";
import { usePathname, useRouter } from "next/navigation";

export const SideBarRoutes = () => {
  const pathname = usePathname();
  const { push } = useRouter();
  const isPathnameSameAsRefLink = useMemo(
    () => (ref: string) => pathname.includes(ref),
    [pathname]
  );

  return (
    <aside>
      <h1>PlanetsApp</h1>
      <s.DynamicLink
        $isSelected={isPathnameSameAsRefLink("planets")}
        onClick={() => push("/planets")}
      >
        Planets
      </s.DynamicLink>
      <s.DynamicLink
        $isSelected={isPathnameSameAsRefLink("favorites")}
        onClick={() => push("/favorites")}
      >
        Favorites
      </s.DynamicLink>
    </aside>
  );
};
