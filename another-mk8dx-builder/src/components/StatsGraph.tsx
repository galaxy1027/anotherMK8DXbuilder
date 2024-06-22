import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Speed (Ground)", value: 10 },
  { name: "Speed (Water)", value: 8 },
  { name: "Speed (Air)", value: 8 },
  { name: "Speed (Anti-Gravity)", value: 12 },
  { name: "Acceleration", value: 16 },
  { name: "Weight", value: 8 },
  { name: "Handling (Ground)", value: 14 },
  { name: "Handling (Water)", value: 12 },
  { name: "Handling (Air)", value: 10 },
  { name: "Handling (Anti-Gravity)", value: 12 },
  { name: "Mini-Turbo", value: 16 },
  { name: "Invincibility", value: 12 },
];

function StatsGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="chart">
        <h1>Build Stats</h1>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis domain={[0, 20]} />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="value" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </ResponsiveContainer>
  );
}

export default StatsGraph;
