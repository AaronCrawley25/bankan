"use server";

import { db } from "@/db/drizzle";
import { boardsTable } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createBoard() {
    const boardUUID = crypto.randomUUID();

    await db.insert(boardsTable).values({
        id: boardUUID,
        title: `Board: ${boardUUID.slice(0, 8)}`,
    });

    redirect(`/boards/${boardUUID}`);
}
