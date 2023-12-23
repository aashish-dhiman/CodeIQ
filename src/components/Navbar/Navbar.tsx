import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import icon from "@/assets/icon.png";
import Link from "next/link";
import { getAuthSession } from "@/lib/nextAuth";
import SignInButton from "./SignInButton";
import UserLogo from "./UserLogo";

interface Props {}

const Navbar = async (props: Props) => {
    const session = await getAuthSession();
    console.log(session);

    return (
        <nav className="fixed inset-x-0 inset-y-0 min-w-full h-fit z-10 bg-white dark:bg-gray-950 px-5 py-2 shadow-lg dark:shadow-slate-900">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <Image
                            src={icon}
                            alt="Picture of the author"
                            width={50}
                            height={50}
                            placeholder="blur"
                            className="rounded-[50%] "
                        />
                    </Link>
                    <Link href="/">
                        <div className="flex items-center gap-1 mt-2">
                            <span className="text-md font-[800] font-serif">CODE IQ</span>
                            <span className="text-xs font-bold mt-1 hidden sm:block">
                                - Interview Prep
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center gap-4 sm:gap-8">
                    {session && session?.user ? (
                        <UserLogo user={session?.user} />
                    ) : (
                        <SignInButton />
                    )}
                    <ModeToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
