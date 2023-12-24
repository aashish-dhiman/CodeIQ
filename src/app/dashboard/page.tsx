import React from "react";
import { Metadata } from "next";
import { getAuthSession } from "@/lib/nextAuth";
import { redirect } from "next/navigation";
import HistoryCard from "@/components/dashboard/HistoryCard";
import QuizMeCard from "@/components/dashboard/QuizMeCard";
import HotTopicsCard from "@/components/dashboard/HotTopicsCard";
import RecentActivityCard from "@/components/dashboard/RecentActivityCard";
import DetailsDialog from "@/components/dashboard/DetailsDialog";

export const metadata: Metadata = {
    title: "Dashboard | Code IQ",
    description: "User Dashboard",
    keywords:
        "Code IQ,Interview Preparation,Programming Languages,Tech Stack,AI Tests,Technical Interviews,Coding Challenges,Algorithmic, Problem Solving,Technical Skills, Assessment,Programming, Quizz,Career, Development,Coding Mastery,Job Interview Prep,Tech Interview Questions, React interview questions,Node js questions,Next js Questions,Javascript interview question,C,C++,Java,Python,Express js,interview question,MERN Stack,python",
};
interface Props {}

const page = async (props: Props) => {
    const session = await getAuthSession();
    if (!session || !session?.user) {
        return redirect("/");
    }
    return (
        <main className="p-8 mx-auto max-w-7xl min-h-full">
            <div className="flex items-center">
                <h2 className="mx-2 text-xl md:text-3xl font-bold">
                    Dashboard
                </h2>
                <DetailsDialog />
            </div>

            <div className="grid gap-4 mt-6 md:grid-cols-2">
                <QuizMeCard />
                <HistoryCard />
            </div>
            <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7 h-full">
                <HotTopicsCard />
                <RecentActivityCard />
            </div>
        </main>
    );
};

export default page;
