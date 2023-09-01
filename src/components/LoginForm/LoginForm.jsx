import { useState } from 'react';
import * as usersService from '../../utilities/users-service';
import styles from './LoginForm.module.scss'; 

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        name: '', 
        email: '',
        password: ''
    })
    const [error, setError] = useState('')

    function handleChange(e) {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setError('')
    }

    async function handleSubmit(e) {
        e.preventDefault(); 
        try {
            const user = await usersService.login(credentials)
            setUser(user)
        } catch  {
            setError('Login Failed')
        }
    }

    return (
        <div>
            <div className={styles['form']}>
                <form onSubmit={handleSubmit}>
                    <label className='name'>Name</label>
                    <input type="text" name="name" value={credentials.name} onChange={handleChange} required />
                    <label className='email'>Email</label>
                    <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
                    <label className='password'>Password</label>
                    <input type="text" name="password" value={credentials.password} onChange={handleChange} required />
                    <button type="submit">Log In to Scamazon</button>
                </form>
            </div>
            <p className='error-message'>{error}</p>
        </div>
    )
}