"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { getChatCompletion } from "@/lib/groqApi";
import Image from "next/image";

export default function Home() {
  const [response, setResponse] = useState("");
  const [project, setProject] = useState("");

  const handleClick = async () => {
    
    try {
      const r = await getChatCompletion(project);
      console.log(r);
      setResponse(r);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="grid w-full gap-2">
        <Textarea onChange={(e) => setProject(e.target.value)} placeholder="Enter project description here" />
        <Button onClick={handleClick}>Send message</Button>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p>Response:</p>
          <p>{response}</p>
          </div>
      </div>
    </div>
  );
}
