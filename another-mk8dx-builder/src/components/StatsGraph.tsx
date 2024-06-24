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
  { name: "Speed (Ground)", value: 3.5 },
  { name: "Speed (Water)", value: 2.25 },
  { name: "Speed (Air)", value: 5.5 },
  { name: "Speed (Anti-Gravity)", value: 4.25 },
  { name: "Acceleration", value: 3.5 },
  { name: "Weight", value: 3 },
  { name: "Handling (Ground)", value: 1.25 },
  { name: "Handling (Water)", value: 1 },
  { name: "Handling (Air)", value: 1.5 },
  { name: "Handling (Anti-Gravity)", value: 4.75 },
  { name: "Mini-Turbo", value: 3.25 },
  { name: "Invincibility", value: 2.5 },
];

function StatsGraph() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <div className="Chart">
        <h1>Build Stats</h1>
        <BarChart width={500} height={500} data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" domain={[0, 6]} tickCount={7} />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </div>
    </ResponsiveContainer>
  );
}

export default StatsGraph;
