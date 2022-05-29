import React from 'react'

function SuggestPackages() {
  const mockRowData = [
    {
      date: '14 شهریور 1401',
      packageTime: 'بسته اینترنت سه‌ماهه',
      off: '20%',
      sum: '130،000',
    },
    {
      date: '12 خرداد 1401',
      packageTime: 'بسته ترکیبی هفته‌ای',
      off: '45%',
      sum: '45،000',
    },
    {
      date: '15 تیر 1401',
      packageTime: 'بسته اینترنت یکماهه',
      off: '50%',
      sum: '50،000',
    },
  ]
  return (
    <div>
      <table dir="rtl">
        <tr>
          <th>تاریخ انقضا بسته</th>
          <th>نام بسته</th>
          <th>تخفیف</th>
          <th>قیمت</th>
          <th></th>
        </tr>

        {mockRowData.map((item) => (
          <tr>
            <td>{item.date}</td>
            <td>{item.packageTime}</td>
            <td  dir="ltr">
              {item.off}
            </td>
            <td>{item.sum}</td>
            <td>
                <button className='buy-button'>
خرید
                </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}

export default SuggestPackages
