const Quiz = [
  {
    Topic: "Collections",
    answer:
      "Multiple payment methods increases your chances of making sales and scaling your business, most especially when the charges are hardly noticeable.",
  },
  {
    Topic: "Disbursements",
    answer:
      "Make faster payouts to your customers, they love it! Our APIs are designed to prevent duplicate transactions, which prevents you from crediting the same customer twice within a specific time frame.",
  },
  {
    Topic: "Integration",
    answer:
      "Integrate seamlessly with our test environment. No real money required. Keep it for when it really matters.",
  },
  {
    Topic: "Pricing",
    answer:
      "Knowing exactly what you pay on every transaction helps you to plan better for the future. Besides, balancing your books gets easier!",
  },
  {
    Topic: "Security",
    answer:
      "Redbiller adheres strictly to industry standards and sometimes, go beyond those standards to improve your trust in us. And everyday, we look for ways to serve you better.",
  },
  {
    Topic: "Settlement",
    answer:
      "Because we understand that you need funds to immediately process orders, Redbiller issues instant settlements, making funds available for withdrawal at the instant they were paid.",
  },
  {
    Topic: "Verification",
    answer: `Redbiller helps you separate the "wheats from the weeds", which ultimately makes you sleep soundly at night while putting your business on autopilot.`,
  },
];

const Main = () => {
  return (
    <section className="bg-[#f8f9fd]">
      <div className="container flex flex-col py-[120px]">
        <h1 className="font-bold text-[2.5rem] mb-6">Why use Redbiller?</h1>
        <p className="text-xl mb-6 w-full max-w-[736px]">
          Small and large businesses use Redbiller’s platforms and APIs to
          handle their everyday payments, bills, and customer identity
          verification.
        </p>
        <p className="text-xl">
          Take a quiz below on your most preferred topics.
        </p>
        <div className="py-12 ">
          <div className="w-full max-w-[736px] h-[1px] bg-[#f2f5f9]"></div>
        </div>
        <div className="w-full max-w-[736px] flex flex-col gap-6">
          {Quiz.map((item, index) => (
            <div
              className="bg-white border border-solid border-[#EAEDF2] rounded-md p-9 hover:shadow-2xl hover:translate-y-[-0.5rem] transition-ease-in-out duration-200"
              key={index}
            >
              <h2 className="font-bold text-[1.5rem] mb-4">{item.Topic}</h2>
              <p className="text-xl">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
