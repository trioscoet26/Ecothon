const about = () => {
 
    return (
        <>

        <section id="community" className="py-20 bg-neutral-900 text-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate__animated animate__fadeIn">
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-yellow-500">Community</span> Science Hub
              </h2>
              <p className="text-neutral-300 max-w-2xl mx-auto">
                Join our growing community of wildlife observers and contribute to
                conservation efforts
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Report Sighting Form */}
              <div className="animate__animated animate__fadeInLeft">
                <div className="bg-neutral-800 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    <span className="text-yellow-500">Report</span> Wildlife Sighting
                  </h3>
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Species Type
                        </label>
                        <select className="w-full px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                          <option>Select species</option>
                          <option>Mammals</option>
                          <option>Birds</option>
                          <option>Reptiles</option>
                          <option>Amphibians</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-neutral-300 mb-2">
                          Number of Animals
                        </label>
                        <input
                          type="number"
                          className="w-full px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Location
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="GPS Coordinates or Location"
                          className="flex-1 px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        />
                        <button
                          type="button"
                          className="bg-yellow-500 text-black p-2 rounded-lg"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Description
                      </label>
                      <textarea
                        rows={3}
                        className="w-full px-4 py-2 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                        defaultValue={""}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-neutral-300 mb-2">
                        Upload Photos
                      </label>
                      <div className="border-2 border-dashed border-neutral-700 rounded-lg p-4 text-center">
                        <input
                          type="file"
                          multiple=""
                          className="hidden"
                          id="photo-upload"
                        />
                        <label htmlFor="photo-upload" className="cursor-pointer">
                          <svg
                            className="w-8 h-8 mx-auto text-neutral-400 mb-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          <p className="text-neutral-500">
                            Drop photos here or click to upload
                          </p>
                        </label>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-yellow-500 text-black py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
                    >
                      Submit Report
                    </button>
                  </form>
                </div>
              </div>
              {/* Community Stats and Recent Reports */}
              <div className="animate__animated animate__fadeInRight">
                <div className="bg-neutral-800 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-6">
                    <span className="text-yellow-500">Community</span> Impact
                  </h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-neutral-700 rounded-lg">
                      <div className="text-3xl font-bold text-yellow-500">2,547</div>
                      <div className="text-neutral-300">Monthly Reports</div>
                    </div>
                    <div className="text-center p-4 bg-neutral-700 rounded-lg">
                      <div className="text-3xl font-bold text-yellow-500">156</div>
                      <div className="text-neutral-300">Species Tracked</div>
                    </div>
                    <div className="text-center p-4 bg-neutral-700 rounded-lg">
                      <div className="text-3xl font-bold text-yellow-500">12,890</div>
                      <div className="text-neutral-300">Community Members</div>
                    </div>
                    <div className="text-center p-4 bg-neutral-700 rounded-lg">
                      <div className="text-3xl font-bold text-yellow-500">89%</div>
                      <div className="text-neutral-300">Data Accuracy</div>
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-800 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6">
                    <span className="text-yellow-500">Recent</span> Reports
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-neutral-700 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">Bald Eagle Sighting</h4>
                        <span className="text-sm text-neutral-500">2 hours ago</span>
                      </div>
                      <p className="text-neutral-300 text-sm">
                        Spotted near Lake Thompson, showing nesting behavior.
                      </p>
                    </div>
                    <div className="bg-neutral-700 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">Fox Family</h4>
                        <span className="text-sm text-neutral-500">5 hours ago</span>
                      </div>
                      <p className="text-neutral-300 text-sm">
                        Group of 4 foxes seen in Cedar Woods area.
                      </p>
                    </div>
                    <div className="bg-neutral-700 p-4 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">Deer Migration</h4>
                        <span className="text-sm text-neutral-500">1 day ago</span>
                      </div>
                      <p className="text-neutral-300 text-sm">
                        Large herd moving through northern valley.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      
    
    );
  };
  
  export default about;
  