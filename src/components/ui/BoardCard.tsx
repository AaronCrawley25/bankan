import { Board } from "@/types/schema";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui-lib/card";
import { Button } from "../ui-lib/button";
import Link from "next/link";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../ui-lib/dropdown-menu";
import { CopyIcon, EllipsisVertical } from "lucide-react";
import DeleteBoardButton from "./DeleteBoardButton";

export default function BoardCard(props: { board: Board }) {
    return (
        <Card className="min-w-80">
            <CardHeader>
                <CardTitle>{props.board.title}</CardTitle>
            </CardHeader>
            <CardContent>Here is some content!</CardContent>
            <CardFooter className="*:mx-1">
                <Button variant="default" asChild>
                    <Link href={`/boards/${props.board.id}`}>View</Link>
                </Button>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline">
                            <EllipsisVertical />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem variant="default">
                            <CopyIcon /> Duplicate
                        </DropdownMenuItem>
                        <DeleteBoardButton board={props.board} />
                    </DropdownMenuContent>
                </DropdownMenu>
            </CardFooter>
        </Card>
    );
}
