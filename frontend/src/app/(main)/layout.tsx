import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import StoreProvider from "@/providers/StoreProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Career Connect - Employee Job Matching and Prediction Platform with AI Integration",
  description:
    "Career Connect is an AI-powered platform designed for HR professionals and job seekers. HR can post job vacancies, search for candidates, and get AI-based recommendations, while candidates can apply for jobs, track applications, and get personalized job suggestions based on their skills and experience. Key features include AI-powered job matching, resume parsing, skill gap analysis, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased `}
        >
          <StoreProvider>
            <div>
              <div>
                <Navbar />
              </div>
              <div>{children}</div>
            </div>
          </StoreProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
