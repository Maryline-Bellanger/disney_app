import { Series } from "@/app/types/definitions";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
    let dataSeriesDisney;

    try {
        dataSeriesDisney = await sql<Series>`SELECT tmdb_id FROM disney_series;`;
      } catch (error) {
        return NextResponse.json({ error });
      }
     
      return NextResponse.json({ data: dataSeriesDisney });
}