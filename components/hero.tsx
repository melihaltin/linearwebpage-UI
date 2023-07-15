interface HeroProps {
  children: React.ReactNode;
}

interface HeroElementsProps {
  children: React.ReactNode;
}
export const HeroTitle = ({ children }: HeroElementsProps) => {
  return (
    <h1 className="text-6xl md:text-8xl my-6 text-gradient">{children}</h1>
  );
};

export const HeroSubtitle = ({ children }: HeroElementsProps) => {
  return (
    <p className="md:text-xl text-lg mb-12 text-primary-text">{children}</p>
  );
};

export const Hero = ({ children }: HeroProps) => {
  return <div className="text-center">{children}</div>;
};
