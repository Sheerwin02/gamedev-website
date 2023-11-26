import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/authSlice";
import FileUploadComponent from "../file/FileUploadComponent";
import { FaCheckCircle } from "react-icons/fa";

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
  const [resume, setResume] = useState<File | null>(null);
  const [userMessage, setUserMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const authToken = useSelector(selectToken);

  const handleFileChange = (file: File | null) => {
    setResume(file);
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);

      if (!authToken) {
        console.error("Authentication token not available");
        alert("Please login to apply for this position.");
        return;
      }

      const requestBody = {
        recruitmentId: recruitment?.id || null,
        message: userMessage,
      };

      const response = await fetch("/api/recruitments/application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        setShowSuccessPopup(true);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (error) {
      console.error("Error submitting application:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (showSuccessPopup) {
      const timerId = setTimeout(() => {
        setShowSuccessPopup(false);
        onClose();
      }, 7000);

      return () => clearTimeout(timerId);
    }
  }, [showSuccessPopup, onClose]);

  return (
    <>
      {!showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div
            className="absolute inset-0 bg-gray-900 bg-opacity-75"
            onClick={onClose}
          ></div>
          <div className="relative w-full max-w-3xl p-6 mx-4 overflow-hidden bg-gray-900 rounded-lg shadow-xl transform scale-105 hover:scale-100 transition-transform text-white">
            <div className="p-4">
              <h3 className="text-3xl font-bold mb-4">
                {recruitment?.position}
              </h3>
              <p className="text-lg mb-2">{recruitment?.description}</p>
              <p className="text-lg mb-2">{recruitment?.requirements}</p>
              <p className="mb-4">Posted Date: {recruitment?.postedDate}</p>
            </div>

            <div className="p-4">
              <label className="block text-lg mb-2">
                Tell us your passion in gaming!
              </label>
              <textarea
                rows={4}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="w-full px-3 py-2 border border-gray-600 bg-gray-800 text-gray-200 rounded-lg focus:outline-none focus:border-blue-500"
                placeholder="Write here..."
              ></textarea>
              <div className="text-lg text-gray-200 mb-2">
                Upload your resume here!
              </div>
            </div>

            <FileUploadComponent
              onChange={handleFileChange}
              disabledMessage={
                "Upload Function is currently unavailable. Developer is grinding on it."
              }
            />

            <div className="flex justify-end mt-4">
              <button
                className={`px-4 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-colors mr-4 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Apply"}
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
      )}

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="relative w-full max-w-md p-6 mx-4 overflow-hidden bg-green-500 rounded-lg shadow-xl transform scale-105 hover:scale-100 transition-transform text-white">
            <FaCheckCircle className="text-6xl text-white mb-4 mx-auto" />
            <p className="text-3xl font-bold mb-4">Application Submitted!</p>
            <p className="text-lg">
              Thank you for applying. We'll review your application.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default RecruitmentDetailsPopup;
