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
        <ScrollArea className="h-full rounded-md border w-80 overflow-x-auto p-5 *:my-1">
            <h2 className="text-xl">{props.list.title}</h2>
            <CreateCardButton list={props.list} />

            {cards.map((card) => {
                return <CardCard card={card} key={card.id} />;
            })}

            <ScrollBar orientation="vertical" />
        </ScrollArea>
    );
}
