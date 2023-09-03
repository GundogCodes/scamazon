import {useState} from 'react'
import styles from './UserPage.module.scss'
import {Link} from 'react-router-dom'
export default function UserPage({user,setUser}){
    
    return(
        <div className={styles.UserPage} >
            <h1>Hello, {user/*.name*/}</h1>
            <div className={styles.userOptions}>
            
            <h2>Your Account</h2>

                <div className={styles.row1}>
            <Link to='/orders'><h1 style={{color:'Black'}} className={styles.yourOrders} >Your Orders</h1></Link>
            <Link to='/login'><h1 style={{color:'Black'}} className={styles.loginAndSecurity}>Login & Security</h1></Link>
            <Link to='/address'><h1 style={{color:'Black'}}  className={styles.yourAddress}>Your Addresses</h1></Link>

        
                </div>
               
                <div className={styles.row2}>
            <h1 className={styles.yourPayments}>Your Payments</h1>
            <h1 className={styles.customerService}>Customer Service</h1>
            <h1 className={styles.yourMessages}>Your Messages</h1>
                </div>
            </div>
 
        </div>
    )
}