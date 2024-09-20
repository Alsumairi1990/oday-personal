import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';


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

export default class ComposedChart1 extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/composed-chart-of-same-data-3cs8ym';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 5,
            bottom: 10,
            left: 0,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" strokeWidth={1} />
          <XAxis dataKey="name" fontSize={13} scale="band" />
          <YAxis fontSize={13} stroke='0' />
          <Tooltip />
          <Legend iconSize={8} iconType='circle' fontSize={10} wrapperStyle={{fontSize:13 , textTransform:'capitalize', fontWeight:500}} />
          <Bar dataKey="revenue"  barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="project" stroke="#ff7300" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}