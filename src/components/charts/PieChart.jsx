import React, { PureComponent } from 'react'
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Label,
} from 'recharts'

const data = [
  { name: 'Group A', value: 40 },
  { name: 'Group B', value: 60 },
]
const COLORS = ['#E4EBEC', '#FDC816']

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-padding-angle-7ux0o'

  render() {
    return (
      <ResponsiveContainer width="95%" height={200}>
        <PieChart onMouseEnter={this.onPieEnter}>
          <Pie
            data={data}
            innerRadius={60}
            outerRadius={80}
            fill=""
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
