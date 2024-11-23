import NextAuth, { AuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions: AuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET ?? "",
      authorization: {
        url: "https://accounts.spotify.com/authorize",
        params: {
          scope: "user-read-private user-read-email user-read-recently-played user-top-read",
        },
      }
    }),
  ],
  callbacks: {
    async session({ session, token, user } : {
        session: any,
        token: any,
        user: any
    }) {
      session.token = token.access_token
      return session;
    },
    async jwt({ token, user, account, profile }) {
        if(account) {
            token.access_token = account.access_token
        }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
