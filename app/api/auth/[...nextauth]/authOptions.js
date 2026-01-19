import { getUserByEmail } from "@/lib/users";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            async authorize(credentials) {
                const user = await getUserByEmail(credentials?.email)
                if (
                    credentials?.email === user.email &&
                    credentials?.password === user.password
                ) {
                    return user
                }
                return null;
            },
        }),
    ],
    callbacks: {
async jwt({ token, user }) {
if (user) {
token.id = user.id
token.email = user.email
token.otpVerified = false;
token.roleId = user.roleId;

}
77
return token;

}   }}