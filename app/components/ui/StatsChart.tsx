"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface StatsChartProps {
  data: number[];
}

const StatsChart = ({ data }: StatsChartProps) => {
  const chartData = data.map((value, index) => ({
    month: `M${index + 1}`,
    value: value,
  }));

  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#B08D57/20" />
          <XAxis dataKey="month" stroke="#B08D57" />
          <YAxis stroke="#B08D57" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#EDE6D8",
              border: "1px solid #B08D57",
              borderRadius: "12px",
            }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#B08D57"
            strokeWidth={3}
            dot={{ fill: "#B08D57", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatsChart;