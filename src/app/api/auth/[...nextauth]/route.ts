import NextAuth, {AuthOptions} from "next-auth"
import SpotifyProvider from 'next-auth/providers/spotify'

export const authOptions: AuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID ?? "",
            clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET ?? "",
          })
    ]
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }