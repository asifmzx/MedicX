import React from "react";
import { Flex, Progress } from "antd";

const ProgressBar = ({ label, percent }) => {
  return (
    <Flex gap="small" vertical>
      <Flex justify="space-between" align="left">
        <span className="font-medium">{label}</span>
        <span className="font-medium ">{percent}%</span>
      </Flex>
      <Progress percent={percent} strokeColor="#22c55e" showInfo={false} />
    </Flex>
  );
};
export default ProgressBar;
