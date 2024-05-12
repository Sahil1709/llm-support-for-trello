"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { getChatCompletion } from "@/lib/groqApi";
import Image from "next/image";
import Board from "@/components/Board";

export default function Home() {
  const [project, setProject] = useState("");
  const [board, setBoard] = useState(null);

  const handleClick = async () => {

    try {
      const r = await getChatCompletion(project);
      console.log(r);
      setBoard(r ? JSON.parse(r) : null)
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid w-full gap-2 px-20">
      <Textarea onChange={(e) => setProject(e.target.value)} placeholder="Enter project description here" />
      <Button onClick={handleClick}>Send message</Button>
      {board && <Board board={board} />}
    </div>
  );
}
