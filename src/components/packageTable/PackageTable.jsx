import React from 'react'
import Table from 'rc-table'
import './packageTable.scss'

function PackageTable() {
  const columns = [
    {
      title: '',
      dataIndex: '',
      key: 'operations',
      render: () => <button>خرید</button>,
    },
    {
      title: 'تاریخ انقضا بسته',
      dataIndex: 'name',
      key: 'name',
      width: '20vw',
    },
    {
      title: '(تومان)قیمت',
      dataIndex: 'price',
      key: 'price',
      width: '10vw',
    },
    {
      title: 'تخفیف',
      dataIndex: 'off',
      key: 'off',
      width: '20vw',
    },
    {
      title: 'نام بسته',
      dataIndex: 'packageName',
      key: 'packageName',
      width: '10vw',
    },
  ]

  const data = [
    {
      name: '1400/11/02',
      packageName: 'سه ماهه',
      price: '330,000  ',
      off: '20%',
    },
    { name: '1400/12/10', packageName: 'یک هفته', price: '22,000', off: '40%' },
    {
      name: '1401/01/15',
      packageName: 'ترکیبی هفته ای',
      price: '99,000',
      off: '40%',
    },
    {
      name: '1401/02/09',
      packageName: 'یک ماهه',
      price: '220,000',
      off: '40%',
    },
    { name: '1401/03/29', packageName: 'روزانه', price: '19,000', off: '40%' },
  ]

  return (
    <div className="package-table-wrapper">
      <p>!بسته های پیشنهادی مخصوص خود شما</p>
      <Table columns={columns} data={data} className="package-table" />
    </div>
  )
}

export default PackageTable
