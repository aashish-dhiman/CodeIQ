import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mt-8">CodeIQ</h1>
                <p className="text-lg text-center mt-4">
                    Elevate Your Interview Prep with AI Tests
                </p>
                <Button variant="secondary">
                    {" "}
                    <Link href="/quiz">Quiz</Link>{" "}
                </Button>
            </div>
        </main>
    );
}
