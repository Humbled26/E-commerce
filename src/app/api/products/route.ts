import {sql} from "@/lib/db";
import {NextResponse} from "next/server";

export async function GET (){
  const products = await sql `SELECT * FROM products`;
  return NextResponse.json(products);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const body = await req.json();
  const {id,name,category,quantity,price} = body;

  const results = await sql`
  UPDATED products
  SET id = ${id},
  name = ${name},
  category = ${category},
  quantity = ${quantity},
  price = ${price}
  WHERE id = ${params.id}
  `;

  return NextResponse.json(results[0]);
}