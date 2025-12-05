"use client";

import { useState, useMemo } from "react";
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";

export default function ProfitCalculator() {
  const [baseCost, setBaseCost] = useState("");
  const [fees, setFees] = useState("");
  const [sellingPrice, setSellingPrice] = useState("");

  const { profitPerSale, profitMargin } = useMemo(() => {
    const cost = parseFloat(baseCost);
    const feePercent = parseFloat(fees);
    const price = parseFloat(sellingPrice);

    if (isNaN(cost) || isNaN(feePercent) || isNaN(price) || price === 0) {
      return { profitPerSale: 0, profitMargin: 0 };
    }

    const feeAmount = price * (feePercent / 100);
    const totalCost = cost + feeAmount;
    const profit = price - totalCost;
    const margin = (profit / price) * 100;

    return { profitPerSale: profit, profitMargin: margin };
  }, [baseCost, fees, sellingPrice]);

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Profit Calculator
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Estimate your profit per sale and profit margin.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg p-6 space-y-4">
          <div>
            <label htmlFor="baseCost" className="block text-sm font-medium text-gray-700">
              Base Product Cost ($)
            </label>
            <input
              type="number"
              id="baseCost"
              value={baseCost}
              onChange={(e) => setBaseCost(e.target.value)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="e.g., 10.00"
            />
          </div>
          <div>
            <label htmlFor="fees" className="block text-sm font-medium text-gray-700">
              Marketplace Fees (%)
            </label>
            <input
              type="number"
              id="fees"
              value={fees}
              onChange={(e) => setFees(e.target.value)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="e.g., 15"
            />
          </div>
          <div>
            <label htmlFor="sellingPrice" className="block text-sm font-medium text-gray-700">
              Desired Selling Price ($)
            </label>
            <input
              type="number"
              id="sellingPrice"
              value={sellingPrice}
              onChange={(e) => setSellingPrice(e.target.value)}
              className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
              placeholder="e.g., 25.00"
            />
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-6 flex flex-col justify-center">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900">Profit Per Sale</h3>
            <p className="mt-2 text-5xl font-bold text-green-600">
              ${profitPerSale.toFixed(2)}
            </p>
          </div>
          <div className="mt-8 text-center">
            <h3 className="text-lg font-medium text-gray-900">Profit Margin</h3>
            <p className="mt-2 text-5xl font-bold text-green-600">
              {profitMargin.toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
