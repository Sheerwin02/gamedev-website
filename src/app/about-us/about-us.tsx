import { IntroBox } from "./intro-box";
import { headerHeight } from "../../../components/header/header";

export const AboutGame = () => {
  return (
    <>
      <div
        className="text-4xl font-bold mb-12 text-center"
        id="aboutgame"
        style={{ scrollMarginTop: headerHeight + "px" }}
      >
        Ascend to the Peak of a Haunted Kingdom
      </div>
      <IntroBox
        isLeftText={true}
        imageUrl="https://images.squarespace-cdn.com/content/v1/6295c3471d67ad0205500ef1/9ef20d70-689b-4a2c-86ea-266dc56fc099/GIF_C5_15.gif?format=1500w"
        textArray={[
          "Captured and Taken to a Distant Land",
          "Hornet, princess-protector of Hallownest, finds herself alone in a vast, unfamiliar world.",
          "She must battle foes, seek out allies, and solve mysteries as she ascends on a deadly pilgrimage to the kingdom’s peak.",
          "Bound by her lineage and guided by echoes of her past, Hornet will adventure through mossy grottos, coral forests and shining citadels to unravel a deadly thread that threatens this strange new land.",
        ]}
      />
      <IntroBox
        isLeftText={false}
        imageUrl="https://images.squarespace-cdn.com/content/v1/6295c3471d67ad0205500ef1/1af22d0c-985d-43f3-81d7-e5784637d1a2/GIF_A_15.gif?format=1500w"
        textArray={[
          "Lethal Acrobatic Action",
          "Hornet must master a whole new suite of powerful moves to survive. She'll unleash devastating attacks, learn incredible silken abilities, and craft deadly tools in order to overcome the kingdom's challenges.",
          "Over 150 all-new foes stand between Hornet and the shining citadel crowning the kingdom. Beasts and hunters, assassins and kings, monsters and knights - Hornet must face them all with bravery and skill!",
        ]}
      />
      <IntroBox
        isLeftText={true}
        imageUrl="https://images.squarespace-cdn.com/content/v1/6295c3471d67ad0205500ef1/a24b353a-3026-4260-8417-15fe623f490a/GIF_B2_15.gif?format=1500w"
        textArray={[
          "Orb Abilities",
          "Each orb has an ability that can be unlocked, thereby turning the orb into a unique tool for you to utilize within other worlds. Use these abilities to uncover hidden pathways and objects, fire projectiles to trigger switches, and more.",
        ]}
      />
    </>
  );
};
