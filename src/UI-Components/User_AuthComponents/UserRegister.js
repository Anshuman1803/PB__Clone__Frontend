import React, { useState } from 'react'
import axios from "axios"
function UserRegister() {
  const [IsUserLoading, setIsUserLoading] = useState(false);
  const [IstermChecked, setTermChecked] = useState(false)
  // const [IsShowPass, setIsShowPass] = useState(false);
  const [Message, setMessage] = useState({ "msgVal": "" });

  const [userDetails, setUserDetails] = useState({
    "userName": "",
    "userEmail": "",
    "userPhone": "",
    "userPassword": "",
    "userCollege": "",
    "userPassingYear": "",
  });

  const handlecheckedMark = (e) => {
    setTermChecked(!IstermChecked);
    setMessage({ "msgVal": "" })
  }
  const handleOnChangeInput = (e) => {
    setMessage({ "msgVal": "" })
    setUserDetails({
      ...userDetails, [e.target.name]: e.target.value
    });
  }

  const handleSignUPClick = (e) => {
    e.preventDefault();
    if (userDetails.userEmail.length === 0 || userDetails.userPassword.length === 0 || userDetails.userCollege.length === 0 || userDetails.userName.length === 0 || userDetails.userPassingYear.length === 0 || !IstermChecked) {
      setMessage({ "msgVal": "One or more required fields is missing or invalid" });
    }
    else {
      setIsUserLoading(true)
      axios.post("http://localhost:5000/user/register", userDetails).then((response) => {
        setMessage({ "msgVal": response.data.resMsg })
        setIsUserLoading(false)
      })
    }
  }
  return (
    <form className='userLogin__FORM userRegister__Form'>
      <h2 className="userLOGINFORM_Heading">Create your new account</h2>

      <div className='form__itemBOX'>
        <input type="text" name='userName' id='userName' className='formITEM' autoComplete='userName' onChange={handleOnChangeInput} />
        <label className='formITEM_LABEL'>Name</label>
      </div>

      <div className='form__itemBOX'>
        <input type="email" name='userEmail' id='userEmail' className='formITEM' autoComplete='userEmail' onChange={handleOnChangeInput} />
        <label className='formITEM_LABEL'>Email</label>
      </div>

      <div className='form__itemBOX'>
        <input type="number" name='userPhone' id='userPhone' className='formITEM' autoComplete='current-password' onChange={handleOnChangeInput} />
        <label className='formITEM_LABEL'>Phone no.</label>
      </div>


      <div className='form__itemBOX'>
        <input type="password" name='userPassword' id='userPassword' className='formITEM' autoComplete='current-password' onChange={handleOnChangeInput} />
        <label className='formITEM_LABEL'>Password</label>
      </div>

      <div className="form__ITEMBOX_Container">
        <div className='form__itemBOX'>
          <input type="text" name='userCollege' id='userCollege' className='formITEM' autoComplete='userCollege' onChange={handleOnChangeInput} />
          <label className='formITEM_LABEL'>College</label>
        </div>

        <div className='form__itemBOX'>
          <input type="number" name='userPassingYear' id='userPassingYear' className='formITEM' autoComplete='userCollege' onChange={handleOnChangeInput} />
          <label className='formITEM_LABEL'>Year</label>
        </div>
      </div>

      <div className="term_ConditionBox" style={{ "fontSize": "16px" }}>

        <input type="checkbox" name='termCheckbox' onClick={handlecheckedMark} /> I agree to the <span style={{ "color": "#4b8ce8" }}>terms and conditions.</span>
      </div>
      <button className='formCommonBtn singinButton signupButton' onClick={handleSignUPClick} >SIGN UP</button>

      {
        Message.msgVal && <p className='formResponseMsg'>{Message.msgVal}</p>
      }
      {
        IsUserLoading && <p className='formResponseMsg'>Registering...</p>
      }
    </form>
  )
}

export default UserRegister
