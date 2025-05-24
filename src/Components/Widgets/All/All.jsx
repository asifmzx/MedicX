import React from "react";
import StatisticsCards from "./StatisticsCards/StatisticsCards";
import ProgressIndicators from "./ProgressIndicators/ProgressIndicators";
import Chart from "./Chart/Chart";
import Reviews from "./Reviews/Reviews";
import Timeline from "./Timeline/Timeline";
import TeamCard from "./TeamCard/TeamCard";
import Comments from "./Comments/Comments";
import FAQ from "./FAQ/FAQ";

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
    </div>
  );
};

export default All;
