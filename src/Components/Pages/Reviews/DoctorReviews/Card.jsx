"use client";
import React, { useState } from 'react';
import { reviewData, reviewStats } from '../data/reviewData';
import Buttonv2 from '@/Components/UI/Button/Buttonv2';
import SearchInput from "@/Components/UI/Inputs/SearchInput";
import { AiOutlineSearch } from 'react-icons/ai';
import ReviewDashboard from "./ReviewDashboard";

const Card = () => {
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
        <div className="min-h-screen md:py-4 mt-4">
            <div className="flex flex-col md:flex-row justify-between items-start lg:items-center mb-4 gap-4 md:w-[90%] mx-auto">
                <div className="w-full lg:w-fit">
                    <div className="grid auto-cols-max grid-cols-4 gap-2">
                        <Buttonv2
                            variant="primary"
                            text="All Reviews"
                            onClick={() => setActiveTab("all")}
                            className="flex items-center justify-center h-10 text-xs sm:text-sm whitespace-nowrap border border-gray-300"
                            isActive={activeTab === "all"}
                        />
                        <Buttonv2
                            variant="primary"
                            text="Pending Response"
                            onClick={() => setActiveTab("pending")}
                            className="col-span-2 flex items-center justify-center h-10 text-xs sm:text-sm whitespace-nowrap border border-gray-300"
                            isActive={activeTab === "pending"}
                        />
                        <Buttonv2
                            variant="primary"
                            text="Flagged"
                            onClick={() => setActiveTab("flagged")}
                            className="flex items-center justify-center h-10 text-xs sm:text-sm whitespace-nowrap border border-gray-300"
                            isActive={activeTab === "flagged"}
                        />
                    </div>
                </div>

                <SearchInput
                    type="text"
                    placeholder="Search reviews..."
                    icon={AiOutlineSearch}
                    inputClassName="text-sm text-gray-700"
                    wrapperClassName="flex h-10 w-full lg:w-80 bg-white rounded-xl"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden md:w-[90%] mx-auto">
                {activeTab === 'all' && (
                    <div className="p-6">
                        <div className="mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Review Statistics</h2>
                            <p className="text-gray-500 text-sm">Overview of doctor reviews and ratings</p>
                        </div>

                        <div className="flex flex-col md:flex-row items-stretch gap-6 w-full">
                            {/* Average Rating */}
                            <div className="text-center w-full md:w-1/3 min-w-0 mt-4">
                                <div className="text-5xl font-bold text-gray-800">{stats.averageRating}</div>
                                <div className="flex justify-center mt-2 mb-1">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <svg key={i} className={`w-5 h-5 ${i <= Math.round(stats.averageRating) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-gray-500 mt-1">Based on {stats.totalReviews} reviews</p>
                            </div>

                            {/* Star Distribution */}
                            <div className="flex-1 w-full min-w-0">
                                {[5, 4, 3, 2, 1].map((stars) => (
                                    <div key={stars} className="flex items-center mb-2">
                                        <span className="w-16 text-gray-600">{stars} stars</span>
                                        <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden mx-2">
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
            </div>
            <div className="mx-auto mt-6 mb-4 md:p-6 md:w-[90%] rounded-xl md:shadow-md md:border md:border-gray-300 overflow-hidden">
                <ReviewDashboard filter={activeTab} searchQuery={searchQuery} />
            </div>
        </div>
    );
};

export default Card;