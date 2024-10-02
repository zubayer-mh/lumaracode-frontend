import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  secret: "asdfasdfasdhjfjasdhfjasdfa",
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
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" }
      },

      async authorize(credentials, req) {

        const user = { id: "", email: credentials?.email, password: credentials?.password }


        await fetch('http://localhost:5000/sign-up', {
          method: 'POST',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({ email: credentials?.email, password: credentials?.password })
        })

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ]
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