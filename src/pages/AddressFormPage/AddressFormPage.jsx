import {useState} from 'react'
import {Link} from 'react-router-dom'
import styles from './AddressFormPage.module.scss'
import LoginPage from '../LoginPage/LoginPage'
import { updateUserInfo } from '../../utilities/users-api.cjs'
export default function AddressForm({user, setUser}){
    console.log('address',user.address)

    const [address,setAddress] = useState({
        street:'',
        city:'',
        state:'',
        zip:''
    })

    function handleChange(e){
        setAddress({...address,[e.target.name]:e.target.value})
        console.log(address)
    }
    function handleSubmit(){
        
    }
    return(
        <div className={styles.AddressPage}>
        {user?
        <form onSubmit={handleSubmit} className={styles.AddressForm} >
            <div className={styles.currentAddress}>
            <h1>Current Address</h1>
            <p className={styles.username}>{user.name}</p>
            <p className={styles.street}>Street: {/*user.address.street*/}</p>
            <p className={styles.city}>City: {/*user.address.city*/}</p>
            <p className={styles.state}>State: {/*user.address.state*/}</p>
            <p className={styles.zip}> Zip: {/*user.address.zip*/}</p>
            
            </div>
            <div className={styles.theForm}>
            <h1>Update Address</h1>
            <h3>
            <span>Default:</span> <img src='https://selenakitt.com/wp-content/files/scamazon.png'/>
            </h3>
            
            <p className={styles.text}>Street </p><input type='text' name="street" onChange={handleChange}  className={styles.inputText} required />
            <p className={styles.text}>City </p><input type='text' name="city" onChange={handleChange}  className={styles.inputText} required />
            <p className={styles.text}>State </p><input type='text' name="state" onChange={handleChange} className={styles.inputText} required />
            <p className={styles.text}>Zip </p><input type='text' name="zip" onChange={handleChange}   className={styles.inputText} required />
            <button type='submit'className={styles.submit} >Add Address</button>
            </div>
            </form>
    :
    <div className={styles.linkDiv}>
    <h1 className={styles.linkToLogin}><Link to='/login'>Please Login to Continue </Link></h1>
    </div>
    }
        </div>
                
            )
        }