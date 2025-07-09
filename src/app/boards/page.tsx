import CreateBoardButton from "@/components/ui/CreateBoardButton";
import { db } from "@/db/drizzle";
import { boardsTable } from "@/db/schema";
import Link from "next/link";

export default async function BoardsPage() {
    const boards = await db.select().from(boardsTable);

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-3xl">Boards</h1>
                <CreateBoardButton />
            </div>
            <ul>
                {boards.map((board) => {
                    return (
                        <li key={board.id}>
                            <Link href={`/boards/${board.id}`}>
                                {board.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </>
    );
}
