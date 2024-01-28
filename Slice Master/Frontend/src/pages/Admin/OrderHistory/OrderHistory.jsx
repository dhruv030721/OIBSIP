import React from 'react'
import { useSelector } from 'react-redux'

function OrderHistory() {

    const TotalOrder = useSelector((state) => state.product.orders)
    
  return (
    <div className='w-full'>
      <div className='p-10 flex flex-col'>
        <h2 className='text-orange-300 font-kaushan text-4xl text-center'>Order History</h2>
        <div className='min-h-[1px] bg-gradient-to-r from-bg-gray via-orange-500  to-bg-gray mt-5'></div>
      </div>
      <div className="shadow-xl sm:rounded-lg mx-10 text-white border-orange-500 border-2 mb-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto ">
          <thead className="text-lg bg-dark-blue text-center ">
            <tr>
              <th className="px-6 py-3">
                Status
              </th>
              <th className="px-6 py-3">
                Date
              </th>
              <th className="px-6 py-3">
                Time
              </th>
              <th className="px-6 py-3">
                OrderID
              </th>
              <th className="px-6 py-3">
                Name
              </th>
              <th className="px-6 py-3">
                Amount
              </th>
              <th className="px-6 py-3">
              </th>
            </tr>
          </thead>
          <tbody>
            {TotalOrder !== null && TotalOrder.length > 0 ? (
              TotalOrder.filter((order) => order.status != 'Pending').map((order, index) => (
                <tr key={index} className={`bg-bg-gray text-white text-center`}>
                <td className={`py-2 px-4 ${order.status == "Cancelled" ? "text-red-500" : null} ${order.status == "Completed" ? "text-green-500" : null}`}>{order.status}</td>
                <td className='py-2 px-4'>{order.date}</td>
                <td className='py-2 px-4'>{order.time}</td>
                <td className='py-2 px-4'>{order.orderId}</td>
                <td className='py-2 px-4'>{order.Name}</td>
                <td className='py-2 px-4'>{order.amount} /-</td>
            </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className='py-5 text-xl'>No Orders!</td>
              </tr>
            )}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderHistory
