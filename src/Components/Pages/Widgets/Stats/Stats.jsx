import { Card, statsData } from "./statsCard";

const Stats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
      {statsData.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Stats;
