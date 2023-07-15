"use-client";

import classNames from "classnames";

export const HeroImage = () => {
  return (
    <div className="mt-[12.8rem]">
      <div
        className={classNames(
          "transition-transform bg-hero-gradient border  border-transparent-white bg-white bg-opacity-[0.01] rounded-lg [transform:rotateX(25deg)]",
          "transform-none"
        )}
      >
        <img src="/img/hero.webp" alt="Hero Image" className=""></img>
      </div>{" "}
    </div>
  );
};
