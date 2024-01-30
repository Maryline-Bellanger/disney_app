import { Animations } from "@/app/types/definitions";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
    let dataAnimationsDisney;

    try {
        dataAnimationsDisney = await sql<Animations>`SELECT tmdb_id FROM disney_animations;`;
      } catch (error) {
        return NextResponse.json({ error });
      }
     
      return NextResponse.json({ data: dataAnimationsDisney });
}