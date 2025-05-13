import React from "react";
import Button from "../UI/Button";
import StatusButton from "../UI/StatusButton";

const HeroSection = () => {
  return (
    <div>
      <Button variant="secondary" />

      <div className="ps-10 py-2">
        <StatusButton variant="cancel" text="cancelled" />
      </div>
      <div className="ps-10 py-2">
        <StatusButton variant="Confirm" text="confirmed" />
      </div>
      <div className="ps-10 py-2">
        <StatusButton variant="complete" text="completed" />
      </div>
      <div className="ps-10 py-2">
        <StatusButton variant="default" text="default" />
      </div>
      <div className="ps-10 py-2">
        <StatusButton variant="progress" text="progress" />
      </div>
    </div>
  );
};

export default HeroSection;
