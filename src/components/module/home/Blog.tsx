import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  const blogPosts = [
    {
      title: "5 New Year's Resolutions for Your Business",
      description:
        "Here at Redbiller, we are off to a great start. All hands are on deck to bring Redbiller 2.0 to life...",
      date: "Jan 31",
      Image:
        "https://redbiller.com/frontends/v3/assets/blog/img/featured/5-new-years-resolutions-for-your-business.png",
      link: "https://redbiller.com/blog/article/5-new-years-resolutions-for-your-business",
      type: "Red Stories",
    },
    {
      title: "Our Customer Service Story",
      description:
        "At Redbiller, our support team is actually called the Customer Success Team, and this name reflects ...",
      date: "jan 31",
      Image:
        "https://redbiller.com/frontends/v3/assets/blog/img/featured/our-customer-service-story.jpeg",
      link: "https://redbiller.com/blog/article/our-customer-service-story",
      type: "biller Stories",
    },
    {
      title: "What’s your Backup Plan?",
      description:
        "Every business at the point of inception, should have a Business Continuity Plan subject to reviews....",
      date: "jan 31",
      Image:
        "https://redbiller.com/frontends/v3/assets/blog/img/featured/whats-your-backup-plan.jpeg",
      link: "https://redbiller.com/blog/article/whats-your-backup-plan",
      type: "Red Stories",
    },
  ];
  return (
    <div className="container pb-[120px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {blogPosts.map((post) => (
          <div
            key={post.title}
            className="flex flex-col items-center justify-between gap-4 mb-[1.5rem] rounded-2xl border border-solid border-[#f4f5f8] hover:shadow-2xl hover:translate-y-[-0.5rem] transition-ease-in-out duration-200"
          >
            <div>
              <Image
                src={post.Image}
                alt={post.title}
                width={100}
                height={100}
                quality={100}
                className="h-[320.15px] rounded-t-2xl w-full object-cover"
              />
              <div className="p-9">
                <h3 className="text-[1.75rem] font-bold leading-8 mb-4">
                  {post.title}
                </h3>
                <p className="text-[#555A64] font-semibold mb-4">
                  {post.description}
                </p>
                <Link className="text-[#93110f] font-bold" href={post.link}>
                  Read Story
                </Link>
              </div>
            </div>
            <div className="w-full px-9 py-4 border-t-2 border-solid border-[#fafbfd] flex justify-between items-center">
              <p
                className={`py-2 px-3 rounded-full font-bold ${
                  post.type === "Red Stories"
                    ? "bg-[#e6f5f8] text-[#17a2b7] hover:bg-[#117a8b] hover:text-white"
                    : "bg-[#fdeaec] text-[#de414e] hover:bg-[#bd212f] hover:text-white"
                }`}
              >
                {post.type}
              </p>
              <p>{post.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
