import Button from "@/Components/UI/Button/Button";
import { Rate } from "antd";
import Image from "next/image";

const RecentPatientReviews = () => {
  const reviews = [
    {
      img: "https://medixpro.vercel.app/abstract-jr.png",
      name: "John Peterson",
      rating: 3,
      text: "Dr. Smith was very professional and took the time to explain my condition thoroughly. The staff was also very friendly and helpful.",
      time: "2",
    },
    {
      img: "https://medixpro.vercel.app/abstract-jr.png",
      name: "Sarah Rodriguez",
      rating: 5,
      text: "Excellent care from the entire team. The new facility is impressive and the wait time was minimal. Highly recommend this clinic!",
      time: "5",
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 h-full flex flex-col">
      <div className="pb-6">
        <p className="text-2xl font-semibold mb-1">Recent Patient Reviews</p>
        <p className="text-gray-600 text-sm">Latest feedback from patients</p>
      </div>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div key={index} className="flex items-start space-x-4">
            <Image
              src={review.img}
              alt={review.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="font-medium">{review.name}</p>
                <Rate value={review.rating} disabled />
              </div>
              <p className="text-gray-400 text-sm">{review.time} days ago</p>
              <p className="text-gray-700 mt-1">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pt-4">
        <Button
          variant="primary"
          text="View All Reviews"
          className="w-full border border-gray-200"
        />
      </div>
    </div>
  );
};

export default RecentPatientReviews;
