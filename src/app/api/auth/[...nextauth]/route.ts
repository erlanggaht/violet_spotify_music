import NextAuth, { AuthOptions, DefaultSession, ISODateString } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions: AuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID ?? "",
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET ?? "",
      authorization: {
        url: "https://accounts.spotify.com/authorize",
        params: {
          scope:
            "user-read-private user-read-email user-read-recently-played user-top-read",
        },
      },
    }),
  ],
  callbacks: {
    async session({
      session,
      token,
      user,
    }: {
      session: any;
      token: any;
      user: any;
    }) {
      if (token?.profile) {
        session.user = token.profile;
        session.user.name = token.profile.display_name;
      } else {
        session.user = user; 
      }

      session.token = token.access_token;
      return session;
    },
    async jwt({ token, user, account, profile }) {
      if (account || user) {
        token.profile = profile;
        token.access_token = account?.access_token;
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// Addition of the DefaultSession custom type
declare module 'next-auth' {
  interface Session extends DefaultSession {
    user?: {
      name?: string | null
      email?: string | null
      image?: string | null
      images?: {
        url: string,
        height: number,
        width: number
      }[],
      product: string

    }
    expires: ISODateString,
  }
}