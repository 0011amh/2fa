import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (req)=>{
   // const token = await getToken({req,secret:process.env.NEXTAUTH_SECRET})
 //       return NextResponse.json({token})
}