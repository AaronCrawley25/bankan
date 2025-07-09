"use server";

import { db } from "@/db/drizzle";
import { cardsTable } from "@/db/schema";
import { List } from "@/types/schema";
import { revalidatePath } from "next/cache";

export async function createCard(list: List) {
    const cardUUID = crypto.randomUUID();

    await db.insert(cardsTable).values({
        id: cardUUID,
        list: list.id,
        title: `Card: ${cardUUID.slice(0, 8)}`,
    });

    revalidatePath(`/boards/${list.board}`);
}
