import {sql} from "@/lib/db";
import {NextResponse} from "next/server";

type Params = {id: string};

export async function PUT (req: Request, {params}: {params: Params}){
  const body =await req.json();

  const {name, price, quantity,category}= body;
  
  await sql`
  UPDATE products
  SET name = ${name},
  price =${price},
  quantity = ${quantity},
  category = ${category}
  WHERE id = ${params.id}
  `;
  return NextResponse.json({success:true});
}

export async function DELETE (req:Request, { params}: {params: Params}){
  await sql `
  DELETE FROM products WHERE id = ${params.id};`
  return NextResponse.json({success:true});
}