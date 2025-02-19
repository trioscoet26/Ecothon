import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import 'nouislider/distribute/nouislider.css';
import Map from "./map";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useEffect } from "react";

const Hero = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCity, setSelectedCity] = useState(null); // Store the selected city
  const [cityData, setCityData] = useState(null); // Store the response of  selected location 
  
  useEffect(() => {
    if (query.length < 2) {
      setSuggestions([]);
      return;
    }
    const fetchCities = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${query}&format=json`
        );
        const data = await response.json();
        setSuggestions(data);
      } catch (error) {
        console.error("Error fetching city suggestions:", error);
      }
    };

    const timeoutId = setTimeout(() => {
      fetchCities();
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const handleCitySelect = (city) => {
    setQuery(city.display_name);
    setSelectedCity(city); // Store the selected city
    setSuggestions([]); // Clear suggestions after selection
  };

  const handleSearchSubmit = async () => {
    if (!selectedCity) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${selectedCity.display_name}&format=json` // Replace with your actual API URL
      );
      const data = await response.json();
      setCityData(data); // Store the response from the API call
      console.log("API Response:", data);
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };
  SwiperCore.use([Navigation, Pagination, Autoplay]);
  const images = [
    "SPCo9VuKrWjdkTTA2QSZ1VNwE-GvqH7MKFuFgXkEXLE",
    "Vy9pC9Qhr2KO8-KeMj9ZwQ0izUiJzuCskJYiKowVQwA",
    "xzZRuhErxaiTcWv2rQVQ5D2n7_2UqOSnigWuoQzqsYY",
    "_Am6logJrHW1dnYG5ImYbaOYsJ1uiqbQUcSkHxDuIpg",
    "8zAEZL6XqxzGhK2SxWgXePLrJbmHPk1i6jmcbkNKWqo",
    "fsQwN7qpM5LXvABFRx1BYdTtXBmPcrakdJ3NyzQuMUg"
  ];

      

  return (
    <div className="bg-neutral-900 text-white">
      <header className="flex justify-between items-center p-6 ">
      </header>

      <main className="flex flex-col lg:flex-row items-center justify-between p-20">
      <div className="text-center lg:text-left lg:w-1/2">
        <h2 className="text-5xl font-bold mb-4">Track & Protect Wildlife</h2>
        <p className="mb-6">Discover local wildlife, get real-time alerts, and help protect endangered species in your area.</p>
        <div className="flex justify-center lg:justify-start space-x-4">
          <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-600 transition">Explore Now</button>
          <button className="border border-yellow-500 text-yellow-500 px-6 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-500 hover:text-black transition">Learn More</button>
        </div>
      </div>

      <div className="lg:w-1/3 mt-8 lg:mt-0">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop
          className="rounded-lg shadow-lg"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={`https://storage.googleapis.com/a1aa/image/${img}.jpg`}
                alt={`Wildlife image ${index + 1}`}
                className="rounded-lg w-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
     





     
    <section id="hero" className="bg-neutral-900 text-white py-20">
        <div className="pt-20 border-t border-neutral-800" />
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate__animated animate__fadeInUp">
              <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="text-[#FFB302]">Discover</span> and Protect Wildlife in Your Area
              </h1>
              <p className="text-xl mb-8">
                Track local wildlife, receive real-time alerts, and contribute to conservation efforts.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                <div className="bg-neutral-800 p-6 rounded-lg">
                  <div className="text-[#FFB302] text-4xl mb-2">500+</div>
                  <div className="text-gray-300">Species Tracked</div>
                </div>
                <div className="bg-neutral-800 p-6 rounded-lg">
                  <div className="text-[#FFB302] text-4xl mb-2">10K+</div>
                  <div className="text-gray-300">Active Users</div>
                </div>
              </div>

              <div className="space-x-4">
                <a href="#get-started" className="bg-[#FFB302] text-neutral-900 px-8 py-4 rounded-full font-bold inline-block hover:bg-[#FFB302]/90 transition-colors">
                  Get Started
                </a>
                <a href="#learn-more" className="border-2 border-[#FFB302] px-8 py-4 rounded-full font-bold inline-block hover:bg-[#FFB302]/10 transition-colors">
                  Watch Demo
                </a>
              </div>
            </div>

            <div className="lg:pl-12 animate__animated animate__fadeInRight">
              <div className="bg-neutral-800 rounded-xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFB302]/10 rounded-full -mr-16 -mt-16"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">Quick Wildlife Search</h3>
                  <form
                    className="space-y-6"
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSearchSubmit();
                    }}
                  >
                    <div className="relative">
                      <label className="block mb-2 text-sm">Your Location</label>
                      <div className="flex gap-4">
                        <input
                          type="text"
                          placeholder="Enter city or region"
                          value={query}
                          onChange={(e) => setQuery(e.target.value)}
                          className="flex-1 px-4 py-3 rounded-lg bg-neutral-700 focus:ring-2 focus:ring-[#FFB302] outline-none"
                        />
                      </div>
                      {/* Suggestions dropdown */}
                      {suggestions.length > 0 && (
                        <ul className="absolute left-0 w-full bg-neutral-800 border border-neutral-700 mt-1 rounded-lg shadow-lg max-h-40 overflow-auto z-10">
                          {suggestions.map((city, index) => (
                            <li
                              key={index}
                              className="px-4 py-2 hover:bg-neutral-700 cursor-pointer"
                              onClick={() => handleCitySelect(city)}
                            >
                              {city.display_name}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 text-sm">Date</label>
                        <input
                          type="date"
                          className="w-full px-4 py-3 rounded-lg bg-neutral-700 focus:ring-2 focus:ring-[#FFB302] outline-none"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-sm">Season</label>
                        <select className="w-full px-4 py-3 rounded-lg bg-neutral-700 focus:ring-2 focus:ring-[#FFB302] outline-none">
                          <option>Spring</option>
                          <option>Summer</option>
                          <option>Fall</option>
                          <option>Winter</option>
                        </select>
                      </div>
                    </div>
                    <button className="w-full bg-[#FFB302] text-neutral-900 py-4 rounded-full font-bold hover:bg-[#FFB302]/90 transition-colors">
                      Search Wildlife Activity
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>








    <section id="wildlife-map" className="bg-neutral-900 py-20 text-white">
    <div className="pt-20 border-t border-neutral-800"/>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="animate__animated animate__fadeInLeft">
              <h2 className="text-3xl font-bold mb-6">            <span className="text-[#FFB302]">WildLife</span> Activity Map</h2>
              <p className="text-neutral-300 mb-6">Explore real-time wildlife activity, migration patterns, and protected areas in your region.</p>
              
              <div className="bg-neutral-700 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-semibold mb-4">Map Filters</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm mb-2">Activity Type</label>
                    <select className="w-full bg-neutral-600 rounded-lg px-4 py-2 border border-neutral-500">
                      <option>All Activity</option>
                      <option>Migration Routes</option>
                      <option>Nesting Areas</option>
                      <option>Feeding Grounds</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm mb-2">Species</label>
                    <select className="w-full bg-neutral-600 rounded-lg px-4 py-2 border border-neutral-500">
                      <option>All Species</option>
                      <option>Mammals</option>
                      <option>Birds</option>
                      <option>Reptiles</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm mb-2">Time Period</label>
                    <select className="w-full bg-neutral-600 rounded-lg px-4 py-2 border border-neutral-500">
                      <option>Real-time</option>
                      <option>Past 24 Hours</option>
                      <option>Past Week</option>
                      <option>Past Month</option>
                    </select>
                  </div>
                </div>
              </div>

            
            </div>
          </div>

          <div className="lg:col-span-2 animate__animated animate__fadeInRight">
            <div className="bg-neutral-700 rounded-xl  relative z-0">
              <div id="map" className="absolute inset-0 rounded-xl">
                 < Map/>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>



    <section id="alerts" className="py-20 bg-neutral-900 text-white">
  <div className="container mx-auto px-6">
  <div className="pt-20 border-t border-neutral-800"/>

    <div className="text-center mb-16 animate__animated animate__fadeIn">
      <h2 className="text-4xl font-bold mb-4">           
         <span className="text-[#FFB302]">WildLife</span> Protection Alerts</h2>
      <p className="text-neutral-300 max-w-2xl mx-auto">
        Stay informed about wildlife activity and protected zones in your area
      </p>
    </div>
    <div className="grid lg:grid-cols-3 gap-8">
      {/* Current Alerts Panel */}
      <div className="lg:col-span-2 animate__animated animate__fadeInLeft">
        <div className="bg-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6 flex items-center">
            <svg
              className="w-6 h-6 mr-2 text-[#FFB302]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            Active Alerts
          </h3>
          <div className="space-y-4" id="active-alerts">
            <div className="bg-neutral-800 p-4 rounded-lg border-l-4 border-red-500">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">Bear Activity Alert</h4>
                <span className="text-sm text-neutral-400">10 mins ago</span>
              </div>
              <p className="text-neutral-300 mt-2">
                Recent bear activity reported in Northern Trail area. Maintain
                safe distance and secure food items.
              </p>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg border-l-4 border-yellow-500">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">Turtle Nesting Season</h4>
                <span className="text-sm text-neutral-400">1 hour ago</span>
              </div>
              <p className="text-neutral-300 mt-2">
                Beach access restricted during evening hours. Please follow
                marked pathways.
              </p>
            </div>
            <div className="bg-neutral-800 p-4 rounded-lg border-l-4 border-blue-500">
              <div className="flex justify-between items-start">
                <h4 className="font-semibold">Bird Migration Notice</h4>
                <span className="text-sm text-neutral-400">2 hours ago</span>
              </div>
              <p className="text-neutral-300 mt-2">
                Annual migration period beginning. Reduce outdoor lighting and
                report injured birds.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Alert Settings Panel */}
      <div className="animate__animated animate__fadeInRight">
        <div className="bg-neutral-700 rounded-xl p-6">
          <h3 className="text-xl font-bold mb-6">Alert Preferences</h3>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 text-sm">Notification Range</label>
              <select className="w-full bg-neutral-800 rounded-lg px-4 py-2 border border-neutral-600">
                <option>5 km radius</option>
                <option>10 km radius</option>
                <option>25 km radius</option>
                <option>50 km radius</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="block mb-2 text-sm">Alert Types</label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#FFB302]"
                  defaultChecked=""
                />
                <span>Dangerous Wildlife</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#FFB302]"
                  defaultChecked=""
                />
                <span>Protected Species</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#FFB302]"
                  defaultChecked=""
                />
                <span>Migration Patterns</span>
              </label>
              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  className="form-checkbox text-[#FFB302]"
                />
                <span>Community Reports</span>
              </label>
            </div>
            <div>
              <label className="block mb-2 text-sm">Notification Method</label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#FFB302]"
                    defaultChecked=""
                  />
                  <span>Push Notifications</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#FFB302]"
                    defaultChecked=""
                  />
                  <span>Email Alerts</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="form-checkbox text-[#FFB302]"
                  />
                  <span>SMS Alerts</span>
                </label>
              </div>
            </div>
            <button className="w-full bg-[#FFB302] text-neutral-900 py-3 rounded-lg font-medium hover:bg-[#FFB302]/90 transition-colors">
              Update Preferences
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>







<>
  <section id="features" className="py-20 bg-neutral-900 text-white">
  <div className="pt-20 border-t border-neutral-800"/>

    <div className="container mx-auto px-6">
      <div className="text-center mb-16 animate__animated animate__fadeIn">
        <h2 className="text-4xl font-bold mb-4 text-white">Key             <span className="text-[#FFB302]">Features</span> </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Discover how our platform helps protect wildlife and enhance your
          outdoor experience
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Feature 1 */}
        <div className="bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp">
          <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">
            Real-Time Mapping
          </h3>
          <p className="text-gray-400 mb-4">
            Interactive heatmaps showing wildlife activity patterns and movement
            in your area.
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Migration routes tracking
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Seasonal activity patterns
            </li>
          </ul>
        </div>
        {/* Feature 2 */}
        <div
          className="bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-yellow-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">Smart Alerts</h3>
          <p className="text-gray-400 mb-4">
            Receive instant notifications about wildlife activity and protected
            zones.
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Endangered species alerts
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Breeding season notifications
            </li>
          </ul>
        </div>
        {/* Feature 3 */}
        <div
          className="bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="bg-yellow-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
            <svg
              className="w-6 h-6 text-yellow-500"
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
          <h3 className="text-xl font-bold mb-3 text-white">
            Community Reporting
          </h3>
          <p className="text-gray-400 mb-4">
            Contribute to wildlife conservation by reporting sightings and
            sharing data.
          </p>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Photo submission
            </li>
            <li className="flex items-center">
              <svg
                className="w-4 h-4 mr-2 text-yellow-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              GPS location tracking
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 text-center">
        <a
          href="#get-started"
          className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-yellow-400 transition-colors"
        >
          Start Exploring Now
        </a>
      </div>
    </div>
  </section>
</>










<section id="protection-guide" className="py-20 bg-neutral-900 text-white ">
  <div className="container mx-auto px-6">

  <div className="pt-20 border-t border-neutral-800"/>

    <div className="text-center mb-16 animate__animated animate__fadeIn">

      <h2 className="text-4xl font-bold mb-4 text-white">
        Wildlife Protection            
        <span className="text-[#FFB302]">Guide</span> 
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Learn how to protect and preserve wildlife in your area with our
        comprehensive guidelines
      </p>
    </div>
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="animate__animated animate__fadeInLeft">
        <div className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Essential Protection Guidelines
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                    Maintain Safe Distance
                  </h4>
                  <p className="text-gray-400">
                    Keep a minimum distance of 100 meters from wildlife. Use
                    binoculars for observation.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                    No Feeding Policy
                  </h4>
                  <p className="text-gray-400">
                    Never feed wild animals. This can alter their natural
                    behavior and create dependencies.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-500 rounded-full p-2 mt-1">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-white">
                    Respect Habitats
                  </h4>
                  <p className="text-gray-400">
                    Stay on marked trails and avoid disturbing nesting areas or
                    dens.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="animate__animated animate__fadeInRight">
        <div className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-6 text-white">
              Seasonal Protection Tips
            </h3>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-4 bg-neutral-900 rounded-lg hover:bg-yellow-500/100 transition-colors">
                  <h4 className="font-semibold text-white">
                    Spring Migration Period
                  </h4>
                  <svg
                    className="w-5 h-5 transform group-hover:rotate-180 transition-transform text-white"
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
                <div className="hidden group-hover:block p-4">
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Avoid known migration routes</li>
                    <li>Reduce outdoor lighting at night</li>
                    <li>Report any injured birds</li>
                  </ul>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-4 bg-neutral-900 rounded-lg hover:bg-yellow-500/100 transition-colors">
                  <h4 className="font-semibold text-white">
                    Summer Nesting Season
                  </h4>
                  <svg
                    className="w-5 h-5 transform group-hover:rotate-180 transition-transform text-white"
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
                <div className="hidden group-hover:block p-4">
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Keep distance from nesting sites</li>
                    <li>Control pets in wildlife areas</li>
                    <li>Follow beach restrictions</li>
                  </ul>
                </div>
              </div>
              <div className="group cursor-pointer">
                <div className="flex items-center justify-between p-4 bg-neutral-900 rounded-lg hover:bg-yellow-500/100 transition-colors">
                  <h4 className="font-semibold text-white">
                    Winter Preparation
                  </h4>
                  <svg
                    className="w-5 h-5 transform group-hover:rotate-180 transition-transform text-white"
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
                <div className="hidden group-hover:block p-4">
                  <ul className="list-disc list-inside text-gray-400 space-y-2">
                    <li>Minimize disturbance to hibernation areas</li>
                    <li>Report any dangerous situations</li>
                    <li>Follow winter trail closures</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-12 text-center">
      <a
        href="#download-guide"
        className="inline-block bg-yellow-500 text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-yellow-500/90 transition-colors"
      >
        Download Complete Guide
      </a>
    </div>
  </div>
</section>

















    </div>
  );
};

export default Hero;
