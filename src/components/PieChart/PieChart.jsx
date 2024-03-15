import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Statistics of weight and height of users according to weight and height criteria",
    },
  },
};

const labels = [
  "0-20 age",
  "20-30 age",
  "30-40 age",
  "40-50 age",
  "50-60 age",
  "60-70 age",
];

const PieChart = ({ users }) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Weight",
        data: users?.map((user) => user.weight),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Height",
        data: users?.map((user) => user.height),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return <Bar options={options} data={data} />;
};

export default PieChart;
