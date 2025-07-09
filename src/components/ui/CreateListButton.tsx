"use client";

import { createList } from "@/actions/list";
import { Button } from "../ui-lib/button";
import { PlusIcon } from "lucide-react";
import { Board } from "@/types/schema";

export default function CreateListButton(props: { board: Board }) {
    return (
        <Button
            onClick={async () => {
                createList(props.board);
            }}
            variant="outline"
        >
            <PlusIcon />
            Add List
        </Button>
    );
}
