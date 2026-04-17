import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Daniil Khusnullin | Engineering Cases",
  description: "Personal engineering showcase focused on architecture and outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
