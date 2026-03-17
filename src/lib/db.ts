import {neon} from "@neondatabase/serverless";
import postgres from "postgres";

export const db = neon(process.env.DATABASE_URL!);
export const sql = postgres(process.env.DATABASE_URL!);