import Image from "next/image";
import { OurTeam } from "./our-team";
import { IntroBox } from "./intro-box";

export const AboutUs = () => {
  return (
    <div>
      <div className="text-3xl font-bold mb-6 text-center">About us</div>
      <IntroBox />
      <div className="text-3xl font-bold  my-6 text-center">Our Team</div>
      <OurTeam />
    </div>
  );
};
