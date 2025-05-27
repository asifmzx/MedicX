"use client";
import Button from "@/Components/UI/Button/Button";
import { GoArrowLeft } from "react-icons/go";

const BackButton = ({
  showText = false,
  showIcon = true,
  text = "Back",
  className = "bg-transparent border border-gray-400",
  ...props
}) => {
  return (
    <Button
      onClick={() => window.history.back()}
      variant="primary"
      Icon={showIcon ? GoArrowLeft : undefined}
      text={showText ? text : ""}
      className={className}
      {...props}
    />
  );
};

export default BackButton;