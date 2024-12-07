import NavBarComponent from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/next-theme-provider.component";

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
    // suppressHydrationWarning is used to suppress the warning that appears when the theme is changed
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <NavBarComponent />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
