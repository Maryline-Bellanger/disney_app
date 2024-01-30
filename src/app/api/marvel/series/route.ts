import { Series } from "@/app/types/definitions";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
    let dataSeriesMarvel;

    try {
        dataSeriesMarvel = await sql<Series>`SELECT tmdb_id FROM marvel_series;`;
      } catch (error) {
        return NextResponse.json({ error });
      }
     
      return NextResponse.json({ data: dataSeriesMarvel });
}