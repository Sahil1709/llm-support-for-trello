"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useState } from "react";

export default function Board({ board }) {

    const [currboard, setcurrBoard] = useState(board);

    // Function to handle the completion of a card
    const handleComplete = (index) => {
        const updatedBoard = { ...board };
        updatedBoard.cards[index].completed = !updatedBoard.cards[index].completed;
        setcurrBoard(updatedBoard);
    };

return (
    <>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {board.board_name}
        </h1>
        {board.cards.map((card, index) => (
            <Card className="w-[350px]" key={index}>
                <CardHeader>
                    <CardTitle style={{ textDecoration: card.completed ? "line-through" : "none" }}>{card.name}</CardTitle>
                    <CardDescription>
                        Members: {Array.isArray(card.members) ? card.members.join(", ") : card.members}
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p style={{ textDecoration: card.completed ? "line-through" : "none" }}>{card.desc}</p>
                    <Separator className="my-4" />
                    <p>Due: {new Date(card.due).toLocaleString()}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button onClick={() => handleComplete(index)}>
                        {card.completed ? "Mark Not Complete" : "Completed"}
                    </Button>
                </CardFooter>
            </Card>
        ))}
    </>
);
}
