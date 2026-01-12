export const runtime = "nodejs";

import { createUser} from "@/lib/users";
import { NextResponse } from "next/server";

export async function POST() {
  const user = await createUser();
  return NextResponse.json({ message: "success", id: user.id });
}

