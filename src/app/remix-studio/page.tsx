"use client";

import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";

export default function RemixStudio() {
  const [images, setImages] = useState<File[]>([]);
  const [description, setDescription] = useState("");
  const [remixPrompt, setRemixPrompt] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setImages((prevImages) => [...prevImages, ...newFiles].slice(0, 3));
    }
  };

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (images.length < 2 || !description) return;

    const imageDescriptions = images.map((img, i) => `Image ${i+1}: a mock description for ${img.name}`).join('. ');
    const combinedPrompt = `${imageDescriptions}. Remix instruction: ${description}.`;
    setRemixPrompt(combinedPrompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(remixPrompt);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Remix Studio
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Combine multiple images into a single creative prompt.
        </p>
      </div>

      <div className="mt-10">
        <form onSubmit={handleGenerate} className="bg-white shadow rounded-lg p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Upload 2-3 Images
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
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
                      accept="image/*"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500">You can select up to 3 images.</p>
              </div>
            </div>
            {images.length > 0 && (
              <ul className="mt-4 space-y-2">
                {images.map((img, i) => (
                  <li key={i} className="text-sm text-gray-600">{img.name}</li>
                ))}
              </ul>
            )}
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Describe how to remix these images
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="e.g., Combine the style of the first image with the subject of the second."
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate Remix Prompt
          </button>
        </form>

        {remixPrompt && (
          <div className="mt-8 bg-white shadow rounded-lg p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Remix Prompt</h3>
              <button onClick={copyToClipboard} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Copy Remix Prompt</button>
            </div>
            <p className="mt-2 text-sm text-gray-600 bg-gray-50 p-3 rounded-md">
              {remixPrompt}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
