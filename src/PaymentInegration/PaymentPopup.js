import React, { useState } from 'react'
import { PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector, useDispatch } from 'react-redux'
import { removeTempCourse, confirmOrder } from '../ReduxSlice/UserReduxSlice'
import { useNavigate } from 'react-router-dom';
function PaymentPopup({ propFun }) {
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    const { tempCourse, isLoggedIN } = useSelector((state) => state.AppUser.UserDetails);
    const [PaymentSuccess, setPaymentSuccess] = useState(false)
    const handleCanclePaymentClick = () => {
        propFun();
        dispatch(removeTempCourse());
    }
    const handleNavigateToLogin = (e) => {
        e.preventDefault();
        propFun();
        dispatch(removeTempCourse());
        navigateTo("/user/login")
    }

    const createOrder = (data) => {
        return fetch("http://localhost:5000/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                cart: tempCourse, cartTotalAmount: tempCourse.testPrice
            }),
        })
            .then((response) => response.json())
            .then((order) => order.id);
    };
    const onApprove = (data) => {
        return fetch("http://localhost:5000/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                orderID: data.orderID
            })
        })
            .then((response) => {
                dispatch(confirmOrder(tempCourse));
                setPaymentSuccess(true);
                return response.json()
            });
    };
    return (
        <div className='paymentPopup__Container'>

            <div className="popupBox">
                <h2 className='popupPrice'>{isLoggedIN ? <> Total Price : {tempCourse.testPrice}</> : <>Permission Denied</>}</h2>
                {
                    isLoggedIN ? <>
                        {
                            PaymentSuccess ? <h2>Test Successfully Purchased</h2> : <PayPalButtons className="paypalButtons"
                                createOrder={(data, actions) => createOrder(data, actions)}
                                onApprove={(data, actions) => onApprove(data, actions)}
                            />
                        }
                        <button className='canclePayment' onClick={handleCanclePaymentClick}> Close</button>
                    </> : <button className='loginButton' onClick={handleNavigateToLogin}>Log In</button>
                }
            </div>
        </div>
    )
}

export default PaymentPopup
