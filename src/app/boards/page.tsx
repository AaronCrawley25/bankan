import BoardCard from "@/components/ui/BoardCard";
import CreateBoardButton from "@/components/ui/CreateBoardButton";
import { db } from "@/db/drizzle";
import { boardsTable } from "@/db/schema";

export default async function BoardsPage() {
    const boards = await db.select().from(boardsTable);

    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-3xl">Boards</h1>
                <CreateBoardButton />
            </div>

            <div className="flex *:m-2">
                {boards.map((board) => {
                    return <BoardCard board={board} key={board.id} />;
                })}
            </div>
        </>
    );
}
