// const IntroBanner = () => {
//   return (
//     <div className="w-full h-96 relative">
//       <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images4.alphacoders.com/127/1275225.jpg')] bg-center bg-cover bg-no-repeat backdrop-blur-md opacity-40"></div>
//       <div className="relative z-10 h-full flex flex-col justify-center items-center drop-shadow-2xl">
//         <div className="opacity-100 font-mono font-bold text-center text-3xl underline underline-offset-8 cursor-default">
//           Welcome To Hana Studio Website
//         </div>
//       </div>
//     </div>
//   );
// };

export const IntroVideo = () => {
  return (
    <div className="relative w-full h-[30rem]">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover opacity-70 blur-sm"
        src={"/test-trailer.mp4"}
      >
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white cursor-default">
            Welcome To Hana Studio
          </h1>
          <button
            className="mt-7 px-8 py-4 bg-black text-white text-xl font-semibold rounded-xl hover:bg-blue-800"
            onClick={() => {
              window.open(
                "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
                "_blank"
              );
            }}
          >
            WATCH TRAILER
          </button>
        </div>
      </div>
    </div>
  );
};
