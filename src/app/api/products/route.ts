import {sql} from "@/lib/db";
import {NextResponse} from "next/server";

export async function GET (){
  const products = await sql `SELECT * FROM products`;
  return NextResponse.json(products);
}

export async function POST(request: Request){
  const body = await request.json();
  
  const {name,price,quantity,category}=body;

 await sql`
    INSERT INTO products (name, price, quantity, category)
    VALUES (${name}, ${price}, ${quantity}, ${category})
  `;
  return NextResponse.json({success:true});
}