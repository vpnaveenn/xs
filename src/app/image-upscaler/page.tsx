"use client";

import { useState } from "react";
import { PhotoIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";

export default function ImageUpscaler() {
  const [imageUploaded, setImageUploaded] = useState(false);
  const [upscaling, setUpscaling] = useState(false);
  const [upscaled, setUpscaled] = useState(false);

  const handleFileUpload = () => {
    setImageUploaded(true);
  };

  const handleUpscale = () => {
    setUpscaling(true);
    setTimeout(() => {
      setUpscaling(false);
      setUpscaled(true);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Image Upscaler
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Increase the resolution of your images.
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
            </div>
          </div>
        ) : (
          <div className="bg-white shadow rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Original Image
                </h3>
                <div className="mt-4 bg-gray-200 h-64 flex items-center justify-center rounded-md">
                  <p className="text-gray-500">Original Image Placeholder</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <label htmlFor="scale" className="block text-sm font-medium text-gray-700">Upscale Factor</label>
                  <select id="scale" name="scale" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                    <option>2x</option>
                    <option>4x</option>
                  </select>
                </div>
                <button
                  onClick={handleUpscale}
                  disabled={upscaling || upscaled}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {upscaling ? "Processing..." : "Upscale Image"}
                </button>
              </div>
            </div>
            {upscaled && (
              <div className="mt-8">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  Upscaled Image
                </h3>
                <div className="mt-4 bg-gray-200 h-64 flex items-center justify-center rounded-md">
                  <p className="text-gray-500">Upscaled Image Placeholder</p>
                </div>
                <button className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                  Download
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
