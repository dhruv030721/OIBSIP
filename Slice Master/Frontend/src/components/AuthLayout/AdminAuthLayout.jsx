import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ProtectedAdmin({children, authentication = true}) {

    const navigate = useNavigate();
    const authStatus = useSelector((state) => state.adminAuth.status);


    useEffect(() => {
        if(authentication && authStatus !== authentication){
            navigate("/admin")
        } else if(!authentication && authStatus !== authentication){
            navigate("/admin/dashboard")
        }
    }, [authStatus, navigate, authentication])

    return <>{children}</>
}
