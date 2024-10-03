import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  secret: "asdfasdfasdhjfjasdhfjasdfa",

  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.provider) {
        token.provider = account.provider
      }
      if (user) {
        token.email = user.email
        token.password = user.password
        token.verified = user.verified
        token.image = user.image
        token.name = user.name
      }

      return token
    },

    async session({ session, token }) {
      if (token?.provider) {
        session.user.provider = token.provider
      }

      if (token) {
        session.user.image = token.image
        session.user.verified = token.verified
        session.user.image = token.image
        session.user.name = token.name
      }

      return session
    }
  },

  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_APP_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    },),

    FacebookProvider({
      clientId: process.env.FACEBOOK_APP_ID || "",
      clientSecret: process.env.FACEBOOK_SECRET || "",
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        _id: { label: "_id", type: "text" },
        email: { label: "email", type: "text" },
        password: { label: "password", type: "text" },
        verified: { label: "verified", type: "boolean" },
        provider: { label: "provider", type: "text" }
      },

      async authorize(credentials, req) {
        console.log(credentials)
        if (credentials) {
          return credentials
        } else {
          return null
        }

      }
    })
  ],
};

const handler = NextAuth(options);

export { handler as GET, handler as POST };