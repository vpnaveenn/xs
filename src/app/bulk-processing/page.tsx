"use client";

import { useState } from "react";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

type FileStatus = "Pending" | "Processing" | "Done";

interface ProcessedFile {
  file: File;
  status: FileStatus;
  prompt: string;
}

export default function BulkProcessing() {
  const [files, setFiles] = useState<ProcessedFile[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        file,
        status: "Pending" as FileStatus,
        prompt: "",
      }));
      setFiles(newFiles);
    }
  };

  const startProcessing = async () => {
    setIsProcessing(true);
    for (let i = 0; i < files.length; i++) {
      setFiles((prevFiles) =>
        prevFiles.map((f, index) =>
          index === i ? { ...f, status: "Processing" } : f
        )
      );
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate processing
      setFiles((prevFiles) =>
        prevFiles.map((f, index) =>
          index === i
            ? {
                ...f,
                status: "Done",
                prompt: `Generated prompt for ${f.file.name}`,
              }
            : f
        )
      );
    }
    setIsProcessing(false);
  };

  const downloadCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      "filename,prompt\n" +
      files
        .map((f) => `${f.file.name},"${f.prompt.replace(/"/g, '""')}"`)
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "prompts.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Bulk Processing
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Process multiple images at once.
        </p>
      </div>

      <div className="mt-10">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload your images
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <ArrowUpTrayIcon className="mx-auto h-12 w-12 text-gray-400" />
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload files</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          multiple
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {files.length > 0 && (
                <div>
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Selected Files
                  </h3>
                  <ul className="mt-4 border border-gray-200 rounded-md divide-y divide-gray-200">
                    {files.map((f, i) => (
                      <li
                        key={i}
                        className="pl-3 pr-4 py-3 flex items-center justify-between text-sm"
                      >
                        <div className="w-0 flex-1 flex items-center">
                          <span className="ml-2 flex-1 w-0 truncate">
                            {f.file.name}
                          </span>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              f.status === "Pending"
                                ? "bg-yellow-100 text-yellow-800"
                                : f.status === "Processing"
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {f.status}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex justify-end space-x-4">
                    <button
                      onClick={startProcessing}
                      disabled={isProcessing}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                    >
                      {isProcessing ? "Processing..." : "Start Bulk Processing"}
                    </button>
                    <button
                      onClick={downloadCSV}
                      disabled={files.some((f) => f.status !== "Done")}
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50"
                    >
                      Download All Prompts (CSV)
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
