export const runtime = "nodejs";

import { getUserByEmail } from "@/lib/users";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    
    const { usersEmail } = await params;  // פתר את ה-Promise כאן
    console.log("Hello", usersEmail);

    const record = await getUserByEmail(usersEmail);
    return NextResponse.json({ message: record });
}