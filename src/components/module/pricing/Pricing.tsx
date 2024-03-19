"use client";

import Icons from "@/components/common/Icons";
import Link from "next/link";
import { useState } from "react";

const features1 = [
  {
    title: "No hidden charges",
  },
  {
    title: "Zero integration fee",
  },
  {
    title: "Zero maintenance cost",
  },
];

const features2 = [
  {
    title: "Instant settlement",
  },
  {
    title: (
      <>
        Volume discounts available
        <span className="text-[#93120f]">Contact Sales</span>
      </>
    ),
  },
  {
    title: "Charges are capped at NGN 1,000",
  },
];

const Pricing = () => {
  const [amount, setAmount] = useState(1000);

  const settledAmount = amount * 0.985;
  const chargedAmount = amount * 0.015;
  return (
    <section className="bg-[#f7f8fc]">
      <div className="container pt-12 pb-[70px]">
        <div className="grid lg:grid-cols-6 grid-cols-1 gap-6">
          <div className="col-span-2 bg-white h-fit p-9 text-center rounded-md flex flex-col">
            <p className="text-[4.5rem] font-bold">1.5%</p>
            <p className="pb-12">Capped at NGN 1,000</p>
            <div>
              {features1.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 mb-[1.5rem] text-[1.25rem] flex-row"
                >
                  <div className="bg-[#e5f5f2] p-1 rounded-full">
                    <Icons.checkMark className="w-[18px] h-[18px]" />
                  </div>
                  {feature.title}
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-3">
            <div className="bg-[#2c3039] text-white p-9">
              <p className="text-2xl opacity-70 font-bold mb-4">
                Your customer pays
              </p>
              <div className="flex items-center gap-4 py-5 px-4 mb-[1.5rem] text-[1.25rem]">
                <p>NGN</p>
                <input
                  type="number"
                  className="bg-transparent w-full h-full border-none text-[1.25rem]"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                />
              </div>

              <p className="opacity-70 text-base font-bold mb-4">
                We`&apos;`ll settle you
              </p>
              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-xl flex items-center gap-2 pb-8">
                  {" "}
                  NGN{" "}
                  <span className="text-[4.5rem]">
                    {settledAmount.toFixed(2)}
                  </span>{" "}
                </p>

                <p className="flex gap-1 text-base font-bold">
                  <span className="opacity-70 ">We`&apos;`ll charge you</span>
                  <span className="text-white">
                    NGN {chargedAmount.toFixed(2)}
                  </span>
                </p>
              </div>
            </div>
            <div className="bg-white  p-9">
              <div>
                {features2.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 mb-[1.5rem] text-[1.25rem] flex-row"
                  >
                    <div className="bg-[#e5f5f2] p-1 rounded-full">
                      <Icons.checkMark className="w-[18px] h-[18px]" />
                    </div>
                    {feature.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col items-center justify-start gap-2 text-center">
            <Icons.bell className="h-12 w-12 lg:mt-[100px]" />
            <p>
              Use the calculator to see exactly how much will be settled to you
              when your customers pay you.
            </p>
          </div>
        </div>
      </div>
      <div className="container bg-[#2c3039] text-white">
        <div className="py-9 px-12">
          <h4 className="text-[1.75rem] fot-bold mb-4">Disbursement</h4>
          <div className="border border-solid border-white rounded-md p-6">
            <div className="flex items-center justify-between pr-10 py-6">
              <p className="font-bold">NGN 5,000 and below</p> <p>NGN 10</p>
            </div>
            <div className="flex items-center justify-between pr-10 py-6">
              <p className="font-bold">NGN 5,001 - NGN 50,000</p> <p>NGN 25</p>
            </div>
            <div className="flex items-center justify-between pr-10 py-6">
              <p className="font-bold">NGN 50,001 and above and below</p>{" "}
              <p>NGN 50</p>
            </div>
          </div>
          <Link
            href="mailto:sales@redbiller.email"
            className="flex items-center justify-center mt-10 gap-4"
          >
            <p className="font-bold text-xl">Contact Sales to learn more</p>{" "}
            <Icons.chat className="w-12 h-12" />{" "}
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:py-[120px] md:py-20 py-10">
          <div className="flex flex-col items-start justify-center">
            <h2 className="max-w-[451px] mb-[1.5rem] leading-[50px] font-bold text-[2.5rem]">
              Would you prefer fixed pricings instead?{" "}
            </h2>
            <p className="max-w-[451px] mb-[1.5rem] text-[1.25rem] text-[#565a66]">
              When pricings are fixed, you get to know exactly what you pay on
              every transaction, which helps you to plan better for the future.
              Besides, balancing your books gets easier!
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Icons.pecentage
              className={
                "w-[451px] h-[451px] hover:opacity-75 transition-ease-in-out duration-200"
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
