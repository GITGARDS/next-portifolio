import { HeaderSectionRight } from "./_components/header-section-right";
import { Logo } from "./_components/logo";
import { NavBar } from "./_components/nav-bar";

export const Header = () => {
  return (
    <>
      <div className="flex w-full max-w-7xl mx-auto items-center justify-between gap-2 p-8">
        <Logo />
        <NavBar />
        <HeaderSectionRight />
      </div>
    </>
  );
};
