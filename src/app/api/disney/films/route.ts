import { Films } from "@/app/types/definitions";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const path = request.nextUrl.searchParams.get("path");
    let dataFilmsDisney;

    try {
        dataFilmsDisney = await sql<Films>`SELECT tmdb_id FROM disney_films;`;
    } catch (error) {
        return NextResponse.json({ error });
    }
    if (path) {
        revalidatePath(path);
        redirect(path);
    }
    return NextResponse.json({ data: dataFilmsDisney });
}
