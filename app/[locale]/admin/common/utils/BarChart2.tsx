import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Jan',
    project: 4000,
    revenue: 2400,
    amt: 2400,
  },
  {
    name: 'Feb',
    project: 3000,
    revenue: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    project: 2000,
    revenue: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    project: 2780,
    revenue: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    project: 1890,
    revenue: 4800,
    amt: 2181,
  },
  {
    name: 'Jun',
    project: 2390,
    revenue: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    project: 3490,
    revenue: 4300,
    amt: 2100,
  },
  {
    name: 'August',
    project: 3090,
    revenue: 4000,
    amt: 2100,
  },
  {
    name: 'Sep',
    project: 1090,
    revenue: 400,
    amt: 2100,
  },
  {
    name: 'Oct',
    project: 7090,
    revenue: 8200,
    amt: 2100,
  },
  {
    name: 'Nov',
    project: 4090,
    revenue: 1200,
    amt: 2100,
  },
  {
    name: 'Dec',
    project: 8090,
    revenue: 800,
    amt: 2100,
  },
];

export default class BarChart2 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/bar-chart-has-background-32n2fm';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 10,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke='0' strokeDasharray="1 1" />
          <XAxis dataKey="name" fontSize={14} width={10}  />
          <YAxis fontSize={13} stroke='0' />
          <Tooltip  />
          <Legend iconSize={8} iconType='circle' fontSize={10} wrapperStyle={{fontSize:13 , textTransform:'capitalize', fontWeight:500}} />
          <Bar dataKey="revenue" barSize={8} fontSize={12} radius={2} fill="#006ad7"  background={{ fill: '#fff' }} />
          <Bar dataKey="project" barSize={8} radius={2} fill="#1a2430" background={{ fill: '#fff' }}  />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}