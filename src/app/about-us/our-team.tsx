import Image from "next/image";
import { headerHeight } from "../../../components/header/header";

export const AboutUs = () => {
  return (
    <>
      <div
        className="text-4xl font-bold mt-12 mb-8 text-center"
        id="aboutus"
        style={{ scrollMarginTop: headerHeight + "px" }}
      >
        Meet Our Team
      </div>
      <div className="w-11/12 mx-auto">
        {/* Description Box */}
        <div className="w-10/12 mx-auto text-justify mb-6">
          <p className="text-gray-600">
            XXX XXX XXX is being developed by Hana Studio in Kuala Lumpur,
            Malaysia . We&apos;re a team of 3 people who, alongside making the
            game, are responsible for building these websites, cutting those
            game trailers, posting regular game updates, answering questions on
            social media and much more. Though it&apos;s a lot of work, we love
            doing it, and it&apos;s made even more enjoyable by the enthusiastic
            support we&apos;ve received from fans this whole way.
          </p>
        </div>

        {/* Profile Boxes */}
        <div className="flex justify-between space-x-2 bg-gray-100 rounded-xl shadow-xl my-8">
          {/* Profile Box 1 */}
          <div className="w-1/3 p-4 pb-12">
            <div className="text-center">
              <Image
                src={"https://images6.alphacoders.com/133/1333611.jpeg"}
                alt="Image Description"
                className="rounded-xl shadow-xl h-[250px]"
                width={500}
                height={250}
              />
            </div>
            <h3 className="text-xl font-bold mt-2 text-center">John Doe</h3>
            <h5 className="font-light mt-1 text-center">Website Developer</h5>
            <p className="text-gray-700 text-justify mt-2">
              John Doe is a passionate software engineer with a strong
              background in web development. He holds a Bachelor&apos;s degree
              in Computer Science and has been working in the tech industry for
              over 5 years. John is known for his problem-solving skills and
              attention to detail, which makes him an invaluable member of any
              development team.
            </p>
          </div>
          {/* Profile Box 2 */}
          <div className="w-1/3 p-4 ">
            <div className="text-center">
              <Image
                src={"https://images7.alphacoders.com/719/719179.png"}
                alt="Image Description"
                className="rounded-xl shadow-xl h-[250px]"
                width={500}
                height={250}
              />
            </div>
            <h3 className="text-xl font-bold mt-2 text-center">David Joe</h3>
            <h5 className="font-light mt-1 text-center">Data Analyst</h5>
            <p className="text-gray-700 text-justify mt-2">
              John Doe is a passionate software engineer with a strong
              background in web development. He holds a Bachelor&apos;s degree
              in Computer Science and has been working in the tech industry for
              over 5 years. John is known for his problem-solving skills and
              attention to detail, which makes him an invaluable member of any
              development team.
            </p>
          </div>

          {/* Profile Box 3 */}
          <div className="w-1/3 p-4">
            <div className="text-center">
              <Image
                src={"https://images3.alphacoders.com/131/1314539.png"}
                alt="Image Description"
                className="rounded-xl shadow-xl h-[250px]"
                width={500}
                height={250}
              />
            </div>
            <h3 className="text-xl font-bold mt-2 text-center">Wohn Doe</h3>
            <h5 className="font-light mt-1 text-center">Graphic Designer</h5>
            <p className="text-gray-700 text-justify mt-2">
              John Doe is a passionate software engineer with a strong
              background in web development. He holds a Bachelor&apos;s degree
              in Computer Science and has been working in the tech industry for
              over 5 years. John is known for his problem-solving skills and
              attention to detail, which makes him an invaluable member of any
              development team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
