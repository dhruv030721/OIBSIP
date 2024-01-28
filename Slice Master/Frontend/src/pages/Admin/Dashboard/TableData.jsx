import React, { useState } from 'react'
import { Select } from '../../../components'
import toast from 'react-hot-toast'
import adminService from '../../../services/adminService'
import { IoIosArrowDropright } from "react-icons/io";
import { RxCrossCircled } from "react-icons/rx";


function TableData({ order, index, Refresh }) {

    const [isActive, setActive] = useState(false)

    const ActiveHandler = () => {
        setActive((prev) => prev = !prev)
    }

    const ChangeStatusHandler = async (statusValue) => {
        try {
            await toast.promise(
                adminService.ChangeOrderStatus(order._id, statusValue),
                {
                    loading: "Processing...",
                    success: (response) => {
                        Refresh();
                        return `${response.message}`
                    }, error: (error) => {
                        return `${error.response.data.message}`
                    }
                },
            )
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <tr key={index} className={`bg-bg-gray text-white text-center`}>
            <td className='py-2 px-4'>{order.status}</td>
            <td className='py-2 px-4'>{order.date}</td>
            <td className='py-2 px-4'>{order.time}</td>
            <td className='py-2 px-4'>
                <div className='flex-col justify-center items-center space-y-4 relative'>
                    <div className={`flex items-center justify-center space-x-2  ${isActive ? "hidden" : ""}`} onClick={ActiveHandler}>
                        <p>{order.orderId}</p>
                        <IoIosArrowDropright size={20} />
                    </div>
                    <div className={`bg-dark-blue px-5 flex justify-between py-5 rounded-xl right-[100% top-0 z-40 ${isActive ? "" : "hidden"}`}>
                        <div className='flex flex-col space-y-2'>
                            {order.orderItem.map((item) => (
                                <p key={item.item_name} className='text-left'>{item.item_name} x {item.item_quantity}</p>
                            ))}
                        </div>
                        <div className='flex justify-end' onClick={ActiveHandler}>
                            <RxCrossCircled size={20} />
                        </div>
                    </div>
                </div>
            </td>
            <td className='py-2 px-4'>{order.Name}</td>
            <td className='py-2 px-4'>{order.amount} /-</td>
            <td className='py-2 px-4'><Select options={['Pending', 'Cancelled', 'Completed']} onChange={(e) => { ChangeStatusHandler(e.target.value) }} /></td>
        </tr>
    )
}

export default TableData
