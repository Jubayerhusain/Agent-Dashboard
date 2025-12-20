import React, { useState } from 'react';
import { ThumbsUp, Flag, Reply, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaStar } from "react-icons/fa";

const ReviewsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('recent');
  const itemsPerPage = 5;

  const reviewsData = [
    {
      id: 1,
      name: "Emilia Sigh",
      date: "22/04/2025",
      rating: 4.9,
      review: "Friendly service Josh, Lunar and everyone at Just Property in Hastings deserved a big Thank You from us for moving us from Jakarta to Medan during the lockdown.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emilia1"
    },
    {
      id: 2,
      name: "John Smith",
      date: "20/04/2025",
      rating: 4.7,
      review: "Excellent experience with the team. Very professional and helped us find our dream home in record time. Highly recommend their services!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John"
    },
    {
      id: 3,
      name: "Sarah Johnson",
      date: "18/04/2025",
      rating: 5.0,
      review: "Outstanding customer service! The staff went above and beyond to ensure our moving process was smooth and stress-free. Thank you!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
      id: 4,
      name: "Michael Chen",
      date: "15/04/2025",
      rating: 4.8,
      review: "Great property management company. They are responsive, professional, and truly care about their clients. Very satisfied with the service.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
    },
    {
      id: 5,
      name: "Emma Wilson",
      date: "12/04/2025",
      rating: 4.9,
      review: "Wonderful team to work with! They made the entire rental process seamless and were always available to answer our questions.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma"
    },
    {
      id: 6,
      name: "David Brown",
      date: "10/04/2025",
      rating: 4.6,
      review: "Very helpful staff and great communication throughout. Would definitely use their services again in the future.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    },
    {
      id: 7,
      name: "Lisa Martinez",
      date: "08/04/2025",
      rating: 5.0,
      review: "Absolutely fantastic service! The team is knowledgeable, friendly, and professional. They made everything so easy for us.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa"
    },
    {
      id: 8,
      name: "James Taylor",
      date: "05/04/2025",
      rating: 4.7,
      review: "Highly professional and efficient. They helped us navigate a complex situation with ease. Very impressed!",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James"
    }
  ];

  // Sort reviews
  const sortedReviews = [...reviewsData].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date.split('/').reverse().join('-')) - new Date(a.date.split('/').reverse().join('-'));
    } else if (sortBy === 'highest') {
      return b.rating - a.rating;
    } else if (sortBy === 'lowest') {
      return a.rating - b.rating;
    }
    return 0;
  });

  // Pagination
  const totalPages = Math.ceil(sortedReviews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReviews = sortedReviews.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-50 sm:p-4 ">
      <div className="">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Reviews</h1>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Header with sort */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h2 className="text-xl font-bold text-gray-800">Reviews</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                Showing {startIndex + 1}-{Math.min(endIndex, sortedReviews.length)} of {sortedReviews.length} results
              </span>
              <div className="flex items-center gap-2 ml-4">
                <span className="text-sm text-gray-600">Short by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => {
                    setSortBy(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="recent">Most Recent</option>
                  <option value="highest">Highest Rating</option>
                  <option value="lowest">Lowest Rating</option>
                </select>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {currentReviews.map((review) => (
              <div key={review.id} className=" bg-gray-50 shadow-sm p-6 rounded-2xl">
                <div className="flex gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="text-sm text-gray-700">({review.rating} Rating)</span>
                        <span className="text-yellow-400"><FaStar /></span>
                      </div>
                    </div>

                    <p className="text-gray-700 mb-4 leading-relaxed">{review.review}</p>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4">
                      <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        <ThumbsUp size={16} />
                        <span>Helpful</span>
                      </button>
                      <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-600 transition-colors">
                        <Flag size={16} />
                        <span>Flag</span>
                      </button>
                      <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                        <Reply size={16} />
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex flex-col sm:flex-row justify-end items-right gap-4 mt-8 pt-6 border-gray-200">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft size={16} />
              <span>Previous</span>
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, index) => {
                const page = index + 1;
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 rounded-md text-sm font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-gradient-to-b from-green-500 to-lime-400 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-b from-green-500 to-lime-400 text-white rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <span>Next</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;