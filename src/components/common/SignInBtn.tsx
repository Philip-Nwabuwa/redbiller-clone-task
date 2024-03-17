import Link from "next/link";

const SignInBtn = () => {
  return (
    <div className="flex items-center font-bold">
      <Link href={"https://app.redbiller.com/"}>
        <button className="py-[5.5px] px-[16px] border-solid border-gray-300 border bg-white text-[#93110f] hover:text-white hover:bg-black hover:border-black rounded-s-full">
          Sign in
        </button>
      </Link>
      <Link href={"https://app.redbiller.com/create"}>
        <button className="bg-[#93110f] hover:bg-[#93110f]/80 text-white py-[6.5px] px-[16px] rounded-e-full">
          Create Account
        </button>
      </Link>
    </div>
  );
};

export default SignInBtn;
