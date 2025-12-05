"use client";

import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

export default function ImageToPrompt() {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
      setPrompt("");
    }
  };

  const handleGeneratePrompt = () => {
    if (!image) return;
    setLoading(true);
    setTimeout(() => {
      setPrompt(
        "Detailed prompt describing colors, style, character, background, and mood. Example: a cute, fluffy cat wearing a tiny hat, sitting in a field of flowers, with a soft, dreamy background. The style is whimsical and cartoonish."
      );
      setLoading(false);
    }, 2000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Image to Prompt
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Upload an image and get a detailed prompt.
        </p>
      </div>

      <div className="mt-10">
        <div className="mt-5 md:mt-0 md:col-span-2">
          <div className="shadow sm:rounded-md sm:overflow-hidden">
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Upload your image
                </label>
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
                          accept="image/jpeg, image/png, image/webp"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">
                      JPG, PNG, WebP up to 10MB
                    </p>
                  </div>
                </div>
              </div>

              {image && (
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-700">
                    Selected file: {image.name}
                  </p>
                  <button
                    onClick={handleGeneratePrompt}
                    disabled={loading}
                    className="mt-4 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                  >
                    {loading ? "Analyzing image..." : "Generate Prompt"}
                  </button>
                </div>
              )}

              {prompt && (
                <div>
                  <label
                    htmlFor="prompt"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Generated Prompt
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="prompt"
                      name="prompt"
                      rows={4}
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                      value={prompt}
                      readOnly
                    ></textarea>
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className="mt-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Copy Prompt
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
