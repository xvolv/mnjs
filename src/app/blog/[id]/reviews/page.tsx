import React from "react";
import Link from "next/link";
type props = {
  params: Promise<{
    id: string;
  }>;
};
const page = async ({ params }: props) => {
  const { id } = await params;
  return (
    <div>
      <ul>
        <Link href={`/blog/${id}/reviews/one`}>blog {id} review one ?</Link>
        <br />
        <Link href={`/blog/${id}/reviews/two`}>two {id} review two ?</Link>
        <br />
        <Link href={`/blog/${id}/reviews/three`}>three {id} review 3? </Link>
        <br />
      </ul>
    </div>
  );
};
export default page;
