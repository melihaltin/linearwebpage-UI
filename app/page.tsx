import { Button, IconWrapper } from "@/components/button";
import { Clients } from "@/components/sections/clients";
import { Container } from "@/components/container";
import { Hero, HeroSubtitle, HeroTitle } from "@/components/hero";
import { HeroImage } from "@/components/hero-image";
import { ChevronRightIcon } from "@/components/icons/chevronright";
import { StarsIllustration } from "@/components/icons/stars";
import classNames from "classnames";
import Image from "next/image";
import { UnlikeAnyTool } from "@/components/sections/unlike-any-tool";
import { HomePageHero } from "@/components/sections/home-page-hore";

export default function Home() {
  return (
    <>
      {" "}
      <div className="pb-[25.6rem] md:pb-[42rem]">
        <Container className="mt-[6.4rem] animate-fade-in py-6 pt-[6.4rem] ">
          <HomePageHero />{" "}
        </Container>

        <Container>
          <Clients></Clients>
          <div
            className={classNames(
              "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden",
              "[--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4]",
              "after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
            )}
          >
            <StarsIllustration />
          </div>
        </Container>
        <Container>
          <UnlikeAnyTool />
        </Container>
      </div>
    </>
  );
}
