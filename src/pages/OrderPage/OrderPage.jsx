import styles from './OrderPage.module.scss'
import {useState, UseEffect} from 'react'
import {Link} from 'react-router-dom'
import * as ordersAPI from '../../utilities/orders-api'
import Logo from '../../components/Logo/Logo'
import UserLogout from '../../components/LoginForm'
import NavBar from '../../components/NavBar'

export default function OrderPage({user, setUser}) {
    //State
    const [orders, setOrders] = useState([]);
    //Side Effect
        //User Logged In. Default to logout
        //Empty orders
        //
    //Event Handlers
    //Rendered UI
    return(
        <div classname = {styles.OrderPage}>
        OrderPage
        </div>
    )
}