import { useEffect, useState } from "react"
import config from '../../../config/config'
import axios from "axios"
import productService from "../../services/productService";
import toast from 'react-hot-toast'
import {useDispatch} from 'react-redux'
import { emptyCart } from "../../store/cartSlice";

function Invoice({
  name, email, contactNumber, cartData
}) {

  const [subTotal, setsubTotal] = useState(0);
  const [gst, setGST] = useState(0);
  const packageCharge = 10
  const [grandTotal, setGrandTotal] = useState(0);
  const dispatch = useDispatch();


  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const body = {
      amount: grandTotal,
    }

    // creating a new order
    const result = await axios.post("/api/v1/payment", body);

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data.order;

    const options = {
      key: config.razorpay_key,
      amount: amount.toString(),
      currency: currency,
      name: { name },
      description: "Test Transaction",
      order_id: order_id,
      handler: async function (response) {
        const responseData = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const orderItem = cartData.map((item) => {
          return {
            item_name: item.item.name,
            item_quantity: item.quantity,
            item_ingredients: [
              item.item.crust,
              item.item.topping,
              item.item.size
            ]
          }
        })

        const data = {
          orderId: responseData.orderCreationId,
          name : name,
          orderItem: orderItem,
          amount : amount,
          date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          }),
          time:new Date().toLocaleTimeString(),
        }

        try {
          await toast.promise(
            productService.addOrder(data),
            {
              loading: 'Processing...',
              success: (response) => {
                dispatch(emptyCart())
                return `${response.message}`;
              },
              error: (error) => {
                return `${error.response.data.message}`
              },
            }
          );
        } catch (error) {
          console.error(error);
        }

      },
      prefill: {
        name: { name },
        email: { email },
        contact: { contactNumber },
      },
      notes: {
        address: "Surat",
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  useEffect(() => {

    let total = 0;
    let gstval = 0;

    cartData.forEach(element => {
      total += element.totalPrice
    });

    setsubTotal(total)

    gstval = (total * 5) / 100
    setGST(gstval)

    setGrandTotal(total + gst + packageCharge)

  })




  return (
    <div className='w-full text-white'>
      <section className='px-5'>
        <h2 className='text-white font-bold drop-shadow-3xl text-3xl font-poppins text-center'>Invoice</h2>
        <div className='w-full mt-3 h-[0.1px] bg-orange-500'></div>
      </section>
      <section className='mt-10 ml-5'>
        {/* User Details */}
        <div className='flex flex-col space-y-5 text-lg'>
          <div className='flex space-x-2'>
            <p className=''>Name : </p>
            <p className='border-b-2 border-white border-dashed italic'>{name}</p>
          </div>
          <div className='flex space-x-2'>
            <p className=''>Email : </p>
            <p className='border-b-2 border-white border-dashed italic'>{email}</p>
          </div>
          <div className='flex space-x-2'>
            <p className=''>Contact : </p>
            <p className='border-b-2 border-white border-dashed italic'>{contactNumber}</p>
          </div>
        </div>
        {/* Item Table */}
        <section className='mt-10 mx-10'>
          <table className='w-full table-fixed text-center'>
            <thead className='border-b-2 border-dashed'>
              <tr>
                <th className='py-4'>Item</th>
                <th className='py-4'>Price</th>
                <th className='py-4'>Quantity</th>
                <th className='py-4'>Total</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item) => (
                <tr key={item.item.name} className="">
                  <td className='pb-2 pt-3'>{item.item.name}</td>
                  <td>&#8377; {item.item.price}</td>
                  <td>{item.quantity}</td>
                  <td>&#8377; {item.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </section>
      <section>
        <div className="border-t-2 border-dashed mt-10 mx-10"></div>
        <div className="flex flex-col items-end pr-14 mt-5 space-y-5 text-xl">
          <div className='flex space-x-2'>
            <p className=''>Subtotal : </p>
            <p className='border-b-2 border-white border-dashed italic'>&#8377; {subTotal} /-</p>
          </div>
          <div className='flex space-x-2'>
            <p className=''>GST @5% : </p>
            <p className='border-b-2 border-white border-dashed italic'>&#8377; {gst} /-</p>
          </div>
          <div className='flex space-x-2'>
            <p className=''>Packaging Charge : </p>
            <p className='border-b-2 border-white border-dashed italic'>&#8377; {packageCharge} /-</p>
          </div>
          <div className='flex space-x-2'>
            <p className=''>Grand Total : </p>
            <p className='border-b-2 border-white border-dashed italic'>&#8377; {grandTotal} /-</p>
          </div>
          <button className="py-3 px-5 border-4 border-dashed rounded-xl border-orange-500 hover:bg-orange-950 tbodyansition-all" onClickCapture={displayRazorpay}>Place Order</button>
        </div>
      </section>
    </div>
  )
}

export default Invoice
