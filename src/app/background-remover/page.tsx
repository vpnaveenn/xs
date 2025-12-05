"use client";

import { useState } from "react";
import { PhotoIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function BackgroundRemover() {
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleFileUpload = () => {
    setImageUploaded(true);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Background Remover
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Remove the background from any image.
        </p>
      </div>

      <div className="mt-10">
        {!imageUploaded ? (
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileUpload}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Original Image
              </h3>
              <div className="mt-4 bg-gray-200 h-64 flex items-center justify-center rounded-md">
                <p className="text-gray-500">Original Image Placeholder</p>
              </div>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">
                Background Removed
              </h3>
              <div className="mt-4 bg-gray-200 h-64 flex items-center justify-center rounded-md">
                <p className="text-gray-500">
                  Background Removed Placeholder
                </p>
              </div>
              <button className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                Download PNG
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
