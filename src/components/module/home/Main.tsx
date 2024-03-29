import SignInBtn from "@/components/common/SignInBtn";
import Image from "next/image";
const Main = () => {
  const mainImgUrl =
    "https://redbiller.com/frontends/v3/assets/template/img/case-studies/homepage.jpg?2021-10-27";
  return (
    <div className="w-full h-[582.3px] grid lg:grid-cols-2 md:grid-rows-2">
      <Image
        className="lg:cols-span-1 lg:row-span-2 md:row-span-1 hidden md:flex h-full w-full"
        src={mainImgUrl}
        alt={"Main Image"}
        width={700}
        height={582.3}
      />
      <div className="lg:cols-span-1 lg:row-span-2 md:row-span-1 bg-[#2c3039] text-white">
        <div className="flex flex-col lg:px-16 px-4 items-start justify-center h-full mx-auto">
          <h1 className="lg:text-[3.5rem] text-[2rem] font-bold leading-[56px] lg:mb-[1.5rem] mb-4">
            Partner. Leverage. Grow.
          </h1>
          <p className="text-[1.25rem] lg:mb-[3rem] mb-6">
            Redbiller is making the Internet safer for businesses to innovate
            and expand.
          </p>
          <SignInBtn />
        </div>
      </div>
    </div>
  );
};

export default Main;
