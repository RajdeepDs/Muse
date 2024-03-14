import { auth } from "@/auth";
import { Button } from "@muse/ui";
import { Session } from "next-auth/types";
import Image from "next/image";
import Link from "next/link";
import MobileNavMenu from "./mobile-nav-menu";
import { NavTabs } from "./nav-tabs";

export const navItems = [
  {
    name: "Docs",
    slug: "docs",
  },
  {
    name: "Pricing",
    slug: "pricing",
  },
  {
    name: "Blog",
    slug: "blog",
  },
  {
    name: "Changelog",
    slug: "changelog",
  },
];

export default async function NavBar(): Promise<JSX.Element> {
  const session: Session | null = await auth();

  return (
    <div className="mx-auto flex h-full items-center justify-between md:container">
      <div className="flex items-center gap-4">
        <Link href="/homepage" className="flex items-center gap-2">
          <Image src="./Logo.svg" alt="Muse" width={25} height={25} />
          <h1 className="text-md font-medium">Muse</h1>
        </Link>
        <NavTabs />
        {navItems.map((item) => (
          <Link
            href={`/${item.slug}`}
            key={item.slug}
            className="hidden space-x-3 md:flex"
          >
            <span className="">{item.name}</span>
          </Link>
        ))}
      </div>
      <div className="hidden gap-2 text-base md:flex">
        {!session ? (
          <>
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Sign Up</Button>
            </Link>
          </>
        ) : (
          <Link href="/dashboard">
            <Button size="sm">Dashboard</Button>
          </Link>
        )}
      </div>
      <MobileNavMenu session={session} />
    </div>
  );
}
