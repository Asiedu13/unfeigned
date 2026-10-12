import type { Metadata } from "next";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CursorDot } from "@/components/CursorDot";
import { Sidebar } from "@/components/Sidebar";
import { KeyboardProvider } from "@/components/KeyboardProvider";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prince Asiedu - Software Engineer",
  description:
    "Incoming at AmaliTech. CTO at TTYM Global. Building Repcollect. Writing from Accra, Ghana",
  openGraph: {
    title: "Prince Asiedu - Software Engineer",
    description:
      "Incoming at AmaliTech. CTO at TTYM Global. Building Repcollect. Writing from Accra, Ghana",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CursorDot />
        <KeyboardProvider>
          <div className="app">
            <Sidebar />
            <main className="main">{children}</main>
          </div>
        </KeyboardProvider>
      </body>
    </html>
  );
}
