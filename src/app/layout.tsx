import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Kett.dev",
  description: "Lewis Kett's personal branding website & software development blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
