"use client";
import { PlusIcon } from "lucide-react";
import { Button } from "../ui-lib/button";
import { createBoard } from "@/actions/board";

export default function CreateBoardButton() {
    return (
        <Button onClick={createBoard} variant="outline">
            <PlusIcon />
            Create
        </Button>
    );
}
