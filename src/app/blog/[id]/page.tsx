import React from "react";
import Link from "next/link";
type Props = {
  params: Promise<{ id: string }>;
};
const page = async ({ params }: Props) => {
  const { id } = await params;
  return (
    <div>
      <span>page {id}</span>
      <Link href="/blog">⬅️</Link>
    </div>
  );
};

export default page;
