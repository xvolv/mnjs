import React from "react";
interface props {
  params: Promise<{ slug?: string[] }>;
}

const page = async ({ params }: props) => {
  const resolvedParams = await params;
  const slug = resolvedParams.slug ?? [];

  return (
    <div>
      <h1>Docs Page</h1>

      {slug.length !== 0 && <p>{slug.join("/")}</p>}
    </div>
  );
};

export default page;
