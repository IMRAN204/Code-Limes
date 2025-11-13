import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "CodeLimes | Experience the Freshness of Technology",
  description: "Software, web, app, SEO & digital marketing services.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
