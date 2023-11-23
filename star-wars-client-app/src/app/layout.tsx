import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
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
        <title>Star Wars Expedition</title>
      </head>
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
