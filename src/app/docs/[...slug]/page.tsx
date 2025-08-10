import React from "react";
interface props {
  params: { slug?: string[] };
}

const page = ({ params }: props) => {
  const slug = params.slug ?? [];

  return (
    <div>
      <h1>Docs Page</h1>
      <p>{slug.join("/")}</p>
    </div>
  );
};

export default page;
