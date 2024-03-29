import CreateQuiz from "@/components/quiz/CreateQuiz";
import { getAuthSession } from "@/lib/nextAuth";
import { Metadata } from "next";
import { redirect } from "next/navigation";
export const metadata: Metadata = {
    title: "Create AI Driven Quiz | Code IQ",
    description: "Generate AI Based quizzes from various programming domains.",
    keywords:
        "Code IQ,Interview Preparation,Programming Languages,Tech Stack,AI Tests,Technical Interviews,Coding Challenges,Algorithmic, Problem Solving,Technical Skills, Assessment,Programming, Quizz,Career, Development,Coding Mastery,Job Interview Prep,Tech Interview Questions, React interview questions,Node js questions,Next js Questions,Javascript interview question,C,C++,Java,Python,Express js,interview question,MERN Stack,python",
};

const Quiz = async () => {
    const session = await getAuthSession();
    if (!session || !session?.user) {
        return redirect("/");
    }
    return (
        <main className="lex min-h-screen h-full items-center justify-between p-8">
            <CreateQuiz />
        </main>
    );
};

export default Quiz;
