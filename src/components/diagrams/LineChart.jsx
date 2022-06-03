import React from 'react'
import { Line } from 'react-chartjs-2'

const dataObj = {
  '7/11': 1000,
  '7/25': 2000,
  '7/31': 1500,
  '8/2': 3000,
  '8/25': 2200,
  '8/44': 3000,
}

const data = {
  labels: Object.keys(dataObj),
  datasets: [
    {

      data: Object.values(dataObj),
      label: 'میزان مصرف',
      backgroundColor: 'rgba(253, 200, 22,0.3) ',
      borderColor: 'rgba(253, 200, 22, 1)',
      borderWidth: 2,
    },
  ],
}

function LineChart(props) {
  return <div className='line-chart-wrapper'>
    <p >
      نمودار میزان مصرف کل
    </p>
     <Line height={100} data={data} {...props} />
  </div>
 
}

export default LineChart
