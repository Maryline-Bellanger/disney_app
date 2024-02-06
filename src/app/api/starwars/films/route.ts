import { Films } from "@/app/types/definitions";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const path = request.nextUrl.searchParams.get("path");
    let dataFilmsStarwars;

    try {
        dataFilmsStarwars =
            await sql<Films>`SELECT tmdb_id FROM starwars_films;`;
    } catch (error) {
        return NextResponse.json({ error });
    }
    if (path) {
        revalidatePath(path);
    }
    return NextResponse.json({ data: dataFilmsStarwars });
}
