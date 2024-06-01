"use client";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import SideNav from "../dashboard/_components/SideNav";

function Header() {
  const { user, isSignedIn } = useUser();
  const path = usePathname();
  return (
    !path.includes("aiform") && (
      <div className="p-3 px-5 border-b shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center gap-2">
          <div className="mt-1 lg:hidden">
          <Sheet key="left">
              <SheetTrigger>
                <Menu size={30} />
              </SheetTrigger>
              <SheetContent side="left">
                <SideNav />
              </SheetContent>
            </Sheet>
          </div>
            <Link href={"/"}>
              <Image src={"/logo.svg"} width={120} height={120} alt="logo" />
            </Link>
          </div>
          {isSignedIn ? (
            <div className="flex items-center gap-5">
              <Link href={"/dashboard"}>
                <Button variant="outline" className="rounded-lg">
                  Dashboard
                </Button>
              </Link>
              <UserButton />
            </div>
          ) : (
            <SignInButton>
              <Button>Get Started</Button>
            </SignInButton>
          )}
        </div>
      </div>
    )
  );
}

export default Header;
