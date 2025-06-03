"use client";
import React, { useState } from "react";
import Image from 'next/image'

import Buttonv2 from "@/Components/UI/Button/Buttonv2";
import Status from "@/Components/UI/Status/Status";
import { assets } from "@/assets";

import { FiMessageSquare } from "react-icons/fi";

import { patientReviews } from "../data/reviewData";

const getcategories = (data) => {
    const cate = Array.from(new Set(data.map(r => r.category).filter(Boolean)));
    return cate.sort();
};

const ReviewDashboard = ({ filter = "", searchQuery = "" }) => {
    const [ratingFilter, setRatingFilter] = useState("all");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [serviceFilter, setServiceFilter] = useState("all");

    let filteredReviews = patientReviews.filter((review) => {
        if (filter === "all" && review.status !== "Approved") return false;
        if (filter === "flagged" && review.status !== "Flagged") return false;
        if (filter === "pending" && review.status !== "Pending") return false;
        return true;
    });

    if (ratingFilter !== "all") {
        filteredReviews = filteredReviews.filter(r => r.rating === Number(ratingFilter));
    }

    if (categoryFilter !== "all") {
        filteredReviews = filteredReviews.filter(r => r.category === categoryFilter);
    }

    if (serviceFilter !== "all") {
        filteredReviews = filteredReviews.filter(r => r.service === serviceFilter);
    }

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredReviews = filteredReviews.filter(review =>
            (review.doctorName?.toLowerCase().includes(query) || false) ||
            (review.specialty?.toLowerCase().includes(query) || false) ||
            (review.reviewerName?.toLowerCase().includes(query) || false) ||
            (review.reviewText?.toLowerCase().includes(query) || false) ||
            (review.category?.toLowerCase().includes(query) || false) ||
            (review.service?.toLowerCase().includes(query) || false)
        );
    }

    const categories = getcategories(patientReviews);
    const services = Array.from(new Set(patientReviews.map(r => r.service).filter(Boolean))).sort();

    return (
        <div>
            {filter === "all" && (
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <div className="flex flex-row items-center justify-center -mx-2 md:mx-0 gap-1 md:gap-2">
                        <label className="text-sm text-gray-700 font-medium hidden md:block">Filter by:</label>
                        <select
                            className="border border-gray-300 bg-white rounded px-0 md:px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent"
                            value={ratingFilter}
                            onChange={e => setRatingFilter(e.target.value)}
                        >
                            <option value="all">All Ratings</option>
                            <option value="5">5 stars</option>
                            <option value="4">4 stars</option>
                            <option value="3">3 stars</option>
                            <option value="2">2 stars</option>
                            <option value="1">1 star</option>
                        </select>
                        <select
                            className="border border-gray-300 bg-white rounded px-1 md:px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent"
                            value={categoryFilter}
                            onChange={e => setCategoryFilter(e.target.value)}
                        >
                            <option value="all">All Categories</option>
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <select
                            className="border border-gray-300 bg-white rounded px-0 md:px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-transparent"
                            value={serviceFilter}
                            onChange={e => setServiceFilter(e.target.value)}
                        >
                            <option value="all">All Services</option>
                            {services.map(ser => (
                                <option key={ser} value={ser}>{ser}</option>
                            ))}
                        </select>
                    </div>

                    <div className="text-gray-500 mx-auto md:mx-0 md:ml-auto text-sm">
                        Showing {filteredReviews.length} of {patientReviews.filter(r => r.status === "Approved").length} reviews
                    </div>
                </div>
            )}
            <div>
                {filteredReviews.length === 0 ? (
                    <div className="p-8 text-center text-gray-500">
                        <p>No reviews found matching your criteria</p>
                    </div>
                ) : (
                    filteredReviews.map((review) => (
                        <div key={review.id} className="p-4 md:p-6 bg-white rounded-xl shadow mb-4 relative">
                            <button
                                className="absolute top-3 right-3 md:top-4 md:right-4 flex items-center justify-center size-8 md:size-10 text-gray-400 hover:bg-gray-100 rounded-md transition-colors duration-200 cursor-pointer"
                            >
                                <svg
                                    width="16" height="16" className="md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20"
                                >
                                    <circle cx="4" cy="10" r="2" />
                                    <circle cx="10" cy="10" r="2" />
                                    <circle cx="16" cy="10" r="2" />
                                </svg>
                            </button>

                            <div className="flex items-start md:items-center mb-2 pr-8 md:pr-12">
                                {review.status === "Approved" && (
                                    <Image
                                        src={assets.prof}
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 md:w-12 md:h-12 rounded-full mt-2 mr-3 md:mr-4 flex-shrink-0"
                                        alt={`Profile picture of ${review.reviewerName}`}
                                        loading="lazy"
                                    />
                                )}
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-base md:text-lg font-semibold text-gray-900 break-words">{review.title}</span>
                                    </div>
                                    <div className="flex flex-wrap items-center mt-1 gap-2">
                                        {review.status === "Approved" && (
                                            <div className="flex items-center">
                                                {[1, 2, 3, 4, 5].map((i) => (
                                                    <svg
                                                        key={i}
                                                        className={`w-4 h-4 md:w-5 md:h-5 ${i <= review.rating ? "text-yellow-400" : "text-gray-200"}`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.385-2.46c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        )}
                                        <span className="text-gray-500 text-xs md:text-sm">{review.date}</span>
                                        {review.status === "Approved" && (
                                            <Status type="review" variant={review.status} text={review.status} />
                                        )}
                                        {review.status === "Pending" && (
                                            <Status type="review" variant={review.status} text={review.status} />
                                        )}
                                        {review.status === "Flagged" && (
                                            <Status type="review" variant={review.status} text={review.status} />
                                        )}
                                    </div>
                                </div>
                            </div>

                            <div className="text-gray-500 text-xs md:text-sm mb-4 md:mb-2 mt-6 md:mt-8">
                                Review for <span className="font-semibold text-gray-800">{review.doctorName}</span>
                                {review.specialty && (
                                    <span className="text-gray-400"> ({review.specialty})</span>
                                )} by {review.reviewerName}
                            </div>

                            <div className="mb-2 text-sm md:text-base text-gray-900 break-words">{review.reviewText}</div>

                            {review.response && (
                                <div className="bg-gray-100 rounded px-3 md:px-4 py-2 md:py-3 mb-2 text-xs md:text-sm mt-4">
                                    <span className="font-semibold">Response from {review.doctorName.split(" ")[0]}: </span>
                                    <span className="break-words">{review.response}</span>
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-3">
                                <div className="flex gap-3 md:gap-2">
                                    <button className="flex items-center hover:bg-gray-100 px-3 md:px-4 rounded-md h-8 md:h-10 font-semibold text-xs md:text-sm cursor-pointer">
                                        <svg className="w-3 h-3 md:w-4 md:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.60L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                                        </svg>
                                        Helpful ({review.helpfulCount})
                                    </button>
                                    {!review.response && (
                                        <Buttonv2
                                            variant="primary_main"
                                            text="Respond"
                                            className="h-8 md:h-10 text-xs md:text-sm font-semibold border border-gray-300"
                                            Icon={FiMessageSquare}
                                        />
                                    )}
                                </div>
                                <div className="text-xs md:text-sm text-gray-400 px-2 md:px-3 whitespace-nowrap ">
                                    Categoy: {review.category} | Service: {review.service}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div >
    );
};

export default ReviewDashboard;