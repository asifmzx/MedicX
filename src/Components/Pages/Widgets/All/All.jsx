import React from "react";
import StatisticsCards from "./StatisticsCards/StatisticsCards";
import ProgressIndicators from "./ProgressIndicators/ProgressIndicators";
import Chart from "./Chart/Chart";
import Reviews from "./Reviews/Reviews";
import Timeline from "./Timeline/Timeline";
import TeamCard from "./TeamCard/TeamCard";
import Comments from "./Comments/Comments";
import FAQ from "./FAQ/FAQ";
import AlertCard from "./AlertCard/AlertCard";
import QuickActionCards from "./QuickActionCards/QuickActionCards";

const All = () => {
  return (
    <div>
      <StatisticsCards />
      <ProgressIndicators />
      <Chart />
      <Reviews />
      <Timeline />
      <TeamCard />
      <Comments />
      <FAQ />
      <AlertCard />
      <QuickActionCards />
    </div>
  );
};

export default All;
