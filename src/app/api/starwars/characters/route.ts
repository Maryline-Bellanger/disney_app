import { Characters } from "@/app/types/definitions";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
    let dataCharactersStarwars;

    try {
        dataCharactersStarwars = await sql<Characters>`SELECT * FROM starwars_characters;`;
      } catch (error) {
        return NextResponse.json({ error });
      }
     
      return NextResponse.json({ data: dataCharactersStarwars });
}