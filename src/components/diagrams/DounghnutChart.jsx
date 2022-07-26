import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import './diagram.css'

const options = {
  cutout: 40,
  cutoutPercentage: 85,
}

export const data = {
  labels: ['باقی مانده', 'مصرف شده'],
  datasets: [
    {
      label: '# of Votes',
      data: [3, 7],
      backgroundColor: ['rgba(253, 200, 22, 1)', 'rgba(228, 235, 236, 1)'],
      borderColor: ['rgba(253, 200, 22, 1)', 'rgba(228, 235, 236, 1)'],
      borderWidth: 1,
    },
  ],
}

function DoughnutChart({ width }) {
  return (
    <div className='doughnut-chart-wrapper'>
      <p>شارژ باقی مانده سیمکارت</p>
    <div style={{ width }} className="doughnut-chart">
      <p>6000 تومان</p>
      <Doughnut data={data} options={options} />
    </div>
       <strong>!سیمکارتت رو شارژ کن</strong>
       </div>

  )
}

export default DoughnutChart
