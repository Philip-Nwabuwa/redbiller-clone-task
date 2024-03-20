import Icons from "@/components/common/Icons";
import Link from "next/link";

const Quiz = () => {
  return (
    <section className="bg-[#f8f9fd] flex flex-col items-center justify-center lg:py-[120px] md:py-20 py-10">
      <div className="container max-w-[546px] w-full flex flex-col items-center justify-center">
        <h2 className="mb-[1.5rem] lg:text-[2.5rem] text-[1.5rem] font-bold">
          Hello there!
        </h2>
        <p className="max-w-[546px] text-center mb-[1.5rem] lg:text-[1.25rem] text-[#565a66]">
          Small and large businesses use Redbiller’s platforms and APIs to
          handle their everyday payments, bills, and customer identity
          verification.
        </p>
        <Link
          className="flex items-center gap-2 lg:text-[1.25rem] text-base font-bold"
          href={"https://redbiller.com/why-redbiller"}
        >
          See why you need redbiller; take a quiz.{" "}
          <Icons.redRight className="w-8 h-8 lg:w-12 lg:h-12" />
        </Link>
      </div>
    </section>
  );
};

export default Quiz;
