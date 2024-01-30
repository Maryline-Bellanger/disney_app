import { Series } from "@/app/types/definitions";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
    let dataSeriesStarwars;

    try {
        dataSeriesStarwars = await sql<Series>`SELECT tmdb_id FROM starwars_series;`;
      } catch (error) {
        return NextResponse.json({ error });
      }
     
      return NextResponse.json({ data: dataSeriesStarwars });
}