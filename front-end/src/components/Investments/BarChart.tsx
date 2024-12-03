import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Title,
  ScriptableContext,
  ChartOptions,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Title);

const BarChart: React.FC = () => {
  const data = {
    labels: ["-1yr", "-6m", "-1m", "Today", "+1m", "+6m", "+1yr"],
    datasets: [
      {
        label: "Projection",
        data: [200000, 250000, 180000, 220000, 330000, 280000, 360000],
        backgroundColor: (ctx: ScriptableContext<"bar">) => {
          const index = ctx.dataIndex;
          return index === 4 ? "#A8E05F" : "#556B2F"; // Highlight "+1m"
        },
        borderRadius: 0,
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "white",
        titleColor: "black",
        titleFont: { size: 12, weight: "bold" },
        bodyColor: "black",
        borderColor: "#D3D3D3",
        borderWidth: 1,
        cornerRadius: 8,
        callbacks: {
          title: (tooltipItems) => {
            const label = tooltipItems[0].label;
            switch (label) {
              case "-1yr":
                return "Nov 2023";
              case "-6m":
                return "May 2024";
              case "-1m":
                return "Oct 2024";
              case "Today":
                return "Nov 2024";
              case "+1m":
                return "Dec 2024";
              case "+6m":
                return "May 2025";
              case "+1yr":
                return "Nov 2025";
              default:
                return "Unknown";
            }
          },
          label: (tooltipItem) => `$${tooltipItem.raw?.toLocaleString()}`,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: "white", // X-axis label color
          font: { size: 12 },
        },
        border: {
            display: true,
            color: "grey",
            z: 1
        }
      },
      y: {
        grid: {
          display: false, // Removes Y-axis grid lines
        },
        ticks: {
          display: false, // Hides Y-axis labels
        },
      },
    },
  };

  return (
    <div className="h-[200px] w-full p-4 rounded-md">
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;
