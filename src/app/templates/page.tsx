const templates = [
  {
    name: "Vintage Sports T-Shirt Prompt Template",
    description: "A template for generating prompts for vintage-style sports t-shirts.",
  },
  {
    name: "Cute Pet Illustration Prompt Template",
    description: "A template for generating prompts for cute pet illustrations.",
  },
  {
    name: "Minimal Typography Quote Template",
    description: "A template for generating prompts for minimal typography quotes.",
  },
  {
    name: "Retro Summer Vibes Prompt Template",
    description: "A template for generating prompts for retro summer-themed designs.",
  },
  {
    name: "Abstract Geometric Pattern Prompt Template",
    description: "A template for generating prompts for abstract geometric patterns.",
  },
  {
    name: "Funny Coffee Mug Quote Prompt Template",
    description: "A template for generating prompts for funny coffee mug quotes.",
  },
];

export default function Templates() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Design Templates
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Kickstart your creativity with our prompt templates.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <div key={template.name} className="bg-white shadow rounded-lg p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-medium text-gray-900">{template.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{template.description}</p>
            </div>
            <button className="mt-6 w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Use Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
