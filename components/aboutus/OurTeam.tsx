import Image from "next/image";
import { headerHeight } from "../header/Header";
import Slider from "react-slick";

const ProfileBox = ({
  name,
  role,
  description,
  imageUrl,
}: {
  name: string;
  role: string;
  description: string;
  imageUrl: string;
}) => {
  return (
    <div className="mx-auto p-4 pb-12 text-white bg-black">
      <div className="text-center mx-auto">
        <Image
          src={imageUrl}
          alt="Profile Picture"
          className="rounded-xl shadow-xl h-[250px] mx-auto"
          width={500}
          height={250}
        />
      </div>
      <h3 className="text-xl font-bold mt-2 text-center">{name}</h3>
      <h5 className="font-light mt-1 text-center">{role}</h5>
      <p className="text-justify mt-2">{description}</p>
    </div>
  );
};

// Carousel component using react-slick
const Carousel = () => {
  const profiles = [
    {
      name: "John Doe",
      role: "Website Developer",
      description:
        "John Doe is a passionate software engineer with a strong background in web development. He holds a Bachelor's degree in Computer Science and has been working in the tech industry for over 5 years. John is known for his problem-solving skills and attention to detail, which makes him an invaluable member of any development team.",
      imageUrl: "https://images6.alphacoders.com/133/1333611.jpeg",
    },
    {
      name: "David Joe",
      role: "Data Analyst",
      description:
        "David Doe is a passionate software engineer with a strong background in web development. He holds a Bachelor's degree in Computer Science and has been working in the tech industry for over 5 years. John is known for his problem-solving skills and attention to detail, which makes him an invaluable member of any development team.",
      imageUrl: "https://images3.alphacoders.com/131/1314539.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {profiles.map(
        (profile, index) => (
          console.log(profile), (<ProfileBox key={index} {...profile} />)
        )
      )}
    </Slider>
  );
};

export const AboutUs = () => {
  return (
    <>
      <div
        className="text-4xl font-bold mt-14 mb-8 text-center"
        id="aboutus"
        style={{ scrollMarginTop: headerHeight + "px" }}
      >
        Meet Our Team
      </div>
      <div className="w-11/12 mx-auto">
        {/* Description Box */}
        <div className="w-10/12 mx-auto text-justify mb-6">
          <p>
            Game is developed by Hana Studio in Kuala Lumpur, Malaysia.
            We&apos;re a team of 3 people who alongside making the game are
            responsible for building these websites, cutting those game
            trailers, posting regular game updates, answering questions on
            social media and much more. Though it&apos;s a lot of work, we love
            doing it, and it&apos;s made even more enjoyable by the enthusiastic
            support we&apos;ve received from fans this whole way.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-11/12">
            <Carousel />
          </div>
        </div>

        {/* Profile Boxes */}
        {/* <div className="flex justify-between space-x-2 bg-gray-100 rounded-xl shadow-xl my-8"> */}
        {/* Profile Box 1 */}

        {/* <div className="w-1/3 p-4 pb-12">
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
          </div> */}
        {/* </div> */}
      </div>
    </>
  );
};
