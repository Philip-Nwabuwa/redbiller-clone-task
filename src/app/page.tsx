import Navbar from "@/components/common/Navbar";
import Features from "@/components/module/home/Features";
import Main from "@/components/module/home/Main";
import Quiz from "@/components/module/home/Quiz";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-[77px]">
        <Main />
      </div>
      <Quiz />
      <Features />
    </main>
  );
}
