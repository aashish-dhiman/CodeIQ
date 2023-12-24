"use client";
import { User } from "next-auth";
import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { signOut } from "next-auth/react";

interface Props {
    user: Pick<User, "id" | "name" | "image" | "email">;
}

const UserLogo = ({ user }: Props) => {
    return (
        <div className="relative flex items-center">
            {/* for mobile-> small display */}
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Avatar className="hover:scale-[1.05] hover:-translate-y-[1px] transition-all ease-in-out duration-200">
                        <Image
                            src={user?.image ?? "https://github.com/shadcn.png"}
                            width={37}
                            height={37}
                            className="rounded-full w-auto h-auto cursor-pointer "
                            alt="profile"
                        />

                        <AvatarFallback>
                            <AvatarImage
                                src="https://github.com/shadcn.png"
                                className="rounded-full w-auto h-auto cursor-pointer"
                            />
                        </AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-[200px]">
                    <DropdownMenuLabel>
                        <div className="flex flex-col items-start gap-1">
                            <span className="text-sm font-medium">
                                {user?.name}
                            </span>
                            <span className="text-xs font-medium block">
                                {user?.email}
                            </span>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup>
                        <DropdownMenuItem>
                            <Link href="/dashboard" className="w-full">
                                Dashboard
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/" className="w-full">
                                Interview Prep
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href="/quiz" className="w-full">
                                Take AI Quiz
                            </Link>
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Button
                            variant="destructive"
                            className="w-full"
                            onClick={(e) => {
                                e.preventDefault();
                                signOut().catch(console.error);
                            }}
                        >
                            <LogOut className="mr-2 h-4 w-4" /> Sign Out
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            {/* for PC version */}
            <span className=" absolute -bottom-10 text-xs font-medium min-w-fit bg-blue-700 text-white px-3 py-[6px] rounded-[20px] whitespace-nowrap transform -translate-x-1/2 left-1/2 select-none hidden sm:block shadow-lg dark:shadow-gray-800">
                Welcome, {user.name && user?.name.split(" ")[0]}
            </span>
            <div className="absolute -bottom-11 -left-4 w-0 h-0 border-l-4 border-r-4 border-transparent border-solid border-b-8 border-b-blue-700 m-8 hidden sm:block"></div>
        </div>
    );
};

export default UserLogo;
