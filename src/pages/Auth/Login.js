import React, { useState } from 'react';
import './auth.css'
const Login = () => {
    //const [login,setLogin] = useState('')
    //const [password,setPassword] = useState('')
    const [credentials,setCredentials] = useState({
        login : '',
        password : ''
    })

    const onSubmit = (e) =>{
        e.preventDefault()
        console.log(credentials)
    }

    const onChange = (e) =>{
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <div className='group'>
                <label htmlFor='login'>Identifiant</label>
                <input type="text" name="login" value={credentials.login} onChange={onChange}/>
            </div>
            <div className='group'>
                <label htmlFor='password'>Password</label>
                <input type="password" name="password" value={credentials.password} onChange={onChange}/>
            </div>
            <div className='group'>
                <button>Connexion</button>
            </div>
        </form>
    );
};

export default Login;