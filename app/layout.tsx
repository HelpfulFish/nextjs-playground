import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/theme-toggle";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test NextJs Application",
  description: "Fullstack NextJs Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <ModeToggle className="m-4" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
