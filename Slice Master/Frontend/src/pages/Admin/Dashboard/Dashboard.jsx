import React, { useCallback, useEffect, useState } from 'react'
import DetailCard from './DetailCard'
import { useDispatch, useSelector } from 'react-redux'
import adminService from '../../../services/adminService'
import { addOrders } from '../../../store/productSlice'
import { addOrderDataError } from '../../../store/errorSlice'
import { MdOutlineRefresh } from "react-icons/md";
import TableData from './TableData'
import { socket } from '../Admin'

function Dashboard() {

  const TotalIngredients = useSelector((state) => state.product.ingredients)
  const TotalItems = useSelector((state) => state.product.items)
  const TotalOrder = useSelector((state) => state.product.orders)
  const dispatch = useDispatch();
  const [rotate, setRotate] = useState(false);

  const RefreshDashboard = useCallback(async () => {
    try {
      setRotate(true)
      const OrderResponse = await adminService.GetOrder();
      dispatch(addOrders(OrderResponse.data))
      setRotate(false)
    } catch (error) {
      console.error("Error fetching items:", error);
      dispatch(addOrderDataError({ message: error.response.statusText, statusCode: error.response.status }))
    }
  }, [TotalOrder]
  )

  useEffect(() => {
    socket.on('newOrder', () => {
      RefreshDashboard();
    })
  }, [TotalOrder, dispatch])


  return (
    <div className='w-full'>
      <div className='p-10 flex flex-col'>
        <h2 className='text-orange-300 font-kaushan text-4xl text-center'>Dashboard</h2>
        <div className='min-h-[1px] bg-gradient-to-r from-bg-gray via-orange-500  to-bg-gray mt-5'></div>
      </div>
      <div className='text-white text-xl items-center justify-cente r flex p-10 space-x-5'>
        <DetailCard value={`Total Orders : ${TotalOrder !== null ? TotalOrder.length : 0}`} />
        <DetailCard value={`Total Items : ${TotalItems !== null ? TotalItems.length : 0}`} />
        <DetailCard value={`Total Available Ingredients : ${TotalIngredients !== null ? TotalIngredients.length : 0}`} />
      </div>
      <div className='flex justify-between'>
        <div>
            <h1 className='text-white text-2xl ml-10 py-5'>Order List : </h1>
        </div>
        <div className='text-white flex text-xl items-center space-x-2 pr-10 cursor-pointer group' onClick={RefreshDashboard}>
          <h1>Refresh</h1>
          <button><MdOutlineRefresh size={25} color='white' className={`${rotate ? "animate-spin" : ""}`} /></button>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-xl sm:rounded-lg mx-10 text-white border-orange-500 border-2 mb-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table-auto min-h-32">
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
              TotalOrder.filter((order) => order.status == 'Pending').map((order, index) => (
                <TableData key={order._id} order={order} index={index} Refresh={RefreshDashboard} />
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
