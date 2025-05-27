import Button from "@/Components/UI/Button/Button";
import Image from "next/image";
import React from "react";

const Comments = () => {
  const comments = [
    {
      img: "https://medixpro.vercel.app/medical-professional-profile.png",
      name: "Dr. Jennifer Wilson",
      designation: "Cardiology",
      time: "2 hours ago",
      comment:
        "Patient shows signs of mitral valve regurgitation. Echocardiogram confirms moderate severity. Recommending medication management with follow-up in 3 months.",
    },
    {
      img: "https://medixpro.vercel.app/thoughtful-artist.png",
      name: "Dr. Michael Chen",
      designation: "Neurology",
      time: "1 hour ago",
      comment:
        "I noticed the patient also reported occasional headaches. Could be unrelated, but worth monitoring given their hypertension history.",
    },
  ];

  return (
    <div className="py-6">
      <div className="pb-4">
        <p className="text-2xl font-semibold">Discussion Thread</p>
        <p className="text-sm text-gray-500">
          Case #2458 - Patient consultation notes
        </p>
      </div>

      <div className="p-6 bg-white border border-gray-300 rounded-md">
        {comments.map((user, index) => (
          <div key={index} className="flex gap-4 mb-6">
            <Image
              src={user.img}
              alt={user.name}
              width={40}
              height={40}
              className="rounded-full w-12 h-12"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold text-base">{user.name}</span>
                  <span className="text-sm text-gray-500 ml-2">
                    {user.designation}
                  </span>
                </div>
                <span className="text-xs text-gray-400">{user.time}</span>
              </div>
              <p className="mt-1 text-sm">{user.comment}</p>
              <div className="mt-1 text-xs text-gray-500 flex gap-4">
                <button className="hover:text-blue-500">Like</button>
                <button className="hover:text-blue-500">Reply</button>
                <button className="hover:text-blue-500">Subscribe</button>
              </div>
            </div>
          </div>
        ))}

        <div className=" pt-4 mt-4 flex items-start gap-4">
          <Image
            src="https://medixpro.vercel.app/contemplative-artist.png"
            alt="Current User"
            width={40}
            height={40}
            className="rounded-full w-12 h-12"
          />
          <div className="flex-1">
            <textarea
              rows={2}
              placeholder="Add your comment..."
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <Button variant="secondary" text="Post Comment" />
        </div>
      </div>
    </div>
  );
};

export default Comments;
