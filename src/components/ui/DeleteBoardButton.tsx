"use client";
import { TrashIcon } from "lucide-react";
import { DropdownMenuItem } from "../ui-lib/dropdown-menu";
import { deleteBoard } from "@/actions/board";
import { Board } from "@/types/schema";

export default function DeleteBoardButton(props: { board: Board }) {
    return (
        <DropdownMenuItem
            variant="destructive"
            onClick={async () => {
                deleteBoard(props.board);
            }}
        >
            <TrashIcon /> Delete
        </DropdownMenuItem>
    );
}
