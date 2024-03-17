import Icons from "@/components/common/Icons";
import Link from "next/link";

const Quiz = () => {
  return (
    <section className="bg-[#f8f9fd] flex flex-col items-center justify-center lg:py-[120px] md:py-20 py-10">
      <div className="max-w-[546px] w-full flex flex-col items-center justify-center">
        <h2 className="mb-[1.5rem] text-[2.5rem] font-bold">Hello there!</h2>
        <p className="text-center mb-[1.5rem] text-[1.25rem] text-[#565a66]">
          Small and large businesses use Redbiller’s platforms and APIs to
          handle their everyday payments, bills, and customer identity
          verification.
        </p>
        <Link
          className="flex items-center gap-2 text-[1.25rem] font-bold"
          href={"https://redbiller.com/why-redbiller"}
        >
          See why you need redbiller; take a quiz. <Icons.redRight />
        </Link>
      </div>
    </section>
  );
};

export default Quiz;
