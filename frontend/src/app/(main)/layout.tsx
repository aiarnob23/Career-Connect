import type { Metadata } from "next";
import "../globals.css";
import Navbar from "@/components/navbar/Navbar";
import StoreProvider from "@/providers/StoreProvider";
import { Work_Sans } from "next/font/google";
import Footer from "@/components/footer/Footer";

// const roboto = Roboto({
//   variable: "--font-roboto",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
//   display: "swap",
// });

// const poppins = Poppins({
//   variable: "--font-poppins",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700", "800", "900"],
//   display: "swap",
// });

const worksans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
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
        <body className={`${worksans.variable} antialiased`}>
          <StoreProvider>
            <div>
              <div>
                <Navbar />
              </div>
              <div>{children}</div>
              <div>
                <Footer/>
              </div>
            </div>
          </StoreProvider>
        </body>
      </html>
    </StoreProvider>
  );
}


