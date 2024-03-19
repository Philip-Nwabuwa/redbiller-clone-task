import Faq from "@/components/common/Faq";
import Footer from "@/components/common/Footer";
import Golive from "@/components/common/Golive";
import Navbar from "@/components/common/Navbar";
import Main from "@/components/module/why-redbiller/Main";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Faq />
      <Golive />
      <Footer />
    </div>
  );
};

export default page;
