CREATE TABLE "boards" (
	"id" uuid PRIMARY KEY NOT NULL,
	"title" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "cards" (
	"id" uuid PRIMARY KEY NOT NULL,
	"list" uuid NOT NULL,
	"title" text NOT NULL,
	"description" text
);
--> statement-breakpoint
CREATE TABLE "lists" (
	"id" uuid PRIMARY KEY NOT NULL,
	"board" uuid NOT NULL,
	"title" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "cards" ADD CONSTRAINT "cards_list_lists_id_fk" FOREIGN KEY ("list") REFERENCES "public"."lists"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "lists" ADD CONSTRAINT "lists_board_boards_id_fk" FOREIGN KEY ("board") REFERENCES "public"."boards"("id") ON DELETE no action ON UPDATE no action;