const about = () => {
 
  return (
    <section id="about" className="py-20 bg-neutral-900 text-white">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate__animated animate__fadeInLeft">
          <h2 className="text-4xl font-bold mb-6">
          <span className="text-[#FFB302]"> Our   </span>Wildlife Protection Initiative
          </h2>
          <p className="text-neutral-300 mb-8">
            We are dedicated to creating harmony between humans and wildlife
            through technology and community engagement. Our platform combines
            real-time data, machine learning, and citizen science to protect and
            preserve wildlife.
          </p>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-[#FFB302] rounded-full p-2 mt-1">
                <svg
                  className="w-4 h-4 text-neutral-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Data-Driven Protection
                </h3>
                <p className="text-neutral-400">
                  Using advanced analytics and real-time data to identify and
                  protect sensitive wildlife areas.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#FFB302] rounded-full p-2 mt-1">
                <svg
                  className="w-4 h-4 text-neutral-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Community Collaboration
                </h3>
                <p className="text-neutral-400">
                  Empowering citizens to contribute to wildlife conservation
                  through active participation.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-[#FFB302] rounded-full p-2 mt-1">
                <svg
                  className="w-4 h-4 text-neutral-900"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Research Partnership
                </h3>
                <p className="text-neutral-400">
                  Working with leading research institutions to enhance wildlife
                  protection strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="animate__animated animate__fadeInRight">
          <div className="bg-neutral-800 rounded-xl p-8">
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-neutral-700 rounded-lg">
                <div className="text-4xl font-bold text-[#FFB302] mb-2">50K+</div>
                <div className="text-neutral-300">Active Users</div>
              </div>
              <div className="text-center p-6 bg-neutral-700 rounded-lg">
                <div className="text-4xl font-bold text-[#FFB302] mb-2">100+</div>
                <div className="text-neutral-300">Protected Areas</div>
              </div>
              <div className="text-center p-6 bg-neutral-700 rounded-lg">
                <div className="text-4xl font-bold text-[#FFB302] mb-2">200+</div>
                <div className="text-neutral-300">Species Tracked</div>
              </div>
              <div className="text-center p-6 bg-neutral-700 rounded-lg">
                <div className="text-4xl font-bold text-[#FFB302] mb-2">25K</div>
                <div className="text-neutral-300">Monthly Reports</div>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Our Partners</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-neutral-700 rounded-lg">
                  <p className="font-medium">Wildlife Research Institute</p>
                </div>
                <div className="p-4 bg-neutral-700 rounded-lg">
                  <p className="font-medium">Conservation Society</p>
                </div>
                <div className="p-4 bg-neutral-700 rounded-lg">
                  <p className="font-medium">National Parks Service</p>
                </div>
                <div className="p-4 bg-neutral-700 rounded-lg">
                  <p className="font-medium">Environmental Protection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default about;
