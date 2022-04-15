import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import CheckLogin from '../context/checkLogin';

const Login = () => {
    const navigate = useNavigate()
    const {userLogin, setUserLogin} = useContext(CheckLogin)
    const handelSubmit = () => {
        setUserLogin(true)
        navigate('/invoice', {state: 'wellcome !', replace: true})
    }
    console.log('login')

    return (
        <div>
            <form>
                <input type='text' placeholder='userName'/>
                <button onClick={handelSubmit}>submit</button>
            </form>
        </div>
    );
}

export default Login;
