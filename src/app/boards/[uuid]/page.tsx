import CreateCardButton from "@/components/ui/CreateCardButton";
import CreateListButton from "@/components/ui/CreateListButton";
import { db } from "@/db/drizzle";
import { boardsTable, cardsTable, listsTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function BoardDisplayPage({
    params,
}: {
    params: Promise<{ uuid: string }>;
}) {
    const { uuid } = await params;

    // Check is valid uuid
    const uuidRegex =
        /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/;

    if (!uuidRegex.test(uuid)) {
        return "Oopsie 400 bad uuid";
    }

    const [board] = await db
        .select()
        .from(boardsTable)
        .where(eq(boardsTable.id, uuid));

    // Check that we found a board
    if (!board) {
        return notFound();
    }

    const lists = await db
        .select()
        .from(listsTable)
        .where(eq(listsTable.board, board.id));

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-3xl">{board.title}</h1>
                <CreateListButton board={board} />
            </div>
            {lists.map(async (list) => {
                const cards = await db
                    .select()
                    .from(cardsTable)
                    .where(eq(cardsTable.list, list.id));

                return (
                    <details key={list.id}>
                        <summary>{list.title}</summary>
                        {cards.map((card) => {
                            return <p key={card.id}>{card.title}</p>;
                        })}
                        <CreateCardButton
                            boardUUID={board.id}
                            listUUID={list.id}
                        />
                    </details>
                );
            })}
        </>
    );
}
