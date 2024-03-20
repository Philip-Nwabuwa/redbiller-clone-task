import Icons from "@/components/common/Icons";
import Link from "next/link";
import Image from "next/image";

const Features = () => {
  const features1 = [
    {
      title: "Collections",
    },
    {
      title: "Disbursements",
    },
    {
      title: "Bill payments",
    },
    {
      title: "OTP-as-a-Service",
    },

    {
      title: "Cardless withdrawal",
    },
    {
      title: "KYC tools",
    },
  ];
  const features2 = [
    {
      title: "Bank account",
    },
    {
      title: "Bank transfer",
    },
    {
      title: "USSD",
    },
    {
      title: "JBAN",
    },
  ];

  const features3 = [
    {
      title: "Single recharge code",
    },
    {
      title: "Support all networks",
    },
    {
      title: "Generate in bulk",
    },
    {
      title: "Real-time reporting",
    },
  ];
  const features4 = [
    {
      title: "Fast account funding",
    },
    {
      title: "Support over 15 providers",
    },
    {
      title: "Available over the API",
    },
  ];

  const filteredFeatures = features1.slice(0, -2);
  const lastTwoFeatures = features1.slice(-2);

  const filteredFeatures2 = features2.slice(0, -2);
  const lastTwoFeatures2 = features2.slice(-2);

  const filteredFeatures3 = features3.slice(0, -2);
  const lastTwoFeatures3 = features3.slice(-2);
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:py-[120px] md:py-20 py-10">
          <div>
            <h2 className="max-w-[451px] mb-[1.5rem] lg:leading-[50px] font-bold lg:text-[2.5rem] text-[1.5rem] text-center lg:text-start">
              Most sought-after services bundled in one place
            </h2>
            <p className="max-w-[451px] mb-[1.5rem] text-[1.25rem] text-center lg:text-start text-[#565a66]">
              We excite our merchants with the seamless experience of managing
              and scaling their business from one single platform.
            </p>
            <div className="flex flex-col lg:flex-row lg:gap-10 mb-16">
              <div>
                {filteredFeatures.map((feature, index) => (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4 mb-[1.5rem] lg:text-[1.25rem] font-bold flex-row"
                  >
                    <div className="bg-[#e5f5f2] p-1 rounded-full">
                      <Icons.checkMark className="w-[12px] h-[12px]" />
                    </div>
                    {feature.title}
                  </div>
                ))}
              </div>
              <div>
                {lastTwoFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4 mb-[1.5rem] lg:text-[1.25rem] font-bold flex-row"
                  >
                    <div className="bg-[#e5f5f2] p-1 rounded-full">
                      <Icons.checkMark className="w-[12px] h-[12px]" />
                    </div>
                    {feature.title}
                  </div>
                ))}
              </div>
            </div>
            <Link
              className="flex items-center gap-2 text-[1.25rem] font-bold"
              href={"https://redbiller.com/products/kyc"}
            >
              Learn about our KYC tools. <Icons.redRight />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Icons.lamp
              className={
                "w-[451px] h-[451px] hover:opacity-75 transition-ease-in-out duration-200"
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:pb-[120px] md:pb-20 pb-10">
          <div className="lg:order-first order-last flex items-center justify-center">
            <Icons.feature2
              className={
                "w-[451px] h-[451px] hover:opacity-75 transition-ease-in-out duration-200"
              }
            />
          </div>
          <div>
            <h2 className="max-w-[451px] mb-[1.5rem] leading-[50px] font-bold lg:text-[2.5rem] text-[1.5rem] text-center lg:text-start">
              Multiple ways to accept payments
            </h2>
            <p className="max-w-[451px] mb-[1.5rem] text-[1.25rem] text-[#565a66] text-center lg:text-start">
              Multiple payment methods increases your chances of making sales
              and scaling your business, most especially when the charges are
              hardly noticeable.
            </p>
            <div className="flex flex-col lg:flex-row lg:gap-10 mb-16">
              <div>
                {filteredFeatures2.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4 mb-[1.5rem] lg:text-[1.25rem] font-bold flex-row"
                  >
                    <div className="bg-[#e5f5f2] p-1 rounded-full">
                      <Icons.checkMark className="w-[12px] h-[12px]" />
                    </div>
                    {feature.title}
                  </div>
                ))}
              </div>
              <div>
                {lastTwoFeatures2.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4 mb-[1.5rem] lg:text-[1.25rem] font-bold flex-row"
                  >
                    <div className="bg-[#e5f5f2] p-1 rounded-full">
                      <Icons.checkMark className="w-[12px] h-[12px]" />
                    </div>
                    {feature.title}
                  </div>
                ))}
              </div>
            </div>
            <Link
              className="flex items-center gap-2 text-[1.25rem] font-bold"
              href={"https://redbiller.com/products/kyc"}
            >
              Learn about our Checkout. <Icons.redRight />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:pb-[120px] md:pb-20 pb-10">
          <div>
            <h2 className="max-w-[451px] mb-[1.5rem] leading-[50px] font-bold lg:text-[2.5rem] text-[1.5rem] text-center lg:text-start">
              Airtime PIN generation
            </h2>
            <p className="max-w-[451px] mb-[1.5rem] text-[1.25rem] text-[#565a66] text-center lg:text-start ">
              In our approach to offering quality service, Airtime PIN
              generation is made available to our customers to allow them earn
              effortlessly by generating, printing and selling of airtime
              recharge cards.
            </p>
            <div className="flex flex-col lg:flex-row lg:gap-10 mb-16">
              <div>
                {filteredFeatures3.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4 mb-[1.5rem] lg:text-[1.25rem] font-bold flex-row"
                  >
                    <div className="bg-[#e5f5f2] p-1 rounded-full">
                      <Icons.checkMark className="w-[12px] h-[12px]" />
                    </div>
                    {feature.title}
                  </div>
                ))}
              </div>
              <div>
                {lastTwoFeatures3.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4 mb-[1.5rem] lg:text-[1.25rem] font-bold flex-row"
                  >
                    <div className="bg-[#e5f5f2] p-1 rounded-full">
                      <Icons.checkMark className="w-[12px] h-[12px]" />
                    </div>
                    {feature.title}
                  </div>
                ))}
              </div>
            </div>
            <Link
              className="flex items-center gap-2 text-[1.25rem] font-bold"
              href={"https://redbiller.com/products/kyc"}
            >
              Learn about airtime PIN generation. <Icons.redRight />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <Icons.feature3
              className={
                "w-[451px] h-[451px] hover:opacity-75 transition-ease-in-out duration-200"
              }
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:pb-[120px] md:pb-20 pb-10">
          <div className="relative h-[400px] flex items-center justify-center">
            <Image
              src={"https://api.live.redbiller.com/logos/betting/bet9ja.png"}
              alt={"bet9ja"}
              width={100}
              height={100}
              className="absolute bottom-10 left-10 lg:w-[120px] w-[80px] lg:h-[120px] h-[80px] hover:opacity-75 transition-ease-in-out duration-200"
            />
            <Image
              src={"https://api.live.redbiller.com/logos/betting/nairabet.png"}
              alt={"nairabet"}
              width={100}
              height={100}
              className="absolute top-20 left-[150px] lg:w-[170px] w-[130px] lg:h-[170px] h-[130px] hover:opacity-75 transition-ease-in-out duration-200"
            />
            <Image
              src={"https://api.live.redbiller.com/logos/betting/merrybet.png"}
              alt={"merrybet"}
              width={100}
              height={100}
              className="absolute bottom-0 right-10 lg:w-[100px] w-[60px] lg:h-[100px] h-[60px] hover:opacity-75 transition-ease-in-out duration-200"
            />
            <Image
              src={"https://api.live.redbiller.com/logos/betting/cloudbet.png"}
              alt={"cloudbet"}
              width={100}
              height={100}
              className="absolute lg:top-[200px] top-[250px] lg:right-[100px] right-[80px] lg:w-[120px] w-[80px] lg:h-[120px] h-[80px] hover:opacity-75 transition-ease-in-out duration-200"
            />
            <Image
              src={"https://api.live.redbiller.com/logos/betting/naijabet.png"}
              alt={"naijabet"}
              width={100}
              height={100}
              className="absolute top-10 left-0 lg:w-[120px] w-[80px] lg:h-[120px] h-[80px] hover:opacity-75 transition-ease-in-out duration-200"
            />
            <Image
              src={"https://api.live.redbiller.com/logos/betting/betlion.png"}
              alt={"betlion"}
              width={100}
              height={100}
              className="absolute bottom-[120px] right-[250px] lg:w-[60px] w-[40px] lg:h-[60px] h-[40px] hover:opacity-75 transition-ease-in-out duration-200"
            />
            <Image
              src={
                "https://api.live.redbiller.com/logos/betting/nairamillion.png"
              }
              alt={"nairamillion"}
              width={100}
              height={100}
              className="absolute top-16 right-0 w-[72px] h-[72px] hover:opacity-75 transition-ease-in-out duration-200"
            />
          </div>

          <div className="h-full flex flex-col items-start justify-center">
            <h2 className="max-w-[451px] mb-[1.5rem] leading-[50px] font-bold lg:text-[2.5rem] text-[1.5rem] text-center lg:text-start">
              Betting wallet funding
            </h2>
            <p className="max-w-[451px] mb-[1.5rem] text-[1.25rem] text-[#565a66]">
              Offer fast topup service to your customers in their preferred
              betting wallets.
            </p>
            <div className="flex flex-col lg:flex-row lg:gap-10 mb-16">
              <div>
                {features4.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4 mb-[1.5rem] lg:text-[1.25rem] font-bold flex-row"
                  >
                    <div className="bg-[#e5f5f2] p-1 rounded-full">
                      <Icons.checkMark className="w-[12px] h-[12px]" />
                    </div>
                    {feature.title}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f9fd]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:py-[120px] md:py-20 py-10">
            <div className="flex items-center justify-center lg:order-first order-last">
              <Icons.switchIcon
                className={
                  "w-[451px] h-[451px] hover:opacity-75 transition-ease-in-out duration-200"
                }
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <h2 className="max-w-[451px] mb-[1.5rem] lg:leading-[50px] font-bold lg:text-[2.5rem] text-[1.5rem] text-center lg:text-start">
                FinTechs leverage on our payment infrastructure
              </h2>
              <p className="max-w-[451px] mb-[1.5rem] text-[1.25rem] text-[#565a66] text-center lg:text-start">
                Leverage on our payment infrastructure and serve the needs of
                thousands of businesses across Africa. You`&apos;`ll have access
                to our core infrastructure and enjoy a whole lot of whitelabel
                services.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:pb-[120px] md:pb-20 pb-10">
            <div className="flex flex-col items-start justify-center">
              <h2 className="max-w-[451px] mb-[1.5rem] lg:leading-[50px] font-bold lg:text-[2.5rem] text-[1.5rem] text-center lg:text-start">
                Gaming companies make faster payouts with us
              </h2>
              <p className="max-w-[451px] mb-[1.5rem] text-[1.25rem] text-[#565a66] text-center lg:text-start">
                Make faster payouts to your customers, they love it! Our APIs
                are designed to prevent duplicate transactions, which prevents
                you from crediting the same customer twice within a specific
                time frame.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <Icons.joyStick
                className={
                  "w-[451px] h-[451px] hover:opacity-75 transition-ease-in-out duration-200"
                }
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:pb-[120px] md:pb-20 pb-10">
            <div className="flex items-center justify-center order-last lg:order-first">
              <Icons.camera
                className={
                  "w-[451px] h-[451px] hover:opacity-75 transition-ease-in-out duration-200"
                }
              />
            </div>

            <div className="flex flex-col items-start justify-center">
              <h2 className="max-w-[451px] mb-[1.5rem] lg:leading-[50px] font-bold lg:text-[2.5rem] text-[1.5rem] text-center lg:text-start">
                Money-lenders use our identity verification tools
              </h2>
              <p className="max-w-[451px] mb-[1.5rem] text-[1.25rem] text-[#565a66] text-center lg:text-start">
                Use our identity verification tools to know who your customers
                say they are before lending them money. Seamlessly disburse
                loans and{" "}
                <span className="text-[#93110f]">receive repayments</span> with
                Redbiller.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-10 lg:py-[120px] md:py-20 py-10">
          <div className="flex items-center justify-center col-span-1 row-span-2">
            <Icons.shieldIcon
              className={
                "w-[650px] h-[665px] hover:opacity-75 transition-ease-in-out duration-200"
              }
            />
          </div>

          <div className="flex flex-col items-start justify-center">
            <h2 className="max-w-[451px] mb-[1.5rem] lg:leading-[50px] font-bold lg:text-[2.5rem] text-[1.5rem] text-center lg:text-start">
              Protected by latest security technologies
            </h2>
            <p className="max-w-[451px] mb-[1.5rem] text-[1.25rem] text-[#565a66] text-center lg:text-start">
              Redbiller adheres strictly to industry standards and sometimes, go
              beyond those standards to improve your trust in us. And everyday,
              we look for ways to serve you better.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center">
            <h2 className="max-w-[451px] mb-[1.5rem] lg:leading-[50px] font-bold lg:text-[2.5rem] text-[1.5rem] text-center lg:text-start">
              Backed by strong, consistent partners
            </h2>
            <p className="max-w-[451px] mb-[1.5rem] text-[1.25rem] text-[#565a66] text-center lg:text-start">
              Redbiller partners and directly integrate with some of the most
              innovative Nigerian banks, ensuring service reliability, delivery,
              and awesome rates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
