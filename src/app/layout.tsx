import NavBarComponent from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Auram",
  description: "Crafted for you, inspired by you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={true}
        >
          <div >
            <NavBarComponent />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
