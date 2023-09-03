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
            <div className={styles.currentAddress}>
                <h1>Current Address</h1>
                <p className={styles.username}>User Name</p>
                <p className={styles.street}>123 Street</p>
                <p className={styles.city}>City</p>
                <p className={styles.state}>State</p>
                <p className={styles.zip}>Zip</p>
                <p className={styles.phone}>Phone number: 7801231234</p>

            </div>
            <div className={styles.theForm}>
            <h1>Add Address</h1>
                <h3>
                    <span>Default:</span> <img src='https://selenakitt.com/wp-content/files/scamazon.png'/>
                </h3>

            <p className={styles.text}>Address </p><input type='text' name="street" value={address.street}  className={styles.inputText} required />
            <p className={styles.text}>City </p><input type='text' name="city" value={address.city}  className={styles.inputText} required />
            <p className={styles.text}>State </p><input type='text' name="state" value={address.state}  className={styles.inputText} required />
            <p className={styles.text}>Zip </p><input type='text' name="zip" value={address.zip}  className={styles.inputText} required />
            <button type='submit'className={styles.submit} >Add Address</button>
            </div>
        </form>
    )
}