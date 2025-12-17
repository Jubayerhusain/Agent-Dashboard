import React from 'react';
import { Check, X } from 'lucide-react';

export default function MembershipPrices() {
  const plans = [
    {
      name: 'FREE PLAN',
      price: 0,
      features: [
        { name: '60-day chat history', included: true },
        { name: 'Basic widget customization', included: true },
        { name: 'Ticketing system', included: false },
        { name: 'Data security', included: false }
      ],
      buttonText: 'Choose Plan',
      isCurrent: false
    },
    {
      name: 'STANDARD',
      price: 29,
      features: [
        { name: '60-day chat history', included: true },
        { name: 'Basic widget customization', included: true },
        { name: 'Ticketing system', included: true },
        { name: 'Data security', included: false }
      ],
      buttonText: 'Current Plan',
      isCurrent: true
    },
    {
      name: 'BUSINESS',
      price: 39,
      features: [
        { name: '60-day chat history', included: true },
        { name: 'Basic widget customization', included: true },
        { name: 'Ticketing system', included: true },
        { name: 'Data security', included: true }
      ],
      buttonText: 'Choose Plan',
      isCurrent: false
    }
  ];

  return (
    <div className="min-h-screen ">
      <div className="">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm px-8 py-6 mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Membership</h1>
        </div>

        {/* Current Plan Info */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Current Plan (Standard)
              </h2>
              <p className="text-gray-600">
                Unlimited access to our legal document library and online rental
                application tool, billed monthly.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 md:min-w-[400px] xl:min-w-[800px]">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Monthly Plan
              </h3>
              <div className="flex items-baseline mb-2">
                <span className="text-4xl font-bold text-gray-900">$29</span>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Your subscription renews July 12th, 2023
              </p>
              <a
                href="#"
                className="text-gray-900 underline text-sm hover:text-gray-700"
              >
                Cancel Current Plan
              </a>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              {/* Price Header */}
              <div className="bg-gradient-to-b from-green-300 to-lime-200 p-8 text-center">
                <h3 className="text-sm font-semibold text-gray-900 mb-4">
                  {plan.name}
                </h3>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-gray-900">
                    ${plan.price}
                  </span>
                </div>
                <p className="text-sm text-gray-700">per user/month</p>
              </div>

              {/* Features List */}
              <div className="p-6">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 border border-green-500 rounded-full flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 flex-shrink-0 border border-red-500 rounded-full" />
                      )}
                      <span className="text-gray-700">{feature.name}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className={`w-full py-3 rounded-md font-medium transition-colors ${
                    plan.isCurrent
                      ? 'bg-gradient-to-b from-green-500 to-lime-400 hover:bg-green-600 text-white'
                      : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}