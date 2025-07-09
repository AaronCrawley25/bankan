import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const boardsTable = pgTable("boards", {
    id: uuid().primaryKey(),
    title: text().notNull(),
});

export const listsTable = pgTable("lists", {
    id: uuid().primaryKey(),
    board: uuid()
        .references(() => boardsTable.id)
        .notNull(),
    title: text().notNull(),
});

export const cardsTable = pgTable("cards", {
    id: uuid().primaryKey(),
    list: uuid()
        .references(() => listsTable.id)
        .notNull(),
    title: text().notNull(),
    description: text(),
});
