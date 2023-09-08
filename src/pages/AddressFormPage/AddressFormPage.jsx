import {useState} from 'react'
import {Link} from 'react-router-dom'
import styles from './AddressFormPage.module.scss'
import LoginPage from '../LoginPage/LoginPage'
import { updateUserInfo } from '../../utilities/users-api.cjs'

export default function AddressForm({user, setUser}){
    const [gotAddress,setGotAddress] = useState(false)
    const [newAddress,setNewAddress] = useState({
        street:'',
        city:'',
        state:'',
        zip:''
    })
    console.log('init user',user)
    //console.log('user.address',user.address)
    const [address,setAddress] = useState({
        street:'',
        city:'',
        state:'',
        zip:''
    })

    function handleChange(e){
        console.log(address)
        setAddress({...address,[e.target.name]:e.target.value})
    }
    async function handleSubmit(e){
        e.preventDefault()
        try {
        const updatedAddress = await updateUserInfo(user._id, {address})
        console.log('updated Address ',updatedAddress)
        setNewAddress(address)
        } catch (error) {
            
        }
    }
    return(
        <div className={styles.AddressPage}>
        {user?
        <form onSubmit={handleSubmit} className={styles.AddressForm} >
            <div className={styles.currentAddress}>
            <h1>Current Address</h1>
            <p className={styles.username}>{user.name}</p>
            {gotAddress || user.address?
            <>
            <p className={styles.street}>Street: {newAddress.street}</p>
            <p className={styles.city}>City: {newAddress.city}</p>
            <p className={styles.state}>State: {newAddress.state}</p>
            <p className={styles.zip}> Zip: {newAddress.zip}</p>
            </>
            :
            <>
            <p className={styles.street}>Street: </p>
            <p className={styles.city}>City: </p>
            <p className={styles.state}>State: </p>
            <p className={styles.zip}> Zip: </p>
            </>
        }
            
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
            <button  type='submit'className={styles.submit} >Add Address</button>
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