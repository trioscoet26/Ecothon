const about = () => {
 
    return (


<footer id="footer" className="relative pt-2 pb-10 overflow-hidden rotating-border bg-neutral-900 text-white">
  <div className="">
    <div className="pt-8 border-t border-neutral-800">
    <div className="container mx-auto px-6">
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-[#FFB302]">Wildlife Tracker</h3>
        <p className="text-neutral-400">
          Protecting wildlife through technology and community engagement.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-neutral-400 hover:text-[#FFB302]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a href="#" className="text-neutral-400 hover:text-[#FFB302]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a href="#" className="text-neutral-400 hover:text-[#FFB302]">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-4">
          <li>
            <a href="/" className="text-neutral-400 hover:text-[#FFB302]">
              Home
            </a>
          </li>
          <li>
            <a
              href="/wildlife-map"
              className="text-neutral-400 hover:text-[#FFB302]"
            >
              Wildlife Map
            </a>
          </li>
          <li>
            <a
              href="/protection-guide"
              className="text-neutral-400 hover:text-[#FFB302]"
            >
              Protection Guide
            </a>
          </li>
          <li>
            <a
              href="/community"
              className="text-neutral-400 hover:text-[#FFB302]"
            >
              Community
            </a>
          </li>
          <li>
            <a href="/about" className="text-neutral-400 hover:text-[#FFB302]">
              About
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-neutral-400 hover:text-[#FFB302]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-6">Resources</h4>
        <ul className="space-y-4">
          <li>
            <a
              href="/privacy"
              className="text-neutral-400 hover:text-[#FFB302]"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="/terms" className="text-neutral-400 hover:text-[#FFB302]">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="/faq" className="text-neutral-400 hover:text-[#FFB302]">
              FAQ
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="text-neutral-400 hover:text-[#FFB302]"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
        <p className="text-neutral-400 mb-4">
          Stay updated with latest wildlife activities and protection
          guidelines.
        </p>
        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:ring-2 focus:ring-[#FFB302] focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#FFB302] text-neutral-900 py-2 rounded-lg font-medium hover:bg-[#FFB302]/90 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
    <div className="border-t border-neutral-800 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="text-neutral-400 text-sm">
          © 2024 Wildlife Tracker. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-neutral-400 hover:text-[#FFB302] text-sm">
            Terms of Service
          </a>
          <a href="#" className="text-neutral-400 hover:text-[#FFB302] text-sm">
            Privacy Policy
          </a>
          <a href="#" className="text-neutral-400 hover:text-[#FFB302] text-sm">
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  </div>    </div>
  </div>

 
</footer>
    
    );
  };
  
  export default about;
  







