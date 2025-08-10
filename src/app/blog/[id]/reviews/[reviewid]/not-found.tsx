"use client";
import React from "react";
import { usePathname } from "next/navigation";

const notFound = () => {
  const pathname = usePathname();
  const blogid = pathname.split("/")[2];
  const reviewid = pathname.split("/")[4];

  return (
    <div>
      <h1>page not found from reviewid</h1>
      <p>could not find request resource</p>
      <span>
        {reviewid} - {blogid}
        <h1>
        {pathname}</h1> 

      </span>
    </div>
  );
};

export default notFound;
