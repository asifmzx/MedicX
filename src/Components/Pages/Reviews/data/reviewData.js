export const reviewData = [
  {
    id: 1,
    status: "verified",
    date: "4/15/2023",
    doctorName: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    reviewerName: "Michael Thompson",
    title: "Excellent care and attention",
    reviewText:
      "Dr. Johnson was extremely thorough and took the time to explain everything in detail. She answered all my questions and made me feel at ease during my appointment.",
    response:
      "Thank you for your kind words, Michael. It was a pleasure to help you with your health concerns. Looking forward to your follow-up visit.",
    helpfulCount: 24,
    department: "Cardiology",
    rating: 5,
  },
  {
    id: 2,
    status: "verified",
    date: "4/10/2023",
    doctorName: "Dr. Robert Chen",
    specialty: "Neurologist",
    reviewerName: "Emily Wilson",
    title: "Very knowledgeable doctor",
    reviewText:
      "Dr. Chen was very knowledgeable and professional. The only reason I'm not giving 5 stars is because I had to wait a bit longer than expected for my appointment.",
    helpfulCount: 12,
    department: "Neurology",
    rating: 4,
  },
  {
    id: 3,
    status: "flagged",
    date: "4/7/2023",
    doctorName: "Dr. James Wilson",
    specialty: "Orthopedic Surgeon",
    reviewerName: "Thomas Clark",
    reviewText:
      "The doctor was extremely rude and dismissive. He didn't listen to my concerns and rushed through the appointment.",
    helpfulCount: 3,
    department: "Orthopedics",
  },
  {
    id: 4,
    status: "flagged",
    date: "4/6/2023",
    doctorName: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    reviewerName: "Patricia Lee",
    reviewText:
      "The doctor was late to the appointment and seemed distracted throughout. She didn't address my concerns properly.",
    helpfulCount: 5,
    department: "Cardiology",
  },
  {
    id: 5,
    status: "pending",
    date: "4/10/2023",
    doctorName: "Dr. Michael Chen",
    specialty: "Neurologist",
    reviewerName: "Robert Taylor",
    reviewText:
      "Dr. Chen was very thorough in his examination and explained everything clearly. However, the wait time was longer than expected.",
    helpfulCount: 12,
    department: "Neurology",
  },
  {
    id: 6,
    status: "pending",
    date: "4/9/2023",
    doctorName: "Dr. Emily Garcia",
    specialty: "Pediatrician",
    reviewerName: "Susan White",
    reviewText:
      "Dr. Garcia is wonderful with my children. She takes the time to explain everything and makes them feel comfortable.",
    helpfulCount: 18,
    department: "Pediatrics",
  },
];

export const reviewStats = {
  averageRating: 4.4,
  totalReviews: 5,
  ratingBreakdown: {
    5: { count: 3, percentage: 60 },
    4: { count: 1, percentage: 20 },
    3: { count: 1, percentage: 20 },
    2: { count: 0, percentage: 0 },
    1: { count: 0, percentage: 0 },
  },
};
