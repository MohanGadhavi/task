import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Chart from "react-apexcharts";

export const Data = [
  { id: 1, year: 2016, userGain: 80000, userLost: 823 },
  { id: 2, year: 2017, userGain: 45677, userLost: 345 },
  // ... other data entries
];

const chartConfig = {
  type: "bar",
  height: 240,
  series: [
    {
      name: "Total Seva Hours",
      data: [50, 40, 300, 320, 500, 350],
    },
  ],
  options: {
    chart: {
      toolbar: {
        show: true,
      },
    },
    title: {
      show: "KKs Vs Total Seva Hours",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#020617"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "jigar patel",
        "Ankit patel",
        "Keven panchal",
        "vivek makwana",
        "shailesh shah",
        "nilesh nayee",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};

const chartConfig2 = {
    type: "pie",
    width: 280,
    height: 280,
    // series: [44, 55, 13, 43, 22],
    series: [50, 40, 300, 320, 500, 350],
    options: {
      chart: {
        toolbar: {
          show: true,
        },
      },
      title: {
        show: "Total Hours of Seva",
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"],
      legend: {
        show: false,
      },
    },
  };

export default function BarChart() {
  const labels = Data.map((entry) => entry.year);
  const userGainData = Data.map((entry) => entry.userGain);
  const userLostData = Data.map((entry) => entry.userLost);

  const chartData = {
    labels,
    datasets: [
      {
        label: "User Gain",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        data: userGainData,
      },
      {
        label: "User Lost",
        backgroundColor: "rgba(255, 99, 132, 0.6)",
        data: userLostData,
      },
    ],
  };

  const chartOptions = {
    // Customize chart options as needed
  };
  return (
    <div className="mt-10 ">
      <h1 className="text-xl ml-5">BarChart</h1>
      {/* <Bar data={chartData} options={chartOptions} /> */}
      <CardBody className="px-2 pb-0 md:w-[50%]">
        <Chart {...chartConfig} />
      </CardBody>
      <CardBody className="mt-4 grid place-items-left px-2">
        <Chart {...chartConfig2} />
      </CardBody>
    </div>
  );
}
