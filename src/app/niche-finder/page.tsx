"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface NicheData {
  name: string;
  competition: "Low" | "Medium" | "High";
  demand: "Low" | "Medium" | "High";
  profit: "$" | "$$" | "$$$";
}

const nicheIdeas = [
  "Funny cat coffee quotes",
  "Nurse appreciation t-shirts",
  "Retro camping designs",
  "Book lover's minimalist art",
  "Vintage floral patterns",
];

export default function NicheFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [nicheData, setNicheData] = useState<NicheData | null>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm) return;
    setNicheData({
      name: searchTerm,
      competition: "Medium",
      demand: "High",
      profit: "$$",
    });
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Niche Finder
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Discover profitable Print-on-Demand niches.
        </p>
      </div>

      <div className="mt-10">
        <form onSubmit={handleSearch} className="flex gap-x-3">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Enter keyword or niche idea"
          />
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <MagnifyingGlassIcon className="h-5 w-5" />
            <span className="ml-2">Search</span>
          </button>
        </form>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {nicheData && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">
                  {nicheData.name}
                </h3>
                <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                  <div className="bg-gray-50 rounded-lg px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Competition
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {nicheData.competition}
                    </dd>
                  </div>
                  <div className="bg-gray-50 rounded-lg px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Demand
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {nicheData.demand}
                    </dd>
                  </div>
                  <div className="bg-gray-50 rounded-lg px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Profit Potential
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-gray-900">
                      {nicheData.profit}
                    </dd>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Niche Ideas
            </h3>
            <ul className="mt-4 space-y-2">
              {nicheIdeas.map((idea) => (
                <li key={idea} className="text-gray-600">
                  - {idea}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
