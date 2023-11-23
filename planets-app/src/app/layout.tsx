"use client";

import { Lato } from "next/font/google";
import "./globals.css";
import { SideBarRoutes } from "@/components";
import { QueryClientProvider, QueryClient } from "react-query";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>PlanetsApp</title>
      </head>
      <body className={lato.className}>
        <SideBarRoutes />
        <main style={{ width: "100%" }}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </main>
      </body>
    </html>
  );
}
