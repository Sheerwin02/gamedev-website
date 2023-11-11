import Image from "next/image";
import { useRouter } from "next/router";

const Error: React.FC = () => {
  const router = useRouter();
  const { errorCode } = router.query;

  // Based on error code create different description text
  let descriptionText = "";
  switch (errorCode) {
    case "404":
      descriptionText = "The requested webpage cannot be found.";
      break;
    case "500":
      descriptionText = "The server encountered an error.";
      break;
    default:
      descriptionText = "The requested webpage is currently unavailable.";
      break;
  }

  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0">
        <div className="px-8 sm:px-1 py-6 sm:py-1">
          <div className="font-bold text-2xl text-white cursor-default">
            Hana Studio
          </div>
        </div>
      </div>

      <div className="bg-white p-4 shadow-lg rounded-lg text-center">
        <Image
          src="https://i.imgur.com/OQtJrvm.gif"
          alt="Error GIF"
          className="w-full h-full"
          width={500}
          height={500}
        />
        <h1 className="mt-4 text-3xl font-semibold text-gray-800 mb-4">
          Oops! Something Went Wrong
        </h1>
        <h3 className="mt-4 text-gray-600 mb-4 text-lg">
          Website Still In Progress
        </h3>
        {/* Temporary disable error description until deployment of website or other testing purpose */}
        {/* <h3 className="mt-4 text-gray-600 mb-4 text-lg">{descriptionText}</h3> */}
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-md text-lg"
          onClick={() => {
            router.push("/");
          }}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
};

export default Error;
