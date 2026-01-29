import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const MONTH_NAMES: Record<string, string> = {
  "01": "JAN",
  "02": "FEV",
  "03": "MAR",
  "04": "ABR",
  "05": "MAI",
  "06": "JUN",
  "07": "JUL",
  "08": "AGO",
  "09": "SET",
  "10": "OUT",
  "11": "NOV",
  "12": "DEZ",
};

export default function TimeSeriesChart({ data }: { data: any[] }) {
  const formattedData = data.map(item => ({
    ...item,
    MesLabel: MONTH_NAMES[item.Mes] || item.Mes,
  }));

  return (
    <div className="w-full h-full bg-transparent">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={formattedData}
          margin={{ top: 50, right: 30, left: 10, bottom: 0 }}
          style={{ overflow: "visible" }}
        >
          <defs>
            <linearGradient id="colorEmerald" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#e2fb5f" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#e2fb5f" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="rgba(255,255,255,0.1)"
            vertical={false}
          />
          <XAxis
            dataKey="MesLabel"
            tick={{ fill: "#000000", fontSize: 12, fontWeight: 700 }}
            axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
          />
          <YAxis
            domain={[0, "dataMax + 10000000"]}
            tick={{ fill: "#000000", fontSize: 12, fontWeight: 700 }}
            axisLine={{ stroke: "rgba(255,255,255,0.2)" }}
            tickFormatter={v => `${(v / 1_000_000).toFixed(0)}M`}
          />
          <Area
            type="monotone"
            dataKey="Valor"
            stroke="#e2fb5f"
            strokeWidth={4}
            fill="url(#colorEmerald)"
            dot={{ fill: "#000000", r: 5 }}
          >
            <LabelList
              dataKey="Valor"
              position="top"
              offset={20}
              formatter={(v: number) => `${(v / 1_000_000).toFixed(1)}M`}
              style={{ fill: "#575c3f", fontSize: "12px", fontWeight: "900" }}
            />
          </Area>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
