import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Loading } from '../index'

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
            <Loading message="Wait for a moment" />
        )
    }

    return <>{children}</>;
}
