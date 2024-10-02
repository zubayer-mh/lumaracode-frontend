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
        verified: { label: "verified", type: "text" },
        provider: { label: "provider", type: "text" }
      },

      async authorize(credentials, req) {

        if (credentials) {
          return credentials
        } else {
          return null
        }
        
      }
    })
  ],
};

export const handler = NextAuth(options);

export { handler as GET, handler as POST };


// try {
//   const res = await fetch('http://localhost:5000/sign-up', {
//     method: 'POST',
//     body: JSON.stringify({ email: 'zzzz@gmail.com', password: '33333333333' })
//   })

//   const data = await res.json()

//   console.log("data", data)

//   if (data?.user) {
//     return data.user
//   } else {
//     return null
//   }



// } catch (err) {
//   console.log(err)
// }