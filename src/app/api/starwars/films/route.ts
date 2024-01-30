import { Films } from "@/app/types/definitions";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
    let dataFilmsStarwars;

    try {
        dataFilmsStarwars = await sql<Films>`SELECT tmdb_id FROM starwars_films;`;
      } catch (error) {
        return NextResponse.json({ error });
      }
     
      return NextResponse.json({ data: dataFilmsStarwars });
}