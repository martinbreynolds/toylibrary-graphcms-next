import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// let hostPort;
// if (typeof window !== "undefined") {
//   hostPort = window.location.origin;
// }
// console.log(hostPort);

export default NextAuth({
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "your@email.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(req);

        try {
          const res = await fetch(`${req.headers.origin}/api/fetchUser`, {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" },
          });
          const data = await res.json();

          if (data.practitioner !== null) {
            if (
              credentials.email === data.practitioner.emailAddress &&
              credentials.password === data.practitioner.password
            ) {
              const user = {
                id: data.practitioner.id,
                email: data.practitioner.emailAddress,
                password: data.practitioner.password,
              };
              return user;
            }
            return null;
          }
        } catch (error) {
          throw new Error(console.log("message: " + error));
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: process.env.NEXT_AUTH_SECRET,
  jwt: { secret: process.env.NEXT_AUTH_SECRET, encryption: true },
  pages: {
    error: "/",
  },
});
