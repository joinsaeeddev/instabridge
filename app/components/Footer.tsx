import Link from "next/link";
import Image from "next/image";

const footerSections = [
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help-center" },
      { label: "FAQs", href: "/faqs" },
      { label: "System Status", href: "/system-status" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms", href: "/terms" },
      { label: "Privacy", href: "/privacy" },
      { label: "Security", href: "/security" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 md:py-14">
        <div className="flex flex-col md:flex-row gap-8 md:gap-10">
          {/* Brand — 1/2 */}
          <div className="md:w-1/2">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/whiteLogo.png"
                alt="Instabridge logo"
                width={140}
                height={40}
                style={{
                  width: "auto",
                  height: "auto",
                  maxWidth: "140px",
                }}
              />
            </Link>
            <p className="text-sm text-muted leading-relaxed">
              &copy; {new Date().getFullYear()} Instabridge South Africa. All
              rights reserved.
            </p>
          </div>

          {/* Link Sections — 1/2, all three in one row */}
          <div className="md:w-1/2 grid grid-cols-3 gap-6">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-sm font-semibold text-white mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2.5">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
