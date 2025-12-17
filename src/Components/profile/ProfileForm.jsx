import { useState } from "react";

export default function ProfileForm() {
  const [socialLinks, setSocialLinks] = useState([1, 2]);

  const addMoreLink = () => {
    setSocialLinks([...socialLinks, socialLinks.length + 1]);
  };

  const removeLink = (index) => {
    setSocialLinks(socialLinks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-4 sm:px-4">
      <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 bg-white p-4 rounded-lg shadow">
        Profile
      </h1>

      <div className="bg-white rounded-lg shadow-sm p-3 sm:p-5">
        {/* Profile Photo Section */}
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-green-400 to-lime-300 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-md">
              <img
                src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button className="bg-gradient-to-t from-green-500 to-lime-400 transition-all duration-200 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded text-sm sm:text-base font-medium shadow-sm hover:shadow">
                Upload a new photo
              </button>
              <button className="text-gray-500 hover:text-gray-700 hover:bg-gray-50 active:bg-gray-100 border border-gray-200 transition-all duration-200 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base rounded">
                Delete
              </button>
            </div>
          </div>
        </div>

        {/* Form Fields */}
        <div className="space-y-4 sm:space-y-6">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              defaultValue="Russel"
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transition-all"
            />
          </div>

          {/* First Name and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="Russel"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                defaultValue="Petter"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transition-all"
              />
            </div>
          </div>

          {/* Email and Position */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                defaultValue="Companyname@gmail.com"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Position <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white text-sm sm:text-base transition-all cursor-pointer">
                  <option>Agent</option>
                  <option>Manager</option>
                  <option>Director</option>
                  <option>Developer</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 sm:px-3 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Phone Number and Website */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                defaultValue="017 1236 584"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Website
              </label>
              <input
                type="url"
                defaultValue="www.websitename.com"
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transition-all"
              />
            </div>
          </div>

          {/* About */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
              About <span className="text-red-500">*</span>
            </label>
            <textarea
              defaultValue="I am working for the last 4 years as a web designer, graphics designer and well as UI/UX designer........."
              rows="4"
              className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base resize-none transition-all"
            />
            <p className="text-xs sm:text-sm text-gray-500 mt-1.5">
              Brief description for your profile. URLs are hyperlinked.
            </p>
          </div>
        </div>
      </div>
      {/* Social Media Section */}
      <div className="mt-8 sm:mt-10 bg-white rounded-lg shadow-sm p-3 sm:p-5">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">
          Social Media
        </h2>

        <div className="space-y-4 sm:space-y-5">
          {socialLinks.map((link, index) => (
            <div key={index} className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                Network {link}
              </label>
              <div className="flex gap-2">
                <input
                  type="url"
                  defaultValue="https://www.facebook.com/username"
                  placeholder="https://www.facebook.com/username"
                  className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm sm:text-base transition-all"
                />
                {socialLinks.length > 1 && (
                  <button
                    onClick={() => removeLink(index)}
                    className="px-3 sm:px-4 py-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-all duration-200 flex-shrink-0"
                    title="Remove"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add More Link Button */}
        <button
          onClick={addMoreLink}
          className="mt-4 sm:mt-5 bg-gradient-to-t from-green-500 to-lime-400 active:bg-green-700 transition-all duration-200 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-md text-sm sm:text-base font-medium shadow-sm hover:shadow inline-flex items-center gap-2"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add more link
        </button>
      </div>
    </div>
  );
}
