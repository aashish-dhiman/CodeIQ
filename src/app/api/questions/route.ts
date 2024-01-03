import { getQuestionsSchema } from "@/schema/questions";
import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { gpt_output } from "@/lib/gpt";
import { getAuthSession } from "@/lib/nextAuth";

// POST-> /api/questions
export const POST = async (req: Request, res: Response) => {
    try {
        const session = await getAuthSession();
        if (!session || !session?.user) {
            return NextResponse.json(
                {
                    error: "User not logged in !",
                },
                {
                    status: 401,
                }
            );
        }

        const body = await req.json();
        const { amount, topic, type } = getQuestionsSchema.parse(body);

        let response: any[] = [];
        if (type === "open_ended") {
            response = await gpt_output(
                "You are a helpful AI that is able to generate a questions and answers, the length of each answer should not be more than 15 words, store all the answers and questions in a array where questions array store questions and answers array stores corresponding answers.",
                `Generate ${amount} questions on ${topic}`,
                {
                    question: "",
                    answer: "",
                }
            );
        } else if (type === "mcq") {
            response = await gpt_output(
                "You are a helpful AI that is able to generate mcq (multiple choice) questions and answers, the length of each question should not be more than 15 words, store all the questions in a questions array and all corresponding possible options in a options array and do not use indexing like A,B,C,D or 1,2,3,4 for storing options and store the actual corresponding answer from the options in the answer array. Each option should have maximum of 15 words.",
                `Generate ${amount} mcq questions on ${topic} with 4 options among which only 1 is correct.`,
                {
                    question: [],
                    options: [],
                    answer: [],
                }
            );
        }

        return NextResponse.json({ message: response }, { status: 200 });
    } catch (error) {
        if (error instanceof ZodError)
            return NextResponse.json({ message: error.issues });
        else return NextResponse.json({ message: error, status: 501 });
    }
};
