import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import NavBar from "@/components/nav-bar";
import AuthProvider from "@/components/auth-provider";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Saas Template",
  description: "Generated by create next app",
};

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout(props: {
  children: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <AuthProvider>
          <div className="fixed -z-10 h-screen w-full bg-gradient-to-br from-indigo-50 via-slate-50 to-teal-50"></div>
          {/* <NavBar /> */}
          {props.children}
        </AuthProvider>
      </body>
    </html>
  );
}
