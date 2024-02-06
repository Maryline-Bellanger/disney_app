import { Series } from "@/app/types/definitions";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    const path = request.nextUrl.searchParams.get("path");
    let dataSeriesMarvel;

    try {
        dataSeriesMarvel =
            await sql<Series>`SELECT tmdb_id FROM marvel_series;`;
    } catch (error) {
        return NextResponse.json({ error });
    }
    if (path) {
        revalidatePath(path);
    }
    return NextResponse.json({ data: dataSeriesMarvel });
}
