export const reviewData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
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
