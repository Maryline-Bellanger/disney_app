import { Animations } from "@/app/types/definitions";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const path = request.nextUrl.searchParams.get("path");
    let dataAnimationsDisney;

    try {
        dataAnimationsDisney =
            await sql<Animations>`SELECT tmdb_id FROM disney_animations;`;
    } catch (error) {
        return NextResponse.json({ error });
    }
    if (path) {
        revalidatePath(path);
    }
    return NextResponse.json({ data: dataAnimationsDisney });
}
