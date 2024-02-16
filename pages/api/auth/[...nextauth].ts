import { clientPromise } from '@/utils/db/mongodb'
import NextAuth, { NextAuthOptions } from 'next-auth'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import GoogleProvider from 'next-auth/providers/google'
import mongoose from 'mongoose'
import { NextApiRequest, NextApiResponse } from 'next'
const ObjectId = mongoose.Types.ObjectId

if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
   throw new Error('Google client ID or secret is not defined.')
}

export const authOptions: NextAuthOptions = {
   adapter: MongoDBAdapter(clientPromise),
   secret: process.env.NEXT_AUTH_SECRET,
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
   ],
   pages: {
      newUser: '/onboarding',
   },
   events: {
      signIn: ({ isNewUser, account, user, profile }) => {
         user.googleAccessToken = account.access_token
         return
      },
   },
   cookies: {
      //
   },
   callbacks: {
      async signIn({ user, account, profile, email, credentials }) {
         return true
      },
      async redirect({ url, baseUrl }) {
         return url
      },
      async session({ session, token, user }) {
         return session
      },
   },
}

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
   // Do whatever you want here, before the request is passed down to `NextAuth`
   return await NextAuth(req, res, authOptions)
}
