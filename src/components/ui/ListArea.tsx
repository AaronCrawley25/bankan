import { db } from "@/db/drizzle";
import { cardsTable } from "@/db/schema";
import { List } from "@/types/schema";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { eq } from "drizzle-orm";
import CreateCardButton from "./CreateCardButton";
import { ScrollBar } from "../ui-lib/scroll-area";
import CardCard from "./CardCard";

export default async function ListArea(props: { list: List }) {
    const cards = await db
        .select()
        .from(cardsTable)
        .where(eq(cardsTable.list, props.list.id));

    return (
        <ScrollArea className="h-full flex flex-col rounded-md border w-80 overflow-x-auto overflow-y-auto p-5 *:my-1 mb-5">
            <h2 className="text-xl">{props.list.title}</h2>
            <CreateCardButton list={props.list} />

            <ScrollArea className="grow flex-auto my-2">
                <div className="flex flex-col gap-y-2">
                    {cards.map((card) => {
                        return <CardCard card={card} key={card.id} />;
                    })}
                </div>
            </ScrollArea>

            <ScrollBar orientation="vertical" />
        </ScrollArea>
    );
}
