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
    <div className="min-h-screen ">
      <div className="">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-5 mb-4 sm:mb-6">
          <h1 className="text-lg sm:text-xl font-semibold text-gray-900">My Property</h1>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-sm mb-4 sm:mb-6">
          <div className="px-4 sm:px-6 py-3 sm:py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gray-200">
            <p className="text-xs sm:text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, sortedProperties.length)} of {sortedProperties.length} results
            </p>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex-1 sm:flex-none px-2 sm:px-3 py-1 border border-gray-300 rounded-md text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          {/* Desktop Table View */}
          <div className="hidden lg:block">
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
                      className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
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

          {/* Mobile/Tablet Card View */}
          <div className="lg:hidden divide-y divide-gray-200">
            {currentProperties.map((property) => (
              <div key={property.id} className="p-4 hover:bg-gray-50 transition-colors">
                <div className="flex gap-3 mb-3">
                  <img
                    src={property.image}
                    alt={property.title}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 mb-1">{property.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-500 mb-1 truncate">{property.location}</p>
                    <p className="text-sm sm:text-base font-medium text-gray-900">ZMW {property.price.toLocaleString()}</p>
                  </div>
                  <button
                    onClick={() => toggleMenu(property.id)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors h-fit"
                  >
                    <MoreVertical className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm">
                  <div>
                    <span className="text-gray-500 block mb-1">Date</span>
                    <span className="text-gray-900">{property.date}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block mb-1">Views</span>
                    <span className="text-gray-900">{property.view}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 block mb-1">Status</span>
                    <span className={`font-medium ${getStatusColor(property.status)}`}>
                      {property.status}
                    </span>
                  </div>
                </div>

                {/* Mobile Dropdown Menu */}
                {openMenuId === property.id && (
                  <div className="mt-3 bg-gray-50 rounded-lg border border-gray-200 py-1">
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                      <Share2 className="w-4 h-4" />
                      Share
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2">
                      <Edit className="w-4 h-4" />
                      Edit
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-100 flex items-center gap-2">
                      <Trash2 className="w-4 h-4" />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap">
          <button 
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-2 sm:px-4 py-2 text-xs sm:text-sm rounded-md transition-colors flex items-center gap-1 ${
              currentPage === 1 
                ? 'text-gray-400 cursor-not-allowed' 
                : 'text-gray-600 hover:bg-white'
            }`}
          >
            <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden sm:inline">Previous</span>
            <span className="sm:hidden">Prev</span>
          </button>
          
          {getPageNumbers().map((page, index) => (
            page === '...' ? (
              <span key={`ellipsis-${index}`} className="text-gray-600 px-1 sm:px-2">...</span>
            ) : (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md font-medium transition-colors text-xs sm:text-base ${
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
            className={`px-2 sm:px-4 py-2 text-xs sm:text-sm rounded-md transition-colors flex items-center gap-1 ${
              currentPage === totalPages
                ? 'text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-b from-green-500 to-lime-400 text-white hover:bg-green-600'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}