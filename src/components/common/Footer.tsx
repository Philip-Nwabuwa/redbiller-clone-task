import Image from "next/image";
import Link from "next/link";
import Icons from "./Icons";

const Footer = () => {
  const Products = [
    {
      name: "Checkout",
      href: "https://redbiller.com/products/checkout",
    },
    {
      name: "KYC",
      href: "https://redbiller.com/products/kyc",
    },
    {
      name: "POS",
      href: "https://redbiller.com/products/pos",
    },
    {
      name: "Waverlite",
      href: "https://waverlite.com/",
    },
  ];

  const Company = [
    {
      name: "Why Redbiller?",
      href: "https://redbiller.com/why-redbiller",
    },
    {
      name: "Careers",
      href: "https://redbiller.com/careers",
    },
    {
      name: "Contact",
      href: "https://redbiller.com/contact",
    },
  ];

  const Legal = [
    {
      name: "Terms & Condition",
      href: "https://redbiller.com/terms",
    },
    {
      name: "Privacy Policy",
      href: "https://redbiller.com/privacy",
    },

    {
      name: "merchant-agreement",
      href: "https://redbiller.com/merchant-agreement",
    },
  ];

  const Community = [
    {
      name: "Blog",
      href: "https://blog.redbiller.com/",
    },
    {
      name: "Community",
      href: "https://community.redbiller.com/",
    },
  ];
  return (
    <footer className="bg-[#192d34] text-white pt-[120px] pb-6">
      <div className="container grid grid-cols-1 lg:grid-cols-6 gap-10 mb-[96px]">
        <div className="col-span-2">
          <div className="flex items-center text-[1.45rem] font-bold mb-4">
            <Image
              src="https://api.jochebedapps.com/1.0/storage/photos/logos/redbiller.png"
              alt="Redbiller"
              width={40}
              height={40}
            />
            edbiller™
          </div>
          <Link
            className="text-[#babfc1] hover:text-white"
            href={"mailto:hello@redbiller.email"}
          >
            hello@redbiller.email
          </Link>
        </div>
        <div>
          <h3 className="uppercase mb-4 text-xl font-bold">Products</h3>
          {Products.map((product) => (
            <Link
              key={product.name}
              href={product.href}
              className="flex flex-col gap-4 py-2 font-bold text-[#babfc1] hover:text-white"
            >
              {product.name}
            </Link>
          ))}
        </div>
        <div>
          <h3 className="uppercase mb-4 text-xl font-bold">COMPANY</h3>
          {Company.map((company) => (
            <Link
              key={company.name}
              href={company.href}
              className="flex flex-col gap-4 py-2 font-bold text-[#babfc1] hover:text-white"
            >
              {company.name}
            </Link>
          ))}
        </div>
        <div>
          <h3 className="uppercase mb-4 text-xl font-bold">LEGAL</h3>
          {Legal.map((list) => (
            <Link
              key={list.name}
              href={list.href}
              className="flex flex-col gap-4 py-2 font-bold text-[#babfc1] hover:text-white"
            >
              {list.name}
            </Link>
          ))}
        </div>
        <div>
          <h3 className="uppercase mb-4 text-xl font-bold">COMMUNITY</h3>
          {Community.map((list) => (
            <Link
              key={list.name}
              href={list.href}
              className="flex flex-col gap-4 py-2 font-bold text-[#babfc1] hover:text-white"
            >
              {list.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="pt-6 border-t border-[#374151] flex justify-between items-center text-white">
          <p>Redbiller. © 2024 | It doesn`&apos;`t end here™</p>
          <div className="flex items-center gap-8">
            <Link href={"https://facebook.com/theRedbiller"}>
              <Icons.facebook />
            </Link>
            <Link href={"https://twitter.com/theredbiller"}>
              <Icons.twitter />
            </Link>
            <Link href={"https://instagram.com/theredbiller"}>
              <Icons.instagram />
            </Link>
            <Link href={"https://linkedin.com/company/theredbiller"}>
              <Icons.linkedin />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
