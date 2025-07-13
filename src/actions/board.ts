"use server";

import { db } from "@/db/drizzle";
import { boardsTable, cardsTable, listsTable } from "@/db/schema";
import { Board } from "@/types/schema";
import { eq, inArray } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createBoard() {
    const boardUUID = crypto.randomUUID();

    await db.insert(boardsTable).values({
        id: boardUUID,
        title: `Board: ${boardUUID.slice(0, 8)}`,
    });

    redirect(`/boards/${boardUUID}`);
}

export async function deleteBoard(board: Board) {
    // First, delete all lists and cards
    const lists = db
        .select({
            id: listsTable.id,
        })
        .from(listsTable)
        .where(eq(listsTable.board, board.id));

    await db.delete(cardsTable).where(inArray(cardsTable.list, lists));
    await db.delete(listsTable).where(eq(listsTable.board, board.id));

    // Finally, we can delete the board
    await db.delete(boardsTable).where(eq(boardsTable.id, board.id));

    revalidatePath("/boards");
}
