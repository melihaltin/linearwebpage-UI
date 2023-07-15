import { Button, IconWrapper } from "../button";
import { Hero, HeroSubtitle, HeroTitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronRightIcon } from "../icons/chevronright";

export const HomePageHero = () => (
  <Hero>
    <Button href="/" variant="secondary" size="small">
      Introduction Linear Insights
    </Button>
    <HeroTitle>
      Linear is a better way
      <br className="hidden md:block" /> to build products
    </HeroTitle>
    <HeroSubtitle>
      Meet the new standard for modern software development.
      <br /> Streamline issues, sprints, and product roadmaps.
    </HeroSubtitle>
    <Button href="#" variant="primary">
      Get Started
      <IconWrapper>
        <ChevronRightIcon></ChevronRightIcon>
      </IconWrapper>
    </Button>
    <HeroImage></HeroImage>
  </Hero>
);
