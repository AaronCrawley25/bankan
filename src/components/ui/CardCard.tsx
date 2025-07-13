import { Card as CardType } from "@/types/schema";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui-lib/card";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "../ui-lib/dropdown-menu";
import { Button } from "../ui-lib/button";
import { EllipsisVertical } from "lucide-react";
import DeleteCardButton from "./DeleteCardButton";

export default function CardCard(props: { card: CardType }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{props.card.title}</CardTitle>
            </CardHeader>
            <CardContent>{props.card.id}</CardContent>
            <CardFooter>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            <EllipsisVertical />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DeleteCardButton card={props.card} />
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardFooter>
        </Card>
    );
}
