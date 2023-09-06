import {useState} from 'react'
import {Link} from 'react-router-dom'
import styles from './AddressFormPage.module.scss'
import LoginPage from '../LoginPage/LoginPage'
export default function AddressForm({user, setUser}){

    const [address,setAddress] = useState({
        address:'',
        city:'',
        state:'',
        zip:''
    })

   
    return(
        <div className={styles.AddressPage}>
        {user?
        <form className={styles.AddressForm} >
            <div className={styles.currentAddress}>
            <h1>Current Address</h1>
            <p className={styles.username}>{user.name}</p>
            <p className={styles.street}>{/*user.address.street*/}</p>
            <p className={styles.city}>{/*user.address.city*/}</p>
            <p className={styles.state}>{/*user.address.state*/}</p>
            <p className={styles.zip}>{/*user.address.zip*/}</p>
            <p className={styles.phone}>{/*user.phoneNumber*/}</p>
            
            </div>
            <div className={styles.theForm}>
            <h1>Add Address</h1>
            <h3>
            <span>Default:</span> <img src='https://selenakitt.com/wp-content/files/scamazon.png'/>
            </h3>
            
            <p className={styles.text}>Address </p><input type='text' name="street"   className={styles.inputText} required />
            <p className={styles.text}>City </p><input type='text' name="city"  className={styles.inputText} required />
            <p className={styles.text}>State </p><input type='text' name="state"   className={styles.inputText} required />
            <p className={styles.text}>Zip </p><input type='text' name="zip"   className={styles.inputText} required />
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