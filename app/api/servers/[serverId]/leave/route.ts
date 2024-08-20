import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    {params}: {
        params: {serverId: string}
    }
) {
    try {
        
    } catch (error) {
        console.log("[SERVER_ID_LEAVE]", error);
        return new NextResponse("Internal Server Error", {
            status: 500
        })
    }

}