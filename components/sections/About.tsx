import Image from "next/image";

export function About() {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Images */}
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <div className="relative">
                  <Image
                    width={800}
                    height={850}
                    src="https://images.unsplash.com/photo-1512690459411-b9245aed614b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Barber school facility" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-lg overflow-hidden shadow-lg border-4 border-white hidden sm:block">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1534297635766-a262cdcb8ee4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="Student practicing barbering skills" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-6 -left-6 w-36 h-36 rounded-lg overflow-hidden shadow-lg border-4 border-white hidden sm:block">
                <Image
                  fill
                  src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80" 
                  alt="Barber tools and equipment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-1/2">
            <div className="inline-block mb-4">
              <span className="text-red-700 font-medium uppercase tracking-wider text-sm">About Us</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Building Barber Careers Since 2009</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The Hook Up University was founded to provide aspiring barbers with professional training that focuses on both technical skills and business knowledge. Our approach prepares students for successful careers in the barbering industry.
            </p>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Professional Certification</h3>
                <p className="text-gray-600">State-approved training leading to official barber licensing credentials</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Hands-on Training</h3>
                <p className="text-gray-600">Real-world practice with clients under expert supervision</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Experienced Instructors</h3>
                <p className="text-gray-600">Learn from industry professionals with decades of experience</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">Business Education</h3>
                <p className="text-gray-600">Entrepreneurship training for shop ownership and management</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}