// FileUploadComponent.tsx
import React, { useState, ChangeEvent } from "react";

interface FileUploadProps {
  onChange: (file: File | null) => void;
  disabledMessage: string;
}

const FileUploadComponent: React.FC<FileUploadProps> = ({
  onChange,
  disabledMessage,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDisabled, setIsDisabled] = useState(true); // Initially, disable the upload

  const maxSize = 2 * 1024 * 1024; // 2MB in bytes

  const formatSize = (bytes: number) => {
    const megabytes = bytes / (1024 * 1024);
    return megabytes.toFixed(2) + " MB";
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (isDisabled) return;

    const file = e.target.files?.[0];
    if (file && file.size <= maxSize) {
      setSelectedFile(file);
      onChange(file);
    } else {
      setSelectedFile(null);
      onChange(null);
      alert("Please select a file that is 2MB or smaller.");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center space-x-2">
        <input
          type="file"
          accept=".pdf, .doc, .docx"
          onChange={handleFileChange}
          className="hidden"
          id="file-upload"
          disabled={isDisabled}
        />
        <label
          htmlFor="file-upload"
          className={`px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors ${
            isDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isDisabled ? disabledMessage : "Select File"}
        </label>
        {selectedFile && (
          <div className="text-gray-700">
            Selected File: {selectedFile.name}
            <br />
            File Size: {formatSize(selectedFile.size)}
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadComponent;
