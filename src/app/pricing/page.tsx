import Faq from "@/components/common/Faq";
import Footer from "@/components/common/Footer";
import Golive from "@/components/common/Golive";
import Navbar from "@/components/common/Navbar";
import Main from "@/components/module/pricing/Main";
import Pricing from "@/components/module/pricing/Pricing";

const page = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Pricing />
      <Faq />
      <Golive />
      <Footer />
    </div>
  );
};

export default page;
