const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="/privacy" className="text-gray-500 hover:text-gray-600">
              Privacy
            </a>
            <a href="/terms" className="text-gray-500 hover:text-gray-600">
              Terms
            </a>
            <a href="/contact" className="text-gray-500 hover:text-gray-600">
              Contact
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-500">
              AI tools for Print-on-Demand creators.
            </p>
            <p className="text-center text-sm text-gray-500 mt-2">
              Built for creators who sell on POD marketplaces.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
