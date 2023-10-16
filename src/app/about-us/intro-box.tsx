export const IntroBox = () => {
  return (
    <div className="flex">
      <div className="w-1/3 h-40 flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 mx-2">
        <div className="rounded p-4 shadow-lg">
          <h2 className="text-xl font-bold mb-2 border-b-2 border-gray-300">
            Container 1
          </h2>
          <p>Content</p>
        </div>
        {/* <p className="text-white text-lg font-bold">Container 1</p> */}
      </div>
      <div className="w-1/3 h-40 flex items-center justify-center bg-gradient-to-br from-green-500 via-yellow-500 to-orange-500 mx-2">
        <p className="text-white text-lg font-bold">Container 2</p>
      </div>
      <div className="w-1/3 h-40 flex items-center justify-center bg-gradient-to-br from-indigo-500 via-red-500 to-yellow-500 mx-2">
        <p className="text-white text-lg font-bold">Container 3</p>
      </div>
    </div>
  );
};
