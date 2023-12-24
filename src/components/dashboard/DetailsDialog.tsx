"use client";
import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Github, HelpCircle, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Props = {};

const DetailsDialog = (props: Props) => {
    return (
        <Dialog>
            <DialogTrigger>
                <span className="flex items-center px-2 py-1 text-xs font-bold text-white rounded-md bg-slate-800">
                    What is this
                    <HelpCircle className="w-4 h-4 ml-2" />
                </span>
            </DialogTrigger>
            <DialogContent className="w-[70vw] max-w-[100vw] md:w-[50vw] sm:w-[60vw]">
                <DialogHeader>
                    <DialogTitle className="text-lg sm:text-xl md:text-2xl text-center">
                        Welcome to CODE IQ !
                    </DialogTitle>
                    <DialogDescription>
                        <div className="flex items-center justify-center gap-3 sm:my-2 w-full">
                            <span className="flex items-center">
                                <Link
                                    className="ml-1 underline"
                                    href="https://github.com/aashish-dhiman/CodeIQ"
                                >
                                    <Github className="w-6 hover:scale-[1.1] h-6 transition-all ease-in-out duration-200" />
                                </Link>
                            </span>
                            <span className="flex items-center">
                                <Link
                                    className="ml-1 underline"
                                    href="https://www.linkedin.com/in/aashish-dhiman/"
                                >
                                    <Linkedin className="w-6 hover:scale-[1.1] h-6 transition-all ease-in-out duration-200" />
                                </Link>
                            </span>
                        </div>
                        <p className="my-2 mt-4 px-1 sm:px-4 text-sm sm:text-md sm:py-2 text-center">
                            Are you tired from preparing for interviews? <br />{" "}
                            Say goodbye to those tough times. Empower your
                            coding journey with Code IQ — an interactive
                            platform offering a vast collection of interview
                            questions, links to insightful blog posts,
                            customizable AI driven quizzes for diverse
                            programming domains.
                        </p>
                        <hr />
                        <p className="my-2 font-semibold">
                            <h4 className="text-base font-semibold">
                                Built with
                            </h4>
                            <div className="grid justify-around grid-cols-4 mt-2 gap-y-3">
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="planetscale"
                                        src="/planetscale.png"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="hidden sm:block">
                                        Planet Scale
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="nextjs"
                                        src="/nextjs.png"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="hidden sm:block">
                                        Next.js
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="tailwind"
                                        src="/tailwind.png"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="hidden sm:block">
                                        Tailwind
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="nextauth"
                                        src="/nextauth.png"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="hidden sm:block">
                                        NextAuth
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="openai"
                                        src="/openai.png"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="hidden sm:block">
                                        OpenAI
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="react query"
                                        src="/react-query.png"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="hidden sm:block">
                                        React Query
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="primsa"
                                        src="/prisma.png"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="hidden sm:block">
                                        Prisma
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Image
                                        alt="typescript"
                                        src="/typescript.png"
                                        width={30}
                                        height={30}
                                    />
                                    <span className="hidden sm:block">
                                        TypeScript
                                    </span>
                                </div>
                            </div>
                        </p>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default DetailsDialog;
