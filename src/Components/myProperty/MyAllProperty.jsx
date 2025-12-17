import React, { useState } from 'react';
import { Eye, Share2, Edit, Trash2, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

export default function MyProperty() {
  const [sortBy, setSortBy] = useState('newest');
  const [openMenuId, setOpenMenuId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Generate more properties for pagination demo
  const generateProperties = () => {
    const statuses = ['Active', 'Pending', 'Processing'];
    const properties = [];
    
    for (let i = 1; i <= 40; i++) {
      properties.push({
        id: i,
        title: 'Galaxy Flat',
        location: 'Lusaka, Kitwe and Ndola',
        price: 32800 + (i * 1000),
        image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
        date: `Sep ${20 + (i % 10)}, 2025`,
        dateValue: new Date(`2025-09-${20 + (i % 10)}`),
        view: 1210 + (i * 10),
        status: statuses[i % 3]
      });
    }
    return properties;
  };

  const allProperties = generateProperties();

  const sortProperties = (properties) => {
    const sorted = [...properties];
    
    switch (sortBy) {
      case 'newest':
        return sorted.sort((a, b) => b.dateValue - a.dateValue);
      case 'oldest':
        return sorted.sort((a, b) => a.dateValue - b.dateValue);
      case 'price-high':
        return sorted.sort((a, b) => b.price - a.price);
      case 'price-low':
        return sorted.sort((a, b) => a.price - b.price);
      case 'views-high':
        return sorted.sort((a, b) => b.view - a.view);
      case 'views-low':
        return sorted.sort((a, b) => a.view - b.view);
      default:
        return sorted;
    }
  };

  const sortedProperties = sortProperties(allProperties);
  
  // Calculate pagination
  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProperties = sortedProperties.slice(startIndex, endIndex);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'text-green-600';
      case 'Pending':
        return 'text-orange-500';
      case 'Processing':
        return 'text-red-500';
      default:
        return 'text-gray-600';
    }
  };

  const toggleMenu = (id) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setOpenMenuId(null);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setOpenMenuId(null);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
    setOpenMenuId(null);
  };

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 3;
    
    if (totalPages <= maxVisible + 2) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, 3, '...', totalPages);
      } else if (currentPage >= totalPages - 1) {
        pages.push(1, '...', totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage, '...', totalPages);
      }
    }
    
    return pages;
  };

  return (
    <div className="min-h-screen">
      <div className="">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-5 mb-6">
          <h1 className="text-xl font-semibold text-gray-900">My Property</h1>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="px-6 py-4 flex items-center justify-between border-b border-gray-200">
            <p className="text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, sortedProperties.length)} of {sortedProperties.length} results
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="price-high">Price: High to Low</option>
                <option value="price-low">Price: Low to High</option>
                <option value="views-high">Views: High to Low</option>
                <option value="views-low">Views: Low to High</option>
              </select>
            </div>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-gray-50 text-sm font-medium text-gray-700 border-b border-gray-200">
            <div className="col-span-4">Title</div>
            <div className="col-span-2">Date</div>
            <div className="col-span-2">View</div>
            <div className="col-span-2">Status</div>
            <div className="col-span-2 text-center">Action</div>
          </div>

          {/* Table Body */}
          <div className="divide-y divide-gray-200">
            {currentProperties.map((property) => (
              <div key={property.id} className="grid grid-cols-12 gap-4 px-6 py-4 items-center hover:bg-gray-50 transition-colors">
                {/* Title */}
                <div className="col-span-4 flex items-center gap-3">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{property.title}</h3>
                    <p className="text-sm text-gray-500">{property.location}</p>
                    <p className="text-sm font-medium text-gray-900">ZMW {property.price.toLocaleString()}</p>
                  </div>
                </div>

                {/* Date */}
                <div className="col-span-2 text-gray-700">{property.date}</div>

                {/* View */}
                <div className="col-span-2 text-gray-700">{property.view}</div>

                {/* Status */}
                <div className="col-span-2">
                  <span className={`font-medium ${getStatusColor(property.status)}`}>
                    {property.status}
                  </span>
                </div>

                {/* Action */}
                <div className="col-span-2 flex justify-center relative">
                  <button
                    onClick={() => toggleMenu(property.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>

                  {/* Dropdown Menu */}
                  {openMenuId === property.id && (
                    <div className="absolute right-0 top-10 bg-white rounded-lg shadow-lg border border-gray-200 py-1 w-40 z-10">
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        View
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                        <Edit className="w-4 h-4" />
                        Edit
                      </button>
                      <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50 flex items-center gap-2">
                        <Trash2 className="w-4 h-4" />
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2">
          <button 
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-4 py-2 text-sm rounded-md transition-colors flex items-center gap-1 ${
              currentPage === 1 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-600 hover:bg-white'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>
          
          {getPageNumbers().map((page, index) => (
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="text-gray-600 px-2">...</span>
            ) : (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-10 h-10 rounded-md font-medium transition-colors ${
                  currentPage === page
                    ? 'bg-gradient-to-b from-green-500 to-lime-400 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            )
          ))}
          
          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 text-sm rounded-md transition-colors flex items-center gap-1 ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-b from-green-500 to-lime-400 text-white hover:bg-green-600'
            }`}
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}