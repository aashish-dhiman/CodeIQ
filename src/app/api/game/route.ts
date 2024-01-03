import { prisma } from "@/lib/db";
import { getAuthSession } from "@/lib/nextAuth";
import { quizCreationSchema } from "@/schema/quiz";
import { NextResponse } from "next/server";

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
        const { amount, topic, type } = quizCreationSchema.parse(body);

        const game =await prisma.game.create({
            data:{
                gameType: type,
                
            }
        })
    } catch (error) {
        console.log(error);
    }
};
