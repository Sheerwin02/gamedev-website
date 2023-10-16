import Image from "next/image";

export const OurTeam = () => {
  return (
    <div className="flex">
      {/* Left Container - Paragraph */}
      <div className="w-1/2 p-4">
        <p className="text-lg font-bold">Left Container - Paragraph</p>
        <p>
          This is some text in the left container. You can add your paragraph
          content here. This is some text in the left container. You can add
          your paragraph content here. This is some text in the left container.
          You can add your paragraph content here. This is some text in the left
          container. You can add your paragraph content here.
        </p>
        <p className="mt-3">
          This is some text in the left container. You can add your paragraph
          content here. This is some text in the left container. You can add
          your paragraph content here. This is some text in the left container.
          You can add your paragraph content here. This is some text in the left
          container. You can add your paragraph content here. This is some text
          in the left container. You can add your paragraph content here.
        </p>
      </div>

      {/* Right Container - Image */}
      <div className="w-1/2 p-4">
        <Image
          src="https://assets.gamepur.com/wp-content/uploads/2020/09/09013800/among-us.jpg"
          alt="Image Description"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};
