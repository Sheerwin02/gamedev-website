import React from "react";
import FileUploadComponent from "../file/FileUploadComponent";

interface Recruitment {
  id: number;
  position: string;
  description: string;
  requirements: string;
  postedDate: string;
}

interface Props {
  recruitment: Recruitment | null;
  onClose: () => void;
}

const RecruitmentDetailsPopup: React.FC<Props> = ({ recruitment, onClose }) => {
  if (!recruitment) {
    return null; // Handle the case when there's no selected recruitment
  }

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="relative w-full max-w-3xl p-6 mx-4 overflow-hidden bg-gray-900 rounded-lg shadow-xl transform scale-105 hover:scale-100 transition-transform text-white">
          <div className="p-4">
            {/* Render details of the selected recruitment */}
            <h3 className="text-3xl font-bold mb-4">{recruitment.position}</h3>
            <p className="text-lg mb-2">{recruitment.description}</p>
            <p className="text-lg mb-2">{recruitment.requirements}</p>
            <p className="mb-4">Posted Date: {recruitment.postedDate}</p>
          </div>

          {/* Add the "Describe your passion in gaming" text field */}
          <div className="p-4">
            <label className="block text-lg mb-2">
              Tell us your passion in gaming!
            </label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
              placeholder="Write here..."
            ></textarea>
            <div className="text-lg text-gray-200 mb-2">
              Upload your resume here!
            </div>
          </div>

          {/* Add the FileUploadComponent here */}
          <FileUploadComponent />

          {/* Add the "Apply" button */}
          <div className="flex justify-end mt-4">
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors mr-4"
              onClick={() => alert("Application submitted")}
            >
              Apply
            </button>

            <button
              className="px-4 py-2 text-white bg-red-500 rounded-full hover:bg-red-600 transition-colors"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecruitmentDetailsPopup;
