import {
  pgTable,
  serial,
  text,
  numeric,
  integer,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

// for creating tables for products
export const products = pgTable("products", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  quantity: integer("quantity").notNull(),
  category: text("category"),
  createdAt: timestamp("created_at", { mode: "string" }).default(
    sql`CURRENT_TIMESTAMP`,
  ),
  updatedAt: timestamp("updated_at", { mode: "string" }).default(
    sql`CURRENT_TIMESTAMP`,
  ),
});

// for defining movement of the inventory, adding,deducting or adjuting
export const movementTypeEnum = pgEnum("movement_type", [
  "IN",
  "OUT",
  "ADJUSTMENT",
]);

// table creation for inventory mgt
export const inventoryMovements = pgTable("inventory_management", {
  id: serial("id").primaryKey().notNull(),
  productId: integer("product_id")
    .references(() => products.id)
    .notNull(),
  type: movementTypeEnum("type").notNull(),
  quantity: integer("quantity").notNull(),
  note: text("note"),
  createdAt: timestamp("created_at", { mode: "string" }).default(
    sql`CURRENT_TIMESTAMP`,
  ),
});

// sales table
export const sales = pgTable("sales", {
  id: serial("id").primaryKey().notNull(),
  totalAmount: numeric("total_amount").notNull(),
  paymentMethod: text("payment_method"),
  customerName: text("customer_name"),
  createdAt: timestamp("created_at", { mode: "string" }).default(
    sql`CURRENT_TIMESTAMP`,
  ),
});

// sales items table
export const salesItems = pgTable("sales_items", {
  id: serial("id").primaryKey().notNull(),
  salesId: integer("sales_id")
    .references(() => sales.id)
    .notNull(),
  productId: integer("product_id")
    .references(() => products.id)
    .notNull(),
  quantity: integer("quantity").notNull(),
  unitPrice: numeric("unit_price").notNull(),
  subTotal: numeric("sub-total").notNull(),
});

// Purchases tables
export const purchases = pgTable("purchases", {
  id: serial("id").primaryKey().notNull(),
  supplierName: text("supplier_name"),
  status: text("status").default("pending"),
  totalAmount: numeric("total_amount"),
  createdAt: timestamp("created_at", { mode: "string" }).default(
    sql`CURRENT_TIMESTAMP`,
  ),
});

// purchases items table
export const purchasesItems = pgTable("purchases_items", {
  id: serial("id").primaryKey().notNull(),
  purchasesId: integer("purchases_id")
    .references(() => purchases.id)
    .notNull(),
  productId: integer("product_id")
    .references(() => products.id)
    .notNull(),
  quantity: integer("quantity").notNull(),
  unitcost: numeric("unit_cost").notNull(),
  subTotal: numeric("sub_total").notNull(),
});

// expenses category
export const expenseCategories = pgTable("expense_categories", {
  id: serial("id").primaryKey().notNull(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at", { mode: "string" }).default(
    sql`CURRENT_TIMESTAMP`,
  ),
});

// Expenses tables
export const expenses = pgTable("expenses", {
  id: serial("id").primaryKey().notNull(),
  categoryId: integer("category_id").references(() => expenseCategories.id),
  title: text("title").notNull(),
  amount: numeric("amount").notNull(),
  note: text("note"),
  createdAt: timestamp("created_at", { mode: "string" }).default(
    sql`CURRENT_TIMESTAMP`,
  ),
});
