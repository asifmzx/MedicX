"use client";
import Button from "@/Components/UI/Button/Button";
import { GoArrowLeft } from "react-icons/go";

const BackButton = () => {
  return (
    <Button
      onClick={() => window.history.back()}
      variant="primary"
      Icon={GoArrowLeft}
      text=""
      className="bg-transparent border border-gray-400"
    />
  );
};

export default BackButton;
