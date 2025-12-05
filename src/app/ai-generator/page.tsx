"use client";

import { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/solid";

const stylePresets = ["Vintage", "Minimal", "Bold", "Grunge", "Cute", "Cartoon"];

export default function AIGenerator() {
  const [prompt, setPrompt] = useState("");
  const [generating, setGenerating] = useState(false);
  const [images, setImages] = useState<string[]>([]);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt) return;
    setGenerating(true);
    setImages([]);
    setTimeout(() => {
      setImages(["AI Image 1", "AI Image 2", "AI Image 3", "AI Image 4"]);
      setGenerating(false);
    }, 2000);
  };

  const handlePresetClick = (preset: string) => {
    setPrompt(prev => `${prev} ${preset}`);
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          AI Image Generator
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Describe your design idea and let our AI create it for you.
        </p>
      </div>

      <div className="mt-10">
        <form onSubmit={handleGenerate} className="max-w-xl mx-auto">
          <textarea
            rows={3}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            placeholder="e.g., A cute cat astronaut floating in space"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            {stylePresets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => handlePresetClick(preset)}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200"
              >
                {preset}
              </button>
            ))}
          </div>
          <button
            type="submit"
            disabled={generating}
            className="mt-4 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            <SparklesIcon className="h-5 w-5 mr-2" />
            {generating ? "Creating your artwork..." : "Generate Image"}
          </button>
        </form>

        {(generating || images.length > 0) && (
          <div className="mt-12">
            {generating ? (
              <div className="text-center">
                <p>Generating images...</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {images.map((img, i) => (
                  <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
                    <div className="bg-gray-200 h-64 flex items-center justify-center">
                      <p className="text-gray-500">{img}</p>
                    </div>
                    <div className="p-4 flex justify-between">
                      <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        Download
                      </button>
                      <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                        Remix prompt
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
