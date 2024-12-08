import NavBarComponent from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/components/next-theme-provider.component";
import { Nunito_Sans } from "next/font/google";
import FooterComponent from "@/components/footer.component";
import { Toaster } from "sonner";

const nunitoSans = Nunito_Sans({
  weight: ["1000", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

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
      <body
        className={`${nunitoSans.className} bg-white text-black dark:bg-black dark:text-white transition-colors duration-300 ease-in-out min-h-screen flex flex-col tracking-widest`}
      >
        <Toaster richColors theme="light" position="top-center" />
        <Providers>
          <NavBarComponent />
          <div className="mt-16 lg:mt-20">{children}</div>
          <FooterComponent />
        </Providers>
      </body>
    </html>
  );
}
