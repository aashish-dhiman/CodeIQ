"use client";
import { quizCreationSchema } from "@/schema/quiz";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { BookOpen, CopyCheck } from "lucide-react";
import { Separator } from "../ui/separator";

interface Props {}
type input = z.infer<typeof quizCreationSchema>;

const CreateQuiz = (props: Props) => {
    const form = useForm<input>({
        resolver: zodResolver(quizCreationSchema),
        defaultValues: {
            topic: "",
            type: "mcq",
            amount: 5,
        },
    });

    function onSubmit(values: input) {
        alert(JSON.stringify(values, null, 2));
    }

    // use to rerender form if any component changes
    form.watch();

    return (
        <div className="flex items-center justify-center">
            <Card className="shadow-md shadow-gray-800 ">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">
                        Generate Quiz
                    </CardTitle>
                    <CardDescription>
                        Choose a topic from your choice !
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8"
                        >
                            <FormField
                                control={form.control}
                                name="topic"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Topic</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="e.g- React JS, JavaScript, Node JS"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Enter the topic which you want to
                                            prepare for interview.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="amount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Number of Questions
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="How many questions?"
                                                type="number"
                                                {...field}
                                                onChange={(e) => {
                                                    form.setValue(
                                                        "amount",
                                                        parseInt(e.target.value)
                                                    );
                                                }}
                                                min={1}
                                                max={10}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Min-1 | Max-10
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <div className="flex justify-between">
                                <Button
                                    variant={
                                        form.getValues("type") === "mcq"
                                            ? "default"
                                            : "secondary"
                                    }
                                    className="w-1/2 rounded-none rounded-l-lg  transition-all ease-in-out duration-300"
                                    onClick={() => {
                                        form.setValue("type", "mcq");
                                    }}
                                    type="button"
                                >
                                    <CopyCheck className="w-4 h-4 mr-2" />{" "}
                                    Multiple Choice
                                </Button>
                                <Separator orientation="vertical" />
                                <Button
                                    variant={
                                        form.getValues("type") === "open_ended"
                                            ? "default"
                                            : "secondary"
                                    }
                                    className="w-1/2 rounded-none rounded-r-lg transition-all ease-in-out duration-300"
                                    onClick={() =>
                                        form.setValue("type", "open_ended")
                                    }
                                    type="button"
                                >
                                    <BookOpen className="w-4 h-4 mr-2" /> Open
                                    Ended
                                </Button>
                            </div>
                            <Button type="submit" className="w-full" >
                                Submit
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
};

export default CreateQuiz;
