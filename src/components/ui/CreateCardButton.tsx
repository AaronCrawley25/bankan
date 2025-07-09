"use client";

import { Button } from "../ui-lib/button";
import { PlusIcon } from "lucide-react";
import { createCard } from "@/actions/card";
import { List } from "@/types/schema";

export default function CreateCardButton(props: { list: List }) {
    return (
        <Button
            onClick={async () => {
                createCard(props.list);
            }}
            variant="outline"
        >
            <PlusIcon />
            Add Card
        </Button>
    );
}
