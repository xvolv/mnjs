import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{ id: string }>;
};

const page = async ({ params }: Props) => {
  const { id } = await params;

  return (
    <div>
      <span>page {id}</span>
      <Button asChild variant="outline" className="ml-4">
        <Link href="/blog">⬅️ Back</Link>
      </Button>
    </div>
  );
};

export default page;
