import {
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Area,
} from "recharts";

const AnimeChart = (props: any): JSX.Element => {
  return (
    <div>
      {props.animes && (
        <ResponsiveContainer width="100%" aspect={4}>
          <AreaChart
            width={730}
            height={250}
            data={props.animes}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <XAxis dataKey={props?.animes?.year} />
            <YAxis dataKey={props?.animes?.year} />
            <CartesianGrid strokeDasharray="3 3" />
            <Area
              type="monotone"
              dataKey={props.animes.title}
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default AnimeChart;
