import { AlanLogo } from "../logos/alan";
import { ArcLogo } from "../logos/arc";
import { CashAppLogo } from "../logos/cashapp";
import { DescriptLogo } from "../logos/descript";
import { LoomLogo } from "../logos/loom";
import { MercuryLogo } from "../logos/mercury";
import { OpenSeaLogo } from "../logos/opensea";
import { PitchLogo } from "../logos/pitch";
import { RampLogo } from "../logos/ramp";
import { RaycastLogo } from "../logos/raycast";
import { RetoolLogo } from "../logos/retool";
import { VercelLogo } from "../logos/vercel";

export const Clients = () => (
  <>
    <p className="text-center mb-12 ">
      <span className="text-lg text-primary-text md:text-lg">
        Powering the world’s best product teams.
      </span>
      <span className="text-lg text-off-white md:text-lg">
        <br /> From next-gen startups to established enterprises.
      </span>
    </p>

    <div className="flex [&_svg]:w-[16rem] flex-wrap gap-x-6 gap-y-8 md:[&_svg]:basis-[calc(16.66%-20px)] ">
      <RampLogo />
      <LoomLogo />
      <VercelLogo />
      <DescriptLogo />
      <CashAppLogo />
      <RaycastLogo />
      <MercuryLogo />
      <RetoolLogo />
      <AlanLogo />
      <ArcLogo />
      <OpenSeaLogo />
      <PitchLogo />
    </div>
  </>
);
