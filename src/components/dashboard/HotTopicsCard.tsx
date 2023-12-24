import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
// import WordCloud from "../WordCloud";
import { prisma } from "@/lib/db";
import CustomWordCloud from "./WordCloud";

type Props = {};

const HotTopicsCard = async (props: Props) => {
    const topics = await prisma.topic_count.findMany({});
    const formattedTopics = topics.map((topic) => {
        return {
            text: topic.topic,
            value: topic.count,
        };
    });
    return (
        <Card className="col-span-4">
            <CardHeader>
                <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
                <CardDescription>
                    Topics which are trending right now.
                </CardDescription>
            </CardHeader>
            <CardContent className="pl-2 cursor-pointer ">
                <CustomWordCloud />
                {/* <CustomWordCloud formattedTopics={formattedTopics} /> */}
            </CardContent>
        </Card>
    );
};

export default HotTopicsCard;
