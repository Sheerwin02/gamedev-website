import Image from "next/image";

interface TextContainerProps {
  textArray: string[];
}

// const TextContainer = () => {
//   return (
//     <div className="w-1/2 inline-block align-top px-5 ">
//       <p className="text-3xl drop-shadow-xl font-semibold">
//         Left Container - Paragraph
//       </p>
//       <p className="mt-8 text-justify">
//         This is some text in the left container. You can add your paragraph
//         content here. This is some text in the left container. You can add your
//         paragraph content here. This is some text in the left container. You can
//         add your paragraph content here. This is some text in the left
//         container. You can add your paragraph content here.
//       </p>
//       <p className="text-justify">
//         This is some text in the left container. You can add your paragraph
//         content here. This is some text in the left container. You can add your
//         paragraph content here. This is some text in the left container. You can
//         add your paragraph content here. This is some text in the left
//         container. You can add your paragraph content here. This is some text in
//         the left container. You can add your paragraph content here.
//       </p>
//     </div>
//   );
// };

const TextContainer: React.FC<TextContainerProps> = ({ textArray }) => {
  // Check if textArray has at least one element
  if (textArray.length > 0) {
    // Extract the title (first element) and content (remaining elements)
    const [title, ...content] = textArray;

    return (
      <div className="w-1/2 inline-block align-top ">
        <p className="text-3xl drop-shadow-xl font-semibold">{title}</p>
        {content.map((paragraph: string, index: number) => (
          <p className="mt-8 text-justify" key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    );
  } else {
    // Handle the case where there is no content
    return null;
  }
};

const ImageContainer = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className={"w-1/2 inline-block h-full"}>
      <Image
        src={imageUrl}
        alt="Image Description"
        className="rounded-xl shadow-xl w-full h-full"
        width={500}
        height={500}
      />
    </div>
  );
};

export const IntroBox = ({
  isLeftText,
  imageUrl,
  textArray,
}: {
  isLeftText: boolean;
  imageUrl: string;
  textArray: string[];
}) => {
  if (isLeftText) {
    return (
      <div className="flex justify-center mb-12">
        <div className="w-11/12 flex space-x-12">
          {/* <div className="w-11/12"> */}
          <TextContainer textArray={textArray} />
          <ImageContainer imageUrl={imageUrl} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex justify-center mb-12">
        <div className="w-11/12 flex space-x-12">
          {/* <div className="w-11/12"> */}
          <ImageContainer imageUrl={imageUrl} />
          <TextContainer textArray={textArray} />
        </div>
      </div>
    );
  }
};
