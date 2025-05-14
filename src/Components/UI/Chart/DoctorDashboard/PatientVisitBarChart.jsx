"use client";
import { BarChart, Bar, XAxis, Legend, YAxis } from "recharts";

const data = [
  {
    name: "jan",
    patient: 40,
    amt: 10,
  },
  {
    name: "fev",
    patient: 50,
    amt: 20,
  },
  {
    name: "mar",
    patient: 45,
    amt: 30,
  },
  {
    name: "apr",
    patient: 60,
    amt: 40,
  },
  {
    name: "may",
    patient: 55,
    amt: 50,
  },
  {
    name: "jun",
    patient: 70,
    amt: 60,
  },
  {
    name: "jul",
    patient: 65,
    amt: 70,
  },
  {
    name: "aug",
    patient: 55,
    amt: 80,
  },
  {
    name: "sep",
    patient: 80,
    amt: 90,
  },
  {
    name: "oct",
    patient: 75,
    amt: 100,
  },
  {
    name: "nov",
    patient: 90,
    amt: 10,
  },
  {
    name: "dec",
    patient: 85,
    amt: 10,
  },
];

const PatientVisitBarChart = () => {
  return (
    <BarChart
      width={800}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <XAxis dataKey="name" />
      <YAxis dataKey="amt" />

      <Bar dataKey="patient" fill="#6366F1" barSize={50} interval={1} />
    </BarChart>
  );
};

export default PatientVisitBarChart;
