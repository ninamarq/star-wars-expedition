import { Lato } from "next/font/google";
import "./globals.css";
import { SideBarRoutes } from "@/components";

const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});

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
        {children}
      </body>
    </html>
  );
}
