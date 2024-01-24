import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Loading} from '../index'

export default function ProtectedAdmin({ children, authentication = true }) {

    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.adminAuth.status);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/admin")
        } else if (!authentication && authStatus !== authentication) {
            navigate("/admin/dashboard")
        }
        setTimeout(() => {
            setLoading(false)
        }, 1000);
    }, [authStatus, navigate, authentication])  



    if (loading) {
        return (
            <div className='w-full'>
                <Loading/>
            </div>
        )
    }
    return <>{children}</>
}
