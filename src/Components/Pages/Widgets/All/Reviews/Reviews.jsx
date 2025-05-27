import React from "react";
import RecentPatientReviews from "./RecentPatientReviews/RecentPatientReviews";
import RatingSummary from "./RatingSummary/RatingSummary";

const Reviews = () => {
  return (
    <div className="pt-4">
      <p className="text-3xl font-semibold py-4">Reviews & Ratings</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="w-full col-span-1">
          <RecentPatientReviews />
        </div>
        <div className="w-full col-span-1">
          <RatingSummary />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
