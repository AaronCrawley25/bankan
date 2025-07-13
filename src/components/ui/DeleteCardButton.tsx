"use client";

import { TrashIcon } from "lucide-react";
import { DropdownMenuItem } from "../ui-lib/dropdown-menu";
import { Card } from "@/types/schema";
import { deleteCard } from "@/actions/card";

export default function DeleteCardButton(props: { card: Card }) {
    return (
        <DropdownMenuItem
            variant="destructive"
            onClick={async () => {
                deleteCard(props.card);
            }}
        >
            <TrashIcon /> Delete
        </DropdownMenuItem>
    );
}
