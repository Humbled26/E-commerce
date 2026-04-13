-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE "products" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"price" numeric NOT NULL,
	"quantity" integer NOT NULL,
	"category" text,
	"created_at" timestamp DEFAULT CURRENT_TIMESTAMP
);

*/