import { OauthButton } from "@/components/auth/oauth-button";
import UserAuthForm from "@/components/auth/user-auth-form";
import Image from "next/image";
import Link from "next/link";

export default function RegisterPage(): JSX.Element {
  return (
    <div className="mx-auto flex h-dvh w-full flex-col justify-center gap-y-4 md:max-w-[450px]">
      <div className="flex flex-col gap-y-6 text-start">
        <Link href="/homepage">
          <Image src="/WhiteLogo.svg" width={35} height={35} alt="Logo" />
        </Link>
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-semibold">Create a BuildIt account</h1>
          <p className="text-grey/70">
            Already have an account?{" "}
            <Link href="/login" className="text-indigo-medium hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <UserAuthForm />
      <div className="my-4 flex w-full items-center">
        <div className="bg-grey/20 h-[1px] w-full" />
        <p className="text-grey/70 px-2 text-sm">OR</p>
        <div className="bg-grey/20 h-[1px] w-full" />
      </div>
      <div className="w-full">
        <OauthButton type="Sign up" />
      </div>
      <p className="text-grey/70 text-center text-sm font-light">
        By signing up, you agree to our{" "}
        <Link
          href="/terms"
          className="hover:text-brand text-white hover:underline"
        >
          terms,
        </Link>{" "}
        and{" "}
        <Link
          href="/privacy"
          className="hover:text-brand text-white hover:underline"
        >
          privacy policy
        </Link>
        .
      </p>
    </div>
  );
}
