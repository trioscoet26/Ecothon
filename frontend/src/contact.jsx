const about = () => {
 
    return (
<>
 
  <section id="contact" className="py-20 bg-neutral-900 text-white">
    <div className="container mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="animate__animated animate__fadeInLeft">
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-yellow-500">Get</span> in Touch
          </h2>
          <p className="text-neutral-300 mb-8">
            Have questions about wildlife protection or want to collaborate?
            Reach out to our team.
          </p>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Subject
              </label>
              <select className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent">
                <option>General Inquiry</option>
                <option>Report Technical Issue</option>
                <option>Partnership Opportunity</option>
                <option>Wildlife Emergency</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-300 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-neutral-700 bg-neutral-800 text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                defaultValue={""}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-black py-3 rounded-lg font-medium hover:bg-yellow-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        <div className="animate__animated animate__fadeInRight">
          <div className="bg-neutral-800 rounded-xl p-8 h-full">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-yellow-500">Emergency</span> Contacts
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-red-100 p-2 rounded-lg">
                      <svg
                        className="w-6 h-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">Wildlife Emergency</h4>
                      <p className="text-neutral-300">1-800-WILDLIFE</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-yellow-500">Office</span> Location
                </h3>
                <div className="space-y-2 text-neutral-300">
                  <p>123 Conservation Way</p>
                  <p>Wildlife District</p>
                  <p>Nature Valley, NT 12345</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-yellow-500">Connect</span> With Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-neutral-700 p-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-neutral-700 p-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-neutral-700 p-2 rounded-lg hover:bg-yellow-500 hover:text-black transition-colors"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">
                  <span className="text-yellow-500">Operating</span> Hours
                </h3>
                <div className="space-y-2 text-neutral-300">
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Emergency Support: 24/7</p>
                </div>
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
  