import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid w-full gap-2">
        <Textarea placeholder="Type your message here." />
        <Button>Send message</Button>
      </div>
    </div>
  );
}
