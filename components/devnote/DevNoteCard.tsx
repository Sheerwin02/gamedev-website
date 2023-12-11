import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaLock } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface DevNoteCardProps {
  title: string;
  content: string;
  authorName: string;
  version: string;
  visibilityLevel: string;
  accessControl: string;
  tags: string;
  postedDate: Date;
  onFilter?: (filterKey: string, filterValue: string) => void;
}

const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const DevNoteCard: React.FC<DevNoteCardProps> = ({
  title,
  content,
  authorName,
  version,
  visibilityLevel,
  accessControl,
  tags,
  postedDate,
  onFilter = () => {},
}) => {
  const handleVisibilityClick = () => {
    onFilter("visibility", visibilityLevel === "public" ? "" : "public");
  };

  const handleAccessControlClick = () => {
    onFilter("accessControl", accessControl === "public" ? "" : "public");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-md shadow-md p-6 mb-4"
    >
      <h2 className="text-2xl font-semibold mb-4 text-purple-800">{title}</h2>
      <ReactMarkdown className="text-gray-600 mb-2" remarkPlugins={[gfm]}>
        {content}
      </ReactMarkdown>

      <div className="flex flex-wrap items-center mb-4">
        <span className="text-sm text-gray-500 mr-2">{`Posted by ${authorName}`}</span>
        <span className="text-sm text-gray-500 mr-2">{`Version ${version}`}</span>
      </div>

      <div className="flex items-center mb-4">
        <FaEye
          className={`text-gray-500 mr-2 cursor-pointer ${
            visibilityLevel === "public" ? "active" : ""
          }`}
          onClick={handleVisibilityClick}
        />
        <span
          className={`text-sm text-gray-500 cursor-pointer tooltip ${
            visibilityLevel === "public" ? "active" : ""
          }`}
          onClick={handleVisibilityClick}
        >
          {`Audience: ${capitalizeFirstLetter(visibilityLevel)}`}
          <span className="tooltiptext">Additional audience details here</span>
        </span>
      </div>

      <div className="flex items-center mb-4">
        <FaLock
          className={`text-gray-500 mr-2 cursor-pointer ${
            accessControl === "public" ? "active" : ""
          }`}
          onClick={handleAccessControlClick}
        />
        <span
          className={`text-sm text-gray-500 cursor-pointer tooltip ${
            accessControl === "public" ? "active" : ""
          }`}
          onClick={handleAccessControlClick}
        >
          {`Access Control: ${capitalizeFirstLetter(accessControl)}`}
          <span className="tooltiptext">
            Additional access control details here
          </span>
        </span>
      </div>

      <div className="flex flex-wrap">
        {tags.split(",").map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
          >
            {tag.trim()}
          </span>
        ))}
      </div>

      <p className="text-sm text-gray-500 mt-4">
        {`Posted on ${new Date(postedDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`}
      </p>
    </motion.div>
  );
};

export default DevNoteCard;
