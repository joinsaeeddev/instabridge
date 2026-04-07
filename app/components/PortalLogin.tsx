import Link from "next/link";

export default function PortalLogin() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-end">
        <Link
          href="https://console.instabridge.co.za/rs-signin"
          className="rounded bg-primary px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-primary-dark transition-colors"
        >
          Portal Login
        </Link>
      </div>
    </div>
  );
}
