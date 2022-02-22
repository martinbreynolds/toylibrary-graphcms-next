import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import bcrypt from "bcrypt";
import { useState } from "react";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "your@email.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const hashedPassword = await bcrypt.hashSync(credentials.password, 12);

        try {
          const res = await fetch(`${req.headers.origin}/api/fetchUser`, {
            method: "POST",
            body: JSON.stringify({
              csrfToken: credentials.csrfToken,
              email: credentials.email,
              password: hashedPassword,
            }),
            headers: { "Content-Type": "application/json" },
          });
          const data = await res.json();

          const passwordMatch = await bcrypt.compareSync(
            credentials.password,
            data.practitioner.password
          );

          if (data.practitioner !== null) {
            if (
              credentials.email === data.practitioner.emailAddress &&
              passwordMatch == true
            ) {
              const user = {
                id: data.practitioner.id,
                email: data.practitioner.emailAddress,
                userType: data.practitioner.userType,
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
        token.type = user.userType;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
        session.type = token.type;
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
