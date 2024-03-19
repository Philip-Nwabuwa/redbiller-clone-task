import Link from "next/link";
import Icons from "./Icons";

const Golive = () => {
  return (
    <section className="bg-[#f8f9fd] rounded-md">
      <div className="container flex flex-col justify-center items-center py-[120px]">
        <div className="max-w-[641px] text-center mb-[75px]">
          <h3 className="mb-6 text-[2.5rem] font-bold">
            Go live in 30 minutes or less!
          </h3>
          <p className="text-xl">
            Integrate seamlessly with our test environment. No real money
            required. Keep it for when it really matters.
          </p>
        </div>
        <div className="bg-white max-w-[451px] w-full">
          <div className="py-10 px-3">
            <div className="flex gap-5">
              <p className="bg-[#93110f] text-white text-2xl w-fit h-fit px-3.5 py-1.5 rounded-full">
                1
              </p>
              <div>
                <h4 className="text-xl font-bold pb-4">Create account</h4>
                <p className="font-bold pb-4">
                  First things first: tell us about you and your business and
                  how we can reach you.
                </p>
                <Link
                  href={"https://app.redbiller.com/create"}
                  className="flex items-center gap-2"
                >
                  <p className="text-[#93120f] font-bold"> Create one now</p>
                  <Icons.redRight />
                </Link>
              </div>
            </div>
            <div className="flex gap-5 my-12">
              <p className="bg-[#93110f] text-white text-2xl w-fit h-fit px-3.5 py-1.5 rounded-full">
                2
              </p>
              <div>
                <h4 className="text-xl font-bold pb-4">Undergo KYC</h4>
                <p className="font-bold pb-4">
                  Upload your business documents and other neccessary
                  information to enable us know more about you and your
                  business.
                </p>
              </div>
            </div>
            <div className="flex gap-5">
              <p className="bg-[#93110f] text-white text-2xl w-fit h-fit px-3.5 py-1.5 rounded-full">
                3
              </p>
              <div>
                <h4 className="text-xl font-bold pb-4">Create account</h4>
                <p className="font-bold pb-4">
                  Power your business from start to finish with our wide range
                  of API resources.
                </p>
                <p className="font-bold pb-4">
                  Contact{" "}
                  <span className="text-[#93120f]">
                    developers@redbiller.email{" "}
                  </span>{" "}
                  if you need help in integrating Redbiller into your web or
                  mobile app.
                </p>
              </div>
            </div>
          </div>
          <Link
            className="flex items-center justify-center gap-2 pb-10"
            href={"https://app.redbiller.com/create"}
          >
            <p className="font-bold text-2xl text-[#93110f]">
              Create an account
            </p>
            <Icons.redRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Golive;
