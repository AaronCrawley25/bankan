import { boardsTable, cardsTable, listsTable } from "@/db/schema";

export type Board = typeof boardsTable.$inferSelect;
export type List = typeof listsTable.$inferSelect;
export type Card = typeof cardsTable.$inferSelect;
