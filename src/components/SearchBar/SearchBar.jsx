import { useEffect, useState } from 'react'
import { getUser } from '../../utilities/users-service.cjs'
import styles from './SearchBar.module.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
export default function SearchBar({ searchableItems, user, setUser }) {
   // console.log('searchableItems', searchableItems)
   //console.log('searchableItems in SB', searchableItems)
   const [matchedSearches,setMatchedSearches] = useState(null)
   const navigate = useNavigate()
    const [userSearch,setUserSearch] = useState('')
    
    //console.log('itemsArr', itemsArr) //this returns the array properly
    //console.log('itemsArr', itemsArr[2].name) this returns name properly
    //console.log(user)
    const itemNameAndIdArr = []
    const itemNameArr = []

    
    for(let items of searchableItems){
        //console.log(items.name)
        itemNameArr.push(items.name)
        itemNameAndIdArr.push(items.name)
        
    }

    function handleChange(e){
        setUserSearch(e.target.value)
        console.log(userSearch)
    }

    function handleButtonClick(){
        const foundSearches = []
        for(let item of itemNameArr){
            if(item.toLowerCase().includes(userSearch.toLowerCase())){
                console.log('yes!',item, 'exists!')
                foundSearches.push(item)
                setMatchedSearches(foundSearches)
            } else{
                console.log('nah sorry no matches for that homie')
            }
        }
        console.log('foundSearches', foundSearches)
        }
    
    
    console.log('itemNameArr', itemNameArr[0])



    
    
    return (
        <div className={styles.SearchBar}>

            <Link to='/'><img src='https://selenakitt.com/wp-content/files/scamazon.png' /></Link>

            <Link to='/address'><div className={styles.deliverDiv}>
                Deliver to {user.name}
                <span>{user.address.city} {user.address.zip}</span>
            </div></Link>

            <section>
                <input type='search' onChange={handleChange} defaultValue='  Search Scamazon.com'  />
                <button onClick={handleButtonClick} ></button>
        
            </section>

            <Link to='/user'><div className={styles.toUser}>
                Hello, {user.name}
                <span>View Account</span>
            </div></Link>

            <Link to='/orders'><div className={styles.toOrders}>
                Returns
                <span>& Orders</span>
            </div></Link>

            <Link to='/cart'><div className={styles.toCart}>
                <div className={styles.cartImg}></div>
                <span>Cart</span>
            </div></Link>

        </div>
    )
}