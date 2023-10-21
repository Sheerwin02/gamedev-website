import React, { useState } from "react";

const FileUploadComponent = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
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
        />
        <label
          htmlFor="file-upload"
          className="px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors"
        >
          Select File
        </label>
        {selectedFile && (
          <div className="text-gray-700">
            Selected File: {selectedFile.name}
            <br />
            File Size: {selectedFile.size} bytes
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadComponent;
