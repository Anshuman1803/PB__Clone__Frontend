import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import { userLoginAction } from '../../ReduxSlice/UserReduxSlice'
import { useDispatch } from 'react-redux'
function UserLogin() {
  const navigateTO = useNavigate();
  const dispath = useDispatch();
  const [IsUserLoading, setIsUserLoading] = useState(false)
  // const [IsShowPass, setIsShowPass] = useState(false);
  const [Message, setMessage] = useState({ "msgVal": "" });

  const [userDetails, setUserDetails] = useState({
    "userEmail": "",
    "userPassword": "",
  });

  const handleOnChangeInput = (e) => {
    setMessage({ "msgVal": "" })
    setUserDetails({
      ...userDetails, [e.target.name]: e.target.value
    });
  }

  const handlSIGNINclick = (e) => {
    e.preventDefault();
    if (userDetails.userEmail.length === 0 || userDetails.userPassword.length === 0) {
      setMessage({ "msgVal": "One or more required fields is missing or invalid" });
    } else {
      setIsUserLoading(true)
      axios.post("https://pb-clone.onrender.com/user/login", userDetails).then((response) => {

        if (response.data.UserDetails) {
          dispath(userLoginAction(response.data.UserDetails))
          navigateTO("/");
          setIsUserLoading(false);
          return
        }
        setMessage({ "msgVal": response.data.resMsg })
        setIsUserLoading(false)
      })
    }
  }
  return (
    <form className='userLogin__FORM'>
      <h2 className="userLOGINFORM_Heading">Sign in to your account</h2>

      <div className='form__itemBOX'>
        <input type="email" name='userEmail' id='userEmail' className='formITEM' onChange={handleOnChangeInput} autoComplete='userEmail' />
        <label className='formITEM_LABEL'>Email</label>
      </div>
      <div className='form__itemBOX'>
        <input type="password" name='userPassword' id='userPassword' className='formITEM' onChange={handleOnChangeInput} autoComplete='current-password' />
        <label className='formITEM_LABEL'>Password</label>
      </div>
      <p className="forgetlink">Forgot your password?</p>
      <button className='formCommonBtn singinButton' onClick={handlSIGNINclick}>SIGN IN</button>
      <button className='formCommonBtn loginByOTPBTN'>Login Via OTP</button>

      {
        Message.msgVal && <p className='formResponseMsg'>{Message.msgVal}</p>
      }
      {
        IsUserLoading && <p className='formResponseMsg'>Signing in...</p>
      }
    </form>
  )
}

export default UserLogin
