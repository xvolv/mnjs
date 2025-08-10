import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <>
      <h1>blog list</h1>
      <ul>
        <Link href="/blog/one">one</Link>
        <br />
        <Link href="/blog/two">two</Link>
        <br />
        <Link href="/blog/three">three</Link>
        <br />
        <Link href="/blog/four">four</Link>
        <br />
      </ul>
    </>
  );
};

export default page;
