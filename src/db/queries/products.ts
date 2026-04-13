import {db} from "../index";
import {products} from "../schema";


export async function getProducts() {
    return await db.select().from(products);
}