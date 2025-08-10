import { notFound } from "next/navigation";
import React from "react";
type Props = {
  params: Promise<{ id: string; reviewid: string }>;
};
const Page = async ({ params }: Props) => {
  const { id, reviewid } = await params;

  if (Number(reviewid) > 100) {
    notFound(); // immediately throws and renders 404 page
  }
  return (
    <div>
      blog {id} reviewid {reviewid}
    </div>
  );
};
export default Page;