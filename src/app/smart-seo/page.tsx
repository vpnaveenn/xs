"use client";

import { useState } from "react";

interface SEOContent {
  title: string;
  description: string;
  tags: string;
}

export default function SmartSEO() {
  const [productType, setProductType] = useState("T-shirt");
  const [mainTheme, setMainTheme] = useState("");
  const [tone, setTone] = useState("Funny");
  const [seoContent, setSeoContent] = useState<SEOContent | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mainTheme) return;
    setSeoContent({
      title: `${tone} ${mainTheme} ${productType} - POD Design`,
      description: `A high-quality ${productType} featuring a ${tone} design about ${mainTheme}. Perfect for anyone who loves ${mainTheme}.`,
      tags:
        `${mainTheme}, ${tone}, ${productType}, pod, print on demand, gift, cute, minimalist, edgy, professional, ` +
        `design, art, illustration, vector, graphic`,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Smart SEO Generator
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Generate SEO-optimized titles, descriptions, and tags.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <form onSubmit={handleGenerate} className="space-y-6">
          <div>
            <label
              htmlFor="productType"
              className="block text-sm font-medium text-gray-700"
            >
              Product Type
            </label>
            <select
              id="productType"
              name="productType"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option>T-shirt</option>
              <option>Mug</option>
              <option>Poster</option>
              <option>Hoodie</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="mainTheme"
              className="block text-sm font-medium text-gray-700"
            >
              Main Theme/Keyword
            </label>
            <input
              type="text"
              id="mainTheme"
              name="mainTheme"
              value={mainTheme}
              onChange={(e) => setMainTheme(e.target.value)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="tone"
              className="block text-sm font-medium text-gray-700"
            >
              Tone
            </label>
            <select
              id="tone"
              name="tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            >
              <option>Funny</option>
              <option>Cute</option>
              <option>Minimal</option>
              <option>Edgy</option>
              <option>Professional</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate SEO Content
          </button>
        </form>

        {seoContent && (
          <div className="bg-white shadow rounded-lg p-6 space-y-4">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Title</h3>
                <button onClick={() => copyToClipboard(seoContent.title)} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Copy</button>
              </div>
              <p className="mt-1 text-sm text-gray-600 bg-gray-50 p-2 rounded-md">{seoContent.title}</p>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Description</h3>
                <button onClick={() => copyToClipboard(seoContent.description)} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Copy</button>
              </div>
              <p className="mt-1 text-sm text-gray-600 bg-gray-50 p-2 rounded-md">{seoContent.description}</p>
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Tags</h3>
                <button onClick={() => copyToClipboard(seoContent.tags)} className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Copy</button>
              </div>
              <p className="mt-1 text-sm text-gray-600 bg-gray-50 p-2 rounded-md">{seoContent.tags}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
