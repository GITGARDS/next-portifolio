"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useMedia } from "react-use";
import { Logo } from "./logo";

interface linkProps {
  label: string;
  href: string;
}

const routes: linkProps[] = [
  {
    label: "Home",
    href: "/home",
  },
  {
    label: "Stack",
    href: "/stack",
  },
  {
    label: "Projetos",
    href: "/projetos",
  },
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();
  const isMobile = useMedia("(max-width: 800px)", false);

  if (isMobile) {
    return (
      <>
        <div className="w-full flex justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant={"outline"}
                size={"icon"}
                className="font-normal bg-white/10 hover:bg-white/20               
                  focus-visible:ring-offset-0 
                  focus-visible:ring-transparent
                  outline-none
                text-black
                focus:bg-white/30
                transition
                dark:text-white
                "
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side={"right"} className="px-2">
              <div className="ml-3">
                <Logo />
              </div>
              <Separator className="mt-8" />
              <nav className="flex flex-col gap-y-2 pt-6">
                {routes.map((route) => {
                  return (
                    <Link
                      key={route.href}
                      href={route.href}
                      className={cn(
                        route.href === pathName && "underline",
                        "hover:underline underline-offset-4"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {route.label}
                    </Link>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full flex justify-center">
        <nav>
          <ul className="hidden sm:inline-flex gap-x-10 ml-14">
            {routes.map((route) => {
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    route.href === pathName && "underline",
                    "hover:underline underline-offset-4"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};
