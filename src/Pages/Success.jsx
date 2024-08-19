import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';

export const Success = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [loading, setLoading] = useState(true);

    // Extract session_id from URL query parameters
    const query = new URLSearchParams(location.search);
    const sessionId = query.get('session_id');

    useEffect(() => {
        const verifyPayment = async () => {
            try {
                setLoading(true);
                // Call your backend to verify payment status
                const response = await axios.get('http://localhost:5300/paymentRouter/success', {
                    params: { session_id: sessionId }
                });
                setPaymentStatus(response.data.status || 'failed'); // Default to 'failed' if no status
            } catch (error) {
                console.error('Error verifying payment:', error);
                setPaymentStatus('failed');
            } finally {
                setLoading(false);
            }
        };

        if (sessionId) {
            verifyPayment();
        } else {
            setPaymentStatus('failed');
            setLoading(false); // Stop loading if no session ID
        }
    }, [sessionId]);

    const handleClick = () => {
        navigate('/');
    };

    if (loading) return <p>Loading...</p>;

    return (
        <div className='text-center'>
            {paymentStatus === 'completed' ? (
                <>
                      <h2>Payment Failed</h2>
                      <p>There was an issue with your payment. Please try again.</p>
                </>
            ) : (
                <>
                  
                    <h2>Payment Successful</h2>
                    <p>Your payment was successful! Thank you for your purchase.</p>
                </>
            )}
            <button onClick={handleClick}>Go to Home</button>
        </div>
    );
};
