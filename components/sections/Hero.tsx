import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative">
      <div className="bg-gradient-to-r from-red-800 to-red-900 text-white">
        <div className="container mx-auto px-4 py-14 flex flex-col md:flex-row items-center">
          {/* Content */}
          <div className="md:w-1/2 mb-0 md:pr-12">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              Launch Your <span className="text-white font-semibold">Barbering</span> <span className="text-white">Career</span>
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl leading-relaxed text-gray-100">
              The Hook Up University provides professional certification, hands-on training, and business education to help you excel in the barbering industry.
            </p>
            <div className="mt-6 md:mt-8 grid grid-cols-2 gap-4 md:gap-5">
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-1.5 md:p-2 mr-2 md:mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm md:text-base">Professional Certification</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-1.5 md:p-2 mr-2 md:mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm md:text-base">Hands-on Training</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-1.5 md:p-2 mr-2 md:mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm md:text-base">Experienced Instructors</span>
              </div>
              <div className="flex items-center">
                <div className="bg-white/20 rounded-full p-1.5 md:p-2 mr-2 md:mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm md:text-base">Business Education</span>
              </div>
            </div>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
              <Link href="#apply">
                <Button className="bg-white hover:bg-gray-100 text-red-900 font-bold py-3 md:py-5 px-6 md:px-8 rounded-md shadow-lg w-full sm:w-auto">
                  Enroll Today
                </Button>
              </Link>
              <Link href="#programs">
                <Button variant="outline" className="hover:bg-white/10 text-white font-bold py-3 md:py-5 px-6 md:px-8 rounded-md shadow-lg w-full sm:w-auto">
                  View Programs
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="md:w-1/2 order-1 md:order-2 mt-8 md:mt-0">
            <div className="relative rounded-lg overflow-hidden shadow-2xl h-56 sm:h-64 md:h-80 lg:h-96">
              <Image
                width={1024}
                height={568}
                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80" 
                alt="Professional barber cutting client's hair"
                className="md:w-full md:h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-red-900/70 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Bar */}
      <div className="bg-white shadow-md py-8 md:py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-3">
              <div className="text-3xl font-bold text-red-700">15+</div>
              <div className="text-sm font-medium text-gray-700 mt-1">Years Experience</div>
            </div>
            <div className="p-3">
              <div className="text-3xl font-bold text-red-700">100+</div>
              <div className="text-sm font-medium text-gray-700 mt-1">Graduates</div>
            </div>
            <div className="p-3">
              <div className="text-3xl font-bold text-red-700">98%</div>
              <div className="text-sm font-medium text-gray-700 mt-1">Employment Rate</div>
            </div>
            <div className="p-3">
              <div className="text-3xl font-bold text-red-700">12</div>
              <div className="text-sm font-medium text-gray-700 mt-1">Week Programs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}