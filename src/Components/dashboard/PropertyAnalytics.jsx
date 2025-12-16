import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

export default function PropertyAnalytics() {
  const [hoveredBar, setHoveredBar] = useState(null);
  
  const viewsData = [
    { month: 'Jan', value: 10000, change: '+2.5%' },
    { month: 'Feb', value: 40000, change: '+8.2%' },
    { month: 'Mar', value: 26000, change: '-3.5%' },
    { month: 'Apr', value: 18000, change: '+1.8%' },
    { month: 'May', value: 47000, change: '+5.6%' },
    { month: 'Jun', value: 33000, change: '-2.1%' },
    { month: 'Jul', value: 43000, change: '+4.3%' },
    { month: 'Aug', value: 30000, change: '+3.4%' },
    { month: 'Sep', value: 22000, change: '-1.9%' },
    { month: 'Oct', value: 34000, change: '+3.4%' },
    { month: 'Nov', value: 28000, change: '-2.8%' },
    { month: 'Dec', value: 19000, change: '+1.2%' },
  ];

  return (
    <div className="w-full bg-gray-50">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Property Views Chart */}
        <div className="bg-white rounded-2xl p-2 sm:p-6 shadow-sm">
          <div className="flex items-start justify-between mb-6">
            <div className='p-4'>
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Property Views
              </h2>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-gray-900">4.8k</span>
                <span className="text-sm text-gray-600">Last year</span>
                <span className="text-sm font-medium text-green-600">
                  20% increase
                </span>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-green-500 text-sm font-medium text-green-500 hover:bg-gray-50">
              Yearly
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="relative">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart 
                data={viewsData}
                onMouseMove={(state) => {
                  if (state.isTooltipActive && state.activeTooltipIndex !== undefined) {
                    setHoveredBar(state.activeTooltipIndex);
                  }
                }}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="month" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: '#9ca3af', fontSize: 12 }}
                  tickFormatter={(value) => `${value / 1000}k`}
                />
                <Bar 
                  dataKey="value" 
                  radius={[8, 8, 0, 0]}
                >
                  {viewsData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`}
                      fill={hoveredBar === index ? '#22c55e' : 'url(#colorGradient)'}
                      style={{ 
                        transition: 'all 0.2s ease',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </Bar>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ccff33" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>

            {/* Hover Tooltip Card */}
            {hoveredBar !== null && (
              <div 
                className="absolute bg-white rounded-xl shadow-lg p-4 border border-gray-100 pointer-events-none z-10 transition-all duration-200"
                style={{
                  left: `${(hoveredBar / viewsData.length) * 100 + 4}%`,
                  top: '20px',
                  transform: hoveredBar > 6 ? 'translateX(-100%)' : 'translateX(0)'
                }}
              >
                <div className="text-center min-w-[100px]">
                  <p className="text-sm font-semibold text-gray-900 mb-1">
                    {viewsData[hoveredBar].month}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mb-1">
                    ${(viewsData[hoveredBar].value / 1000).toFixed(1)}k
                  </p>
                  <p className={`text-sm font-medium ${
                    viewsData[hoveredBar].change.startsWith('+') 
                      ? 'text-green-600' 
                      : 'text-red-600'
                  }`}>
                    {viewsData[hoveredBar].change}
                  </p>
                </div>
                
                {/* Green gradient bars at bottom */}
                <div className="flex gap-1 mt-3 justify-center">
                  <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-lime-500 rounded"></div>
                  <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded"></div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Product Listed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <div key={item} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-medium text-gray-600 mb-3">
                    Product Listed
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      3,456
                    </span>
                    <span className="text-gray-500 text-sm">/Unit</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-green-600">
                      20% increase
                    </span>
                    <span className="text-sm text-gray-400">Last month</span>
                  </div>
                </div>

                {/* Circular Progress */}
                <div className="relative w-20 h-20">
                  <svg className="w-20 h-20 transform -rotate-90">
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#f0f0f0"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="40"
                      cy="40"
                      r="32"
                      stroke="#22c55e"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 32 * 0.2} ${2 * Math.PI * 32}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-green-600">20%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}