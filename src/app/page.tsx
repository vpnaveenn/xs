import FeatureCard from "@/components/FeatureCard";
import QuickLinkButton from "@/components/QuickLinkButton";
import {
  PaintBrushIcon,
  CodeBracketIcon,
  MagnifyingGlassIcon,
  CurrencyDollarIcon,
  PhotoIcon,
  SparklesIcon,
  WrenchScrewdriverIcon,
  CircleStackIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const features = [
    {
      icon: <PhotoIcon className="h-8 w-8 text-indigo-500" />,
      title: "Image to Prompt",
      description: "Generate detailed prompts from your images.",
    },
    {
      icon: <CircleStackIcon className="h-8 w-8 text-indigo-500" />,
      title: "Bulk Processing",
      description: "Process multiple images at once.",
    },
    {
      icon: <MagnifyingGlassIcon className="h-8 w-8 text-indigo-500" />,
      title: "Niche Finder",
      description: "Discover profitable POD niches.",
    },
    {
      icon: <CodeBracketIcon className="h-8 w-8 text-indigo-500" />,
      title: "Smart SEO",
      description: "Optimize your listings for search.",
    },
    {
      icon: <SparklesIcon className="h-8 w-8 text-indigo-500" />,
      title: "Background Remover",
      description: "Remove backgrounds from your images.",
    },
    {
      icon: <PaintBrushIcon className="h-8 w-8 text-indigo-500" />,
      title: "Image Upscaler",
      description: "Increase the resolution of your images.",
    },
    {
      icon: <WrenchScrewdriverIcon className="h-8 w-8 text-indigo-500" />,
      title: "Remix Studio",
      description: "Combine multiple images into one prompt.",
    },
    {
      icon: <CurrencyDollarIcon className="h-8 w-8 text-indigo-500" />,
      title: "Profit Calculator",
      description: "Calculate your potential profits.",
    },
  ];

  const quickLinks = [
    { name: "AI Image Generator", href: "/ai-generator" },
    { name: "Smart SEO Generator", href: "/smart-seo" },
    { name: "Niche Research", href: "/niche-finder" },
    { name: "Profit Calculator", href: "/calculator" },
    { name: "Bulk Processing", href: "/bulk-processing" },
    { name: "Design Templates", href: "/templates" },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              AI Tools for POD Creators
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Turn images and ideas into prompts, find profitable niches, and
              optimize your listings.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/ai-generator"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Start Creating
              </a>
              <a
                href="/bulk-processing"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Bulk Process <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              A suite of tools designed to help you create better designs,
              faster.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Quick Links
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Jump right into the tool you need.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {quickLinks.map((link) => (
                <QuickLinkButton key={link.name} href={link.href}>
                  {link.name}
                </QuickLinkButton>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
