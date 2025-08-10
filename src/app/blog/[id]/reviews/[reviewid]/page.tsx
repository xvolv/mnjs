import React from "react";
type props = {
  params: Promise<{ id: string; reviewid: string }>;
};
const page = async ({ params }: props) => {
  const { id } = await params;
  const { reviewid } = await params;
  return (
    <div>
      blog {id} reviewid {reviewid}{" "}
    </div>
  );
};

export default page;
