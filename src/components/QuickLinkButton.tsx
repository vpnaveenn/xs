import Link from "next/link";
import { ReactNode } from "react";

interface QuickLinkButtonProps {
  href: string;
  children: ReactNode;
}

const QuickLinkButton = ({ href, children }: QuickLinkButtonProps) => {
  return (
    <Link
      href={href}
      className="rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm hover:bg-gray-200"
    >
      {children}
    </Link>
  );
};

export default QuickLinkButton;
