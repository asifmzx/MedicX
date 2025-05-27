const time = new Date().toLocaleTimeString("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: true,
});

export const chatList = [
  {
    user1: {
      img: "https://medixpro.vercel.app/contemplative-artist.png",
      name: "Dr. Jennifer Wilson",
      lasText:
        "I'll check the patient's records for any history of autoimmune disorders as well.",
      lastUse: time,
      isActive: true,
    },
  },
  {
    user2: {
      img: "https://medixpro.vercel.app/medical-professional-profile.png",
      name: " Emily Chen",
      lasText:
        "I'll check the patient's records for any history of autoimmune disorders as well.",
      lastUse: time,
      isActive: true,
    },
  },
  {
    user3: {
      img: "https://medixpro.vercel.app/abstract-jr.png",
      name: " John Smith (Patient)",
      lasText:
        "I'll check the patient's records for any history of autoimmune disorders as well.",
      lastUse: time,
      isActive: true,
    },
  },
  {
    user4: {
      img: "https://medixpro.vercel.app/thoughtful-artist.png",
      name: " Dr. Michael Brown",
      lasText:
        "I'll check the patient's records for any history of autoimmune disorders as well.",
      lastUse: time,
      isActive: false,
    },
  },
  {
    user5: {
      img: "https://medixpro.vercel.app/contemplative-artist.png",
      name: "Cardiology Department",
      lasText:
        "I'll check the patient's records for any history of autoimmune disorders as well.",
      lastUse: time,
      isActive: false,
    },
  },
  {
    user6: {
      img: "https://medixpro.vercel.app/medical-professional-profile.png",
      name: " Dr. Sarah Johnson",
      lasText:
        "I'll check the patient's records for any history of autoimmune disorders as well.",
      lastUse: time,
      isActive: false,
    },
  },

];
export const messages = [
  {
    text: "Hello Dr. Johnson, I need to consult with you about a patient with unusual cardiac symptoms.",
    time: "10:30 AM",
    isSeen: true,
    isSender: true,
  },
  
  {
    text: "I hadn't considered that. I'll order an echocardiogram to check for pericardial effusion.",
    time: "10:30 AM",
    isSeen: false,
    isSender: false,
  },
  {
    text: "I'll check the patient's records for any history of autoimmune disorders as well.",
    time: "10:38 AM",
    isSeen: false,
    isSender: true,
  },
  {
    text: "I'll check the patient's records for any history of autoimmune disorders as well.",
    time: "10:38 AM",
    isSeen: false,
    isSender: false,
  },
  {
    text: "I'll check the patient's records for any history of autoimmune disorders as well.",
    time: "10:38 AM",
    isSeen: false,
    isSender: true,
  },
];
