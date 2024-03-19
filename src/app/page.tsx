import Navbar from "@/components/common/Navbar";
import Blog from "@/components/module/home/Blog";
import Features from "@/components/module/home/Features";
import Footer from "@/components/common/Footer";
import Main from "@/components/module/home/Main";
import Quiz from "@/components/module/home/Quiz";
import Golive from "@/components/common/Golive";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-[77px]">
        <Main />
      </div>
      <Quiz />
      <Features />
      <Blog />
      <Golive />
      <Footer />
    </main>
  );
}
