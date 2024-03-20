import Link from "next/link";

const Questions = [
  {
    question: "How much does it cost to integrate Redbiller?",
    answer: "Integration is free and always will be. ",
  },
  {
    question: "How soon do I get settled?",
    answer:
      "Settlements are posted to your Nigerian bank account upon verification. ",
  },
  {
    question: "Who bears the service charge for collections?",
    answer:
      "By default, Redbiller charges the merchants. However, we'll always attach our service charge to details when notifying you of every payment you receive. ",
  },
  {
    question: "Can my company request a custom pricing?",
    answer: (
      <>
        Yes, such provision is available. It is, however, subject to some
        factors. Please{" "}
        <span style={{ color: "#93120f", fontWeight: "700" }}>
          contact Sales
        </span>{" "}
        to learn more.,
      </>
    ),
  },
  {
    question: "Can I see my wallet statements at a glance?",
    answer: (
      <>
        Yes, either from your{" "}
        <span style={{ color: "#93120f", fontWeight: "700" }}>account</span> or
        through an{" "}
        <span style={{ color: "#93120f", fontWeight: "700" }}>API call</span>.
      </>
    ),
  },
];

const Faq = () => {
  return (
    <section className="container py-[120px] flex flex-col justify-center items-center">
      <div className="max-w-[616px] w-full">
        <h3 className="lg:text-[54px] text-3xl lg:leading-[3.5rem] mb-6 font-bold text-center">
          Frequently Asked Questions
        </h3>
        <p className="text-xl text-center mb-[75px]">
          We`&apos;`ve collated a few most frequently asked questions from
          merchants.{" "}
          <Link
            href="mailto:sales@redbiller.email"
            className="text-[#93120f] font-bold"
          >
            Contact Sales
          </Link>{" "}
          if yours perhaps isn`&apos;`t included.
        </p>
        <div>
          {Questions.map((question, index) => {
            return (
              <div key={index} className="my-[40px]">
                <h4 className="font-bold lg:text-[1.75rem] text-xl mb-4">
                  {question.question}
                </h4>
                <p className="mb-6 text-xl">{question.answer}</p>
              </div>
            );
          })}
        </div>

        <p className="mt-12 bg-[#EAEDF2] px-6 py-3 rounded-md flex justify-center items-center gap-1">
          <span>
            Still have unanswered questions?{" "}
            <Link
              href="mailto:sales@redbiller.email"
              className="text-[#93120f] font-bold"
            >
              Get in touch with Sales
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
};

export default Faq;
