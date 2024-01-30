import { Films } from "@/app/types/definitions";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
    let dataFilmsMarvel;

    try {
        dataFilmsMarvel = await sql<Films>`SELECT tmdb_id FROM marvel_films;`;
      } catch (error) {
        return NextResponse.json({ error });
      }
     
      return NextResponse.json({ data: dataFilmsMarvel });
}