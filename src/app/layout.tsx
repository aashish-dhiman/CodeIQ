import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../styles/globals.css";
import { cn } from "@/lib/utils";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Code IQ | Elevate Your Interview Prep with Comprehensive AI Tests",
    description:
        "Unlock your full potential with Code IQ, the ultimate destination for mastering programming languages and tech stacks. Dive into AI-driven tests, polish your skills, and conquer interviews with confidence. Your journey to interview success begins here at Code IQ – Where Your Interview Preparation Truly Completes!",
    keywords:
        "Code IQ,Interview Preparation,Programming Languages,Tech Stack,AI Tests,Technical Interviews,Coding Challenges,Algorithmic, Problem Solving,Technical Skills, Assessment,Programming, Quizz,Career, Development,Coding Mastery,Job Interview Prep,Tech Interview Questions, React interview questions,Node js questions,Next js Questions,Javascript interview question,C,C++,Java,Python,Express js,interview question,MERN Stack,python",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    inter.className,
                    "antialiased min-h-screen pt-16"
                )}
            >
                <link rel="icon" href="/fav.png" />

                <Providers>
                    <Navbar />
                    {children}
                    <Toaster />
                </Providers>
            </body>
        </html>
    );
}
