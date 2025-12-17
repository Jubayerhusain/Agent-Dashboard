import React, { useState } from "react";

export default function SettingsForm() {
  const [formData, setFormData] = useState({
    firstName: "Russel",
    lastName: "Petter",
    email: "Companyname@gmail.com",
    phone: "017 123 568 5245",
    password: "abcd 1234",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log("Form saved:", formData);
    alert("Settings saved successfully!");
  };

  const handleCancel = () => {
    setFormData({
      firstName: "Russel",
      lastName: "Petter",
      email: "Companyname@gmail.com",
      phone: "017 123 568 5245",
      password: "abcd 1234",
    });
  };

  return (
    <div className="min-h-screen">
      <div className="p-5 bg-white shadow rounded-md">
        <h1 className="text-2xl font-semibold text-gray-900">
          Account Settings
        </h1>
      </div>
      <div className="p-3 sm:p-5 bg-white shadow rounded-md mt-6" >
        <div className="sm:p-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="mb-8">
            <p className="text-sm text-gray-600">
              Want to change the password?{" "}
              <a
                href="#"
                className="text-green-500 hover:text-green-600 font-medium"
              >
                Click here
              </a>
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-gradient-to-t from-green-500 to-lime-400 hover:bg-green-600 text-white font-medium rounded-md transition-colors"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-6 py-2 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-md border border-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
