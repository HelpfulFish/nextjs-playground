import { getUserById, updateUserLoginAtById } from "@/lib/account-service";
import { prisma } from "@/lib/database"
import { NextResponse } from "next/server";

type RequestBody = {
    id: string;
}

export const POST = async (req: Request) => {
    try {
        const requestBody = await req.json() as RequestBody;
        
        debugger;
        let user = await getUserById(requestBody.id);

        if (user) {
            user = await updateUserLoginAtById(user.id);
        }

        return NextResponse.json(user)
    } catch (error) {
        console.error("[USER_POST]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}