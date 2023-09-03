import {useState} from 'react'
import styles from './AddressFormPage.module.scss'
export default function AddressForm(){
    const [address,setAddress] = useState({
        address:'',
        city:'',
        state:'',
        zip:''
    })
    return(
        <form className={styles.AddressForm} >
            <div className={styles.theForm}>
                <h3><span>Default:</span> Scamazon</h3>
            <h1>Update Your Address</h1>

            <p className={styles.text}>Address </p><input type='text' name="street" value={address.street}  className={styles.inputText} required />
            <p className={styles.text}>City </p><input type='text' name="city" value={address.city}  className={styles.inputText} required />
            <p className={styles.text}>State </p><input type='text' name="state" value={address.state}  className={styles.inputText} required />
            <p className={styles.text}>Zip </p><input type='text' name="zip" value={address.zip}  className={styles.inputText} required />
            <button type='submit'className={styles.submit} >Add Address</button>
            </div>
        </form>
    )
}