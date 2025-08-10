import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      outoine
      <Footer />
    </div>
  );
};

export default layout;
