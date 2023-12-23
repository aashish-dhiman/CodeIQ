"use client";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { LogIn } from "lucide-react";

interface Props {}

const SignInButton = (props: Props) => {
    return (
        <Button
            onClick={(e) => {
                e.preventDefault();
                signIn("google").catch(console.error);
            }}
        >
            <LogIn className="mr-2 h-4 w-4" /> Sign in
        </Button>
    );
};

export default SignInButton;
