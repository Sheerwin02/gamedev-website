import Image from "next/image";
import { KeyboardEvent } from "react";

export const SearchBoxBanner = () => {
  const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // Perform search here (you can add your logic)
      alert("Performing search!");
    }
  };

  return (
    <div className="relative w-full h-[20rem]">
      <Image
        src={"https://images4.alphacoders.com/600/600528.png"}
        alt="Image Description"
        className="shadow-2xl w-full h-full object-cover object-center opacity-75"
        width={500}
        height={500}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
        <h1 className="text-2xl font-bold mb-4">Forum</h1>
        <div className="flex items-center justify-center">
          <input
            type="text"
            placeholder="Search for a specific topic here"
            className="px-6 py-4 border border-gray-300 rounded-full shadow-xl mr-2 w-1/3 active:outline-none focus:outline-none"
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>
    </div>
  );
};
