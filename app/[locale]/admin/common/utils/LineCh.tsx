import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Page A', week2: 4000, week1: 2400, amt: 2400 },
  { name: 'Page B', week2: 3000, week1: 1398, amt: 2210 },
  { name: 'Page C', week2: 2000, week1: 9800, amt: 2290 },
  { name: 'Page D', week2: 2780, week1: 3908, amt: 2000 },
  { name: 'Page E', week2: 1890, week1: 4800, amt: 2181 },
  { name: 'Page F', week2: 2390, week1: 3800, amt: 2500 },
  { name: 'Page G', week2: 3490, week1: 4300, amt: 2100 },
];

export default class LineCh extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

  render() {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <LineChart
          className='text-sm'
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3"  />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone"  dataKey="week1" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="week2" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
