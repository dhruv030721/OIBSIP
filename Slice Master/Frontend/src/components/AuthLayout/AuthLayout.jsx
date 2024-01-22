import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LottieAnimation } from '../index'
import DeliveryBoy from '../../assets/jsons/deliveryboy.json'

export default function Protected({ children, authentication = true }) {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.auth.status);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (authentication && !authStatus) {
            navigate("/login");
        } else if (!authentication && authStatus) {
            navigate("/");
        }

        setLoading(false);
    }, [authStatus, navigate, authentication]);


    if (loading) {
        return (
            <div className='min-h-screen bg-bg-gray text-orange-500 flex flex-col items-center justify-center font-poppins text-4xl'>
                <h2 className='font-bold drop-shadow-3xl'>Wait for a moment!</h2>
                <LottieAnimation json={DeliveryBoy} divclassName='max-w-[30%]' />
            </div>
        )
    }

    return <>{children}</>;
}
