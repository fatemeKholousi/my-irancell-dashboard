import React, { PureComponent } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts'

const data = [
  {
    name: '7/1',
    value: '1000   ',
  },
  {
    name: '7/10',
    value: '2000',
  },
  {
    name: '7/18',
    value: `3000`,
  },
  {
    name: '7/25',
    value: '3000',
  },

  {
    name: '7/28',
    value: '2000',
  },
]

export default class Example extends PureComponent {
  render() {
    return (
      <div style={{ height: '250px', width: '100%', textAlign: 'left' }}>
        <ResponsiveContainer>
          <AreaChart data={data}>
            <XAxis dataKey="name" />
            {/* <YAxis type="category" /> */}
            {/* <YAxis type="category" label="1000 تومان" />
            <YAxis type="category" label="2000 تومان" />
            <YAxis  label="3000 تومان" /> */}

            <YAxis name="nana" type="category" domain={[0, 1000]} width={100} />

            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="rgba(253, 200, 22, 1)"
              strokeWidth={4}
              fill="rgba(253, 200, 22, 0.6)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
