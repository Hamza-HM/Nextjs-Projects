import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectToDB } from '@utils/database';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        })
    ],
    async session({session}) {

    },
    async signIn({profile}) {
        //serverless =>  lambda => dunamodb
        try {
            await connectToDB();
            //
            //
            return true;
        }catch (err) {
            console.log(err)
            return false;
        }
    }
})

export {handler as GET , handler as POST}