"use server";

import { db } from "@/db/drizzle";
import { cardsTable } from "@/db/schema";
import { Card, List } from "@/types/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createCard(list: List) {
    const cardUUID = crypto.randomUUID();

    await db.insert(cardsTable).values({
        id: cardUUID,
        list: list.id,
        title: `Card: ${cardUUID.slice(0, 8)}`,
    });

    revalidatePath(`/boards/[uuid]`, "page");
}

export async function deleteCard(card: Card) {
    await db.delete(cardsTable).where(eq(cardsTable.id, card.id));

    revalidatePath("/boards/[uuid]", "page");
}
