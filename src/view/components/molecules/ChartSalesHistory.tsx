import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { FaChartLine } from "react-icons/fa";
import { ChartData, ChartOptions } from "chart.js";
/* interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
} */

const ChartSalesHistory = () => {
  const [chartData, setChartData] = useState<
    ChartData<"line", number[], unknown>
  >({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [1000, 2000, 1500, 3000, 2000, 2500],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    setChartData({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Sales",
          data: [1000, 2000, 1500, 3000, 2000, 2500],
          backgroundColor: "rgba(75,192,192,0.2)",
          borderColor: "rgba(75,192,192,1)",
          borderWidth: 2,
        },
      ],
    });
  }, []);

  const options: ChartOptions<"line"> = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="flex items-center mb-2">
        <FaChartLine className="text-gray-500 mr-2" />
        <h2 className="text-lg font-medium text-gray-800">Sales History</h2>
      </div>
      <div className="w-full">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ChartSalesHistory;
