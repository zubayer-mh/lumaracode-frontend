import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_APP_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID || "",
      clientSecret: process.env.FACEBOOK_SECRET || "",
    }),

    // CredentialsProvider({
    //   cre
    //   async authorize(credentials){
    //     console.log("authorize function: ", credentials)
    //   }
    // })
  ],
};

export const handler = NextAuth(options);

export { handler as GET, handler as POST };