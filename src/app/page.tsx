import Navbar from "@/components/common/Navbar";
import Main from "@/components/module/home/Main";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="pt-[77px]">
        <Main />
      </div>
    </main>
  );
}
