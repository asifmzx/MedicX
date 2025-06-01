"use client";
import React, { useState } from 'react';
import { reviewData, reviewStats } from '../data/reviewData';

const ReviewDashboard = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const stats = (() => {
        const ratings = reviewData.map(r => r.rating).filter(Boolean);
        const totalReviews = reviewData.length;
        const averageRating = ratings.length
            ? (ratings.reduce((a, b) => a + b, 0) / ratings.length).toFixed(1)
            : reviewStats.averageRating;
        const breakdown = [5, 4, 3, 2, 1].reduce((acc, star) => {
            const count = reviewData.filter(r => r.rating === star).length;
            acc[star] = {
                count,
                percentage: totalReviews ? Math.round((count / totalReviews) * 100) : 0,
            };
            return acc;
        }, {});
        return {
            averageRating: ratings.length ? averageRating : reviewStats.averageRating,
            totalReviews,
            ratingBreakdown: Object.keys(breakdown).length ? breakdown : reviewStats.ratingBreakdown,
        };
    })();

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="flex border-b">
                    <button
                        className={`px-6 py-4 font-medium ${activeTab === 'all' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setActiveTab('all')}
                    >
                        All Reviews
                    </button>
                    <button
                        className={`px-6 py-4 font-medium ${activeTab === 'pending' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setActiveTab('pending')}
                    >
                        Pending Response
                    </button>
                    <button
                        className={`px-6 py-4 font-medium ${activeTab === 'flagged' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                        onClick={() => setActiveTab('flagged')}
                    >
                        Flagged
                    </button>
                </div>

                {/* Statistics Section - Only on All Reviews tab */}
                {activeTab === 'all' && (
                    <div className="p-6 border-b">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Review Statistics</h2>
                            <p className="text-gray-500 text-sm">Overview of doctor reviews and ratings</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                            {/* Average Rating */}
                            <div className="text-center">
                                <div className="text-5xl font-bold text-gray-800">{stats.averageRating}</div>
                                <div className="flex justify-center mt-2 mb-1">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} className={`w-6 h-6 ${i <= Math.round(stats.averageRating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-500 mt-1">Based on {stats.totalReviews} reviews</p>
                            </div>

                            {/* Star Distribution */}
                            <div className="flex-1 w-full max-w-md">
                                {[5, 4, 3, 2, 1].map((stars) => (
                                    <div key={stars} className="flex items-center mb-2">
                                        <span className="w-16 text-gray-600">{stars} stars</span>
                                        <div className="flex-1 h-4 bg-gray-200 rounded-full overflow-hidden mx-2">
                                            <div
                                                className={`h-full rounded-full ${stars === 5 ? 'bg-green-500' :
                                                    stars === 4 ? 'bg-teal-500' :
                                                        stars === 3 ? 'bg-yellow-500' :
                                                            stars === 2 ? 'bg-orange-400' :
                                                                'bg-red-500'
                                                    }`}
                                                style={{ width: `${stats.ratingBreakdown[stars]?.percentage || 0}%` }}
                                            ></div>
                                        </div>
                                        <span className="w-10 text-right text-gray-600">
                                            {stats.ratingBreakdown[stars]?.percentage || 0}%
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Search Bar */}
                <div className="px-6 py-4 border-b">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search reviews..."
                            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                {/* Review Cards */}
                <Card filter={activeTab} searchQuery={searchQuery} />
            </div>
        </div>
    );
};

const Card = ({ filter = 'all', searchQuery = '' }) => {
    const filteredReviews = reviewData.filter(review => {
        // Filter by status
        if (filter === 'flagged' && review.status !== 'flagged') return false;
        if (filter === 'pending' && review.status !== 'pending') return false;

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            const matches =
                review.doctorName.toLowerCase().includes(query) ||
                review.specialty.toLowerCase().includes(query) ||
                review.reviewerName.toLowerCase().includes(query) ||
                review.reviewText.toLowerCase().includes(query) ||
                review.department.toLowerCase().includes(query);

            if (!matches) return false;
        }

        return true;
    });

    return (
        <div className="divide-y">
            {filteredReviews.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                    <p>No reviews found matching your criteria</p>
                </div>
            ) : (
                filteredReviews.map(review => (
                    <div key={review.id} className="p-6 hover:bg-gray-50 transition-colors">
                        <div className="flex justify-between items-start">
                            <div className="flex items-center space-x-2">
                                <span className={`px-2 py-1 rounded text-xs font-medium ${review.status === 'flagged' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                                    }`}>
                                    {review.status === 'flagged' ? 'Flagged' : 'Pending'}
                                </span>
                                <span className="text-gray-500 text-sm">{review.date}</span>
                            </div>
                            <button className="text-gray-400 hover:text-gray-600">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                </svg>
                            </button>
                        </div>

                        <div className="mt-3">
                            <p className="text-gray-700">
                                <span className="text-gray-500">Review for </span>
                                <span className="font-medium">{review.doctorName}</span>
                                <span className="text-gray-500"> ({review.specialty})</span>
                                <span className="text-gray-500"> by {review.reviewerName}</span>
                            </p>
                            <p className="mt-2 text-gray-700">{review.reviewText}</p>
                        </div>

                        <div className="mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="flex space-x-3">
                                <button className="flex items-center text-gray-600 hover:text-gray-800 text-sm">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                    </svg>
                                    Helpful ({review.helpfulCount})
                                </button>
                                <button className="flex items-center text-gray-600 hover:text-gray-800 text-sm">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                    Respond
                                </button>
                            </div>
                            <div className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                                Department: {review.department}
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default ReviewDashboard;