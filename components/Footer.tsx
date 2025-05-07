import { ADDRESS, EMAIL, PHONE_NUMBER } from "@/lib/constants";
import Image from "next/image";
export function Footer() {
  return (
    <footer className="bg-red-800 text-white py-12 overflow-hidden">
      <div className="container mx-auto px-4 overflow-hidden max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 text-white">
              <Image src="/logo.png" alt="Logo" width={80} height={80} className="rounded-full" />
              <span className="uppercase font-serif font-bold text-xl">The Hook Up <span className="text-sm uppercase tracking-widest mt-[-2px]">University</span></span>
            </div>
            {/* <p className="text-gray-300 mb-6">
              Shaping the future of barbering through excellence in education and
              technique.
            </p> */}
            {/* <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-scarlet-500 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-scarlet-500 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
            </div> */}
          </div>

          {/* <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#programs"
                  className="text-gray-400 hover:text-scarlet-500 transition-colors"
                >
                  Barber Fundamentals
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-400 hover:text-scarlet-500 transition-colors"
                >
                  Advanced Styling
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-400 hover:text-scarlet-500 transition-colors"
                >
                  Business Essentials
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-400 hover:text-scarlet-500 transition-colors"
                >
                  Specialized Techniques
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-gray-400 hover:text-scarlet-500 transition-colors"
                >
                  Continuing Education
                </a>
              </li>
            </ul>
          </div> */}

          {/* <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-3">
              <p>{ADDRESS}</p>
              <p>{PHONE_NUMBER}</p>
              <p>{EMAIL}</p>
            </address>
          </div> */}
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-300 text-sm">
            &copy; {new Date().getFullYear()} The Hook Up University. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-scarlet-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-scarlet-500 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-scarlet-500 transition-colors">
              Accreditation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}