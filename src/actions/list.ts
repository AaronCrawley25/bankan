"use server";

import { db } from "@/db/drizzle";
import { listsTable } from "@/db/schema";
import { Board } from "@/types/schema";
import { revalidatePath } from "next/cache";

export async function createList(board: Board) {
    const listUUID = crypto.randomUUID();

    await db.insert(listsTable).values({
        id: listUUID,
        board: board.id,
        title: `List: ${listUUID.slice(0, 8)}`,
    });

    revalidatePath(`/boards/[uuid]`, "page");
}
