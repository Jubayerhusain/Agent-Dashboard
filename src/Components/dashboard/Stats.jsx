import React from 'react';
import {Eye, List } from 'lucide-react';
import {PiBuildingOffice } from "react-icons/pi";
import { FiLoader } from "react-icons/fi";
import { MdMenu } from "react-icons/md";

export default function Stats() {
  const AllStats = [
    {
      title: 'All Properties',
      value: '1.7k+',
      icon: PiBuildingOffice,
    },
    {
      title: 'Total Pending',
      value: '03',
      icon: FiLoader,
    },
    {
      title: 'Total Views',
      value: '4.8k',
      icon: Eye,
    },
    {
      title: 'Product Listed',
      value: '3,456',
      icon: List,
    },
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {AllStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium mb-2">
                    {stat.title}
                  </p>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </h3>
                </div>
                <div className='rounded-xl p-4 bg-gradient-to-b from-green-500 to-lime-300'>
                  <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}