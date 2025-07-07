import React from 'react';
import img from '/src/assets/image 839.png' 
import upcome from '/src/assets/hicoming rectangle.png'
import image1 from '/src/assets/upcoming image.png'
import image2 from '/src/assets/laptop image.png'
import image3 from '/src/assets/mike - image.png'
import mike1 from '/src/assets/mike - rectangle.png'
import laptop from '/src/assets/laptop rectangle.png'
import Attitude from '/src/assets/Attitude rectangle.png'
import Talent from '/src/assets/Talent rectangle.png'
import Thinking from '/src/assets/Thinking rectangle.png'
import image4 from '/src/assets/Atitude image.png'
import image5 from '/src/assets/Talent Image.png'
import image6 from '/src/assets/Thinking image.png'

export default function StreelancerLanding() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{backgroundColor: '#FFF0E8'}}>
      {/* Decorative curved lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path d="M-100 200 Q200 100 400 200 T800 200" stroke="url(#gradient1)" strokeWidth="2" fill="none" opacity="0.3"/>
          <path d="M-100 600 Q200 500 400 600 T800 600" stroke="url(#gradient2)" strokeWidth="2" fill="none" opacity="0.3"/>
          <path d="M400 0 Q600 100 800 0 T1200 0" stroke="url(#gradient3)" strokeWidth="2" fill="none" opacity="0.3"/>
          <path d="M400 800 Q600 700 800 800 T1200 800" stroke="url(#gradient4)" strokeWidth="2" fill="none" opacity="0.3"/>
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <header className=" -mt-14 relative z-10 px-6 py-1">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Logo Image */}
            <img
              src={img}
              alt="Streelancer Logo"
              className="h-60 w-60 object-contain"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Home</a>
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">Remote Talent Network</a>
            <div className="relative">
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium flex items-center">
                DEI Talent Network
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </div>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Academy</a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Community</a>
          </div>
          
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-medium">
            Join Us
          </button>
        </nav>
      </header>

      <main className="relative z-10 px-6 py-1">
        <div className="max-w-7xl mx-auto text-center">
          {/* Community Badge */}
          <div className="inline-flex items-center bg-purple-200 rounded-full px-6 py-3 mb-12">
            <div className="w-3 h-3 bg-purple-600 rounded-full mr-3"></div>
            <span className="text-purple-800 font-medium">+100 community of active people</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-[51px] md:text-6xl font-bold text-[#5C0090] mb-6 leading-tight">
            Be Part of a Purpose-Driven Community<br />
            Redefining the Future of Work
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Connect with changemakers, explore stories, share resources, and grow<br />
            with a network built for inclusive, second-career, and diverse talent.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-lg font-medium text-lg">
              Join as an Organization
            </button>
            <button className="border-2 border-purple-700 text-purple-700 hover:bg-purple-50 px-8 py-4 rounded-lg font-medium text-lg">
              Join as an Individual
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Upcoming Events Card */}
            <div className="relative">
              <img
                src={upcome}
                alt="upcoming placeholder"
                className="mt-10 ml-6 object-contain"
              />
              <img
                src={image1}
                alt="upcoming events"
                className="absolute top-0 left-0 mt-10 ml-6 object-contain"
              />
              <div className="-mt-11 ml-9">
                <h3 className="text-xl font-semibold text-gray-800 underline decoration-purple-500 decoration-2">
                  Upcoming Events
                </h3>
              </div>
            </div>

            {/* New Courses Card */}
            <div className="relative">
              <img
                src={laptop}
                alt="laptop placeholder"
                className="mt-10 ml-6 object-contain"
              />
              <img
                src={image2}
                alt="new courses"
                className="absolute top-0 left-0 mt-10 ml-6 object-contain"
              />
              <div className="-mt-11 ml-9 ">
                <h3 className="text-xl font-semibold text-gray-800 underline decoration-purple-500 decoration-2">
                  New Courses & Upskilling
                </h3>
              </div>
            </div>

            {/* Community Announcements Card */}
            <div className="relative">
              <img
                src={mike1}
                alt="mike placeholder"
                className="mt-10 ml-6 object-contain"
              />
              <img
                src={image3}
                alt="community announcements"
                className="absolute top-0 left-0 mt-10 ml-7 object-contain"
              />
              <div className="-mt-11 ml-14">
                <h3 className="text-xl font-semibold text-gray-800 underline decoration-purple-500 decoration-2">
                  Community Announcements
                </h3>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Blog Section */}
      <div className='mt-40 text-[51px] ml-72 text-[#5C0090]'> From the Community Blog.
      </div>
      <div className=' ml-72 text-[#5C0090] text-[19px]'>Insights, journeys, and ideas -- written by and for the Streetlancer network.</div>
      
      {/* Blog Cards */}
      <div className="mt-20 px-16 grid grid-cols-3 gap-12 max-w-7xl mx-auto">
        {/* Attitude Card */}
        <div className="relative">
          <img
            src={Attitude}
            alt="attitude placeholder"
            className="object-contain"
          />
          <img
            src={image5}
            alt="attitude content"
            className="absolute top-0 left-0 ml-1 object-contain"
          />
          <div className="-mt-48 text-left">
            <div className="text-[20px] font-semibold ml-1 text-[#5C0090] mb-3">
              Not Sure Which Hiring Strategy<br />  
                     <div className='ml-16'>Fits You Best?</div>
            </div>
            <div className="text-[#A574F1] text-[17px] ml-3 mb-4 leading-relaxed">
              From quick staffing to strategic talent 
              acquisition, we tailor solutions that 
            grow with your business.
            </div>
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg ml-[82px] font-medium">
              Learn More
            </button>
          </div>
        </div>

        {/* Talent Card */}
        <div className="relative">
          <img
            src={Talent}
            alt="talent placeholder"
            className="object-contain"
          />
          <img
            src={image4}
            alt="talent content"
            className="absolute top-0 left-0 mr-2 object-contain"
          />
          <div className="-mt-48 ml-1 text-left">
            <div className="text-[20px] font-semibold ml-1 text-[#5C0090] mb-3">
              Attitude or Skill? Why Not Both.
            </div>
            <div className="text-[17px] text-[#A574F1] mb-4 leading-relaxed space-x-3 space-y-0">
              Future-ready teams need more than just qualifications—they need the right mindset and build a team that grows with you.
            </div>
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 ml-20 mt-9 rounded-lg font-medium">
              Learn More
            </button>
          </div>
        </div>

        {/* Thinking Card */}
        <div className="relative">
          <img
            src={Thinking}
            alt="thinking placeholder"
            className="object-contain"
          />
          <img
            src={image6}
            alt="thinking content"
            className="absolute top-0 left-0 object-contain"
          />
          <div className="mt-4 text-left">
            <div className="text-[20px] font-semibold text-[#5C0090] mb-3">
              Strategic Thinking
            </div>
            <div className="text-[18px] text-[#A574F1] mb-4 leading-relaxed">
              Explore methods to enhance your strategic thinking skills and make impactful decisions.
            </div>
            <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-2 rounded-lg font-medium">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}