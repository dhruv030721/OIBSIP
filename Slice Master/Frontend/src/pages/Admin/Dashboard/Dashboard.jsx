import React, { useCallback, useEffect } from 'react'
import DetailCard from './DetailCard'
import { useDispatch, useSelector } from 'react-redux'
import adminService from '../../../services/adminService'
import { addOrders } from '../../../store/productSlice'
import { addOrderDataError } from '../../../store/errorSlice'
import { MdOutlineRefresh } from "react-icons/md";


function Dashboard() {

  const TotalIngredients = useSelector((state) => state.product.ingredients)
  const TotalItems = useSelector((state) => state.product.items)
  const TotalOrder = useSelector((state) => state.product.orders)
  const dispatch = useDispatch();


  const RefershDashboard = useCallback(async () => {
    try {
      const OrderResponse = await adminService.GetOrder();
      dispatch(addOrders(OrderResponse.data.orders))
    } catch (error) {
      console.error("Error fetching items:", error);
      dispatch(addOrderDataError({ message: error.response.statusText, statusCode: error.response.status }))
    }
  }, [TotalOrder]
  )


  return (
    <div className='w-full'>
      <div className='p-10 flex flex-col'>
        <h2 className='text-orange-300 font-kaushan text-4xl text-center'>Dashboard</h2>
        <div className='min-h-[1px] bg-gradient-to-r from-bg-gray via-orange-500  to-bg-gray mt-5'></div>
      </div>
      <div className='text-white text-xl items-center justify-center flex p-10 space-x-5'>
        <DetailCard value={`Total Orders : ${TotalOrder !== null ? TotalOrder.length : 0}`} />
        <DetailCard value={`Total Items : ${TotalItems !== null ? TotalItems.length : 0}`} />
        <DetailCard value={`Total Available Ingredients : ${TotalIngredients !== null ? TotalIngredients.length : 0}`} />
      </div>
      <div className='text-white flex text-xl space-x-2 justify-end pr-10 cursor-pointer group' onClick={RefershDashboard}>
        <h1>Refresh</h1>
        <button><MdOutlineRefresh size={25} color='white' className='group-checked:animate-rotate' /></button>
      </div>

      <div className="relative overflow-x-auto shadow-xl sm:rounded-lg mx-10 text-white border-orange-500 border-2 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto">
          <thead className="text-lg bg-dark-blue text-center ">
            <tr>
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
            </tr>
          </thead>
          <tbody>
            {TotalOrder !== null && TotalOrder.length > 0 ? (
              TotalOrder.map((order, index) => (
                <tr key={index} className={`bg-bg-gray text-white text-center`}>
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

    </div >
  )
}

export default Dashboard
