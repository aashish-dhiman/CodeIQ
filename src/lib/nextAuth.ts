import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
    getServerSession,
    type NextAuthOptions,
    type DefaultSession,
} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/db";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            // ...other properties
            // role: UserRole;
        } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
    }
}

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXT_AUTH_SECRET,
    callbacks: {
        jwt: async ({ token }) => {
            const db_user = await prisma.user.findFirst({
                where: {
                    email: token?.email as string,
                },
            });
            if (db_user) {
                token.id = db_user.id;
            }
            return token;
        },
        session: ({ session, token }) => {
            try {
                if (token) {
                    session.user.id = token.id;
                    session.user.name = token.name;
                    session.user.email = token.email;
                    session.user.image = token.picture;
                }
            } catch (error) {
                console.error("Error during session callback:", error);
            }

            return session;
        },
    },
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
};

export const getAuthSession = () => {
    return getServerSession(authOptions);
};
