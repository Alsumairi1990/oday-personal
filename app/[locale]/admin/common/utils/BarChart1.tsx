import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'JAN',
    uv: 4000,
    Orders: 2400,
    amt: 2400,
  },
  {
    name: 'FEB',
    uv: 3000,
    Orders: 1398,
    amt: 2210,
  },
  {
    name: 'MARCH',
    uv: 2000,
    Orders: 9800,
    amt: 2290,
  },
  {
    name: 'APRIL',
    uv: 2780,
    Orders: 3908,
    amt: 2000,
  },
  {
    name: 'MAY',
    uv: 1890,
    Orders: 4800,
    amt: 2181,
  },
  {
    name: 'JUN',
    uv: 2390,
    Orders: 3800,
    amt: 2500,
  },
  {
    name: 'JULY',
    uv: 3490,
    Orders: 300,
    amt: 200,
  },
];

export default class BarChart1 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-has-no-padding-2hlnt8';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          
          height={300}
          data={data}
          margin={{
            top: 8,
            right: 20,
            left: 10,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis dataKey="name" fontSize={14} scale="point"  padding={{ left: 10, right: 10 }} />
          <YAxis fontSize={14} />
          <Tooltip />
          <Legend />
          <CartesianGrid stroke='0' strokeDasharray="0 0" />
          <Bar dataKey="Orders" fill="#8884d8" background={{ fill: '#eee' }} />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}