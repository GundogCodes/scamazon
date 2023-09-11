import { useEffect, useState, useRef } from 'react'
import { getUser } from '../../utilities/users-service.cjs'
import styles from './SearchBar.module.scss'
import { Link ,useNavigate} from 'react-router-dom'
export default function SearchBar({ searchableItems, user, setUser }) {
   // console.log('searchableItems', searchableItems)
   //console.log('searchableItems in SB', searchableItems)
    const [matchedSearches,setMatchedSearches] = useState([])
    const navigate = useNavigate()
    const inputBar = useRef(null)
    const [userSearch,setUserSearch] = useState('')
    
    console.log('searchableItems', searchableItems) //this returns the array properly
    //console.log('itemsArr', itemsArr[2].name) this returns name properly
    //console.log(user)
    const itemIdArr = []
    const itemNameArr = []

    
    for(let item of searchableItems){
        //console.log(item._id)
        itemNameArr.push(item.name)
        itemIdArr.push(item._id)
        
    }
    //console.log('itemNameArr ', itemNameArr)
    //console.log('itemIdArr ', itemIdArr)
    function handleChange(e){
        const foundSearchedItem = []
        setUserSearch(e.target.value)
        console.log('user is typing: ',userSearch)
        if(userSearch === '' || userSearch === '  Search Scamazon.com'){
            return
        } else{
            for(let name of itemNameArr){
                
                if(name.toLowerCase().includes(userSearch.toLowerCase())){
                    //console.log('search matches this item: ', name)
                    foundSearchedItem.push(name)
                    setMatchedSearches(foundSearchedItem)
                }
            }
        }
    }
    console.log('matched Search items: ',matchedSearches)
    //console.log('itemandNumArr', itemIdArr)
    
    function handleButtonClick(){
        console.log('button clicked: ',inputBar.current.value)
    }
    
    
    
    return (
        <div className={styles.SearchBar}>

            <Link to='/'><img src='https://selenakitt.com/wp-content/files/scamazon.png' /></Link>

            <Link to='/address'><div className={styles.deliverDiv}>
                {user?
                <>
                Deliver to {user.name}
                <span>{user.address.city} {user.address.zip}</span>
                </>
                :
                <>Sign in</>
            }
            </div></Link>

            <section>
                <input ref={inputBar} type='search' onChange={handleChange} defaultValue='  Search Scamazon.com'  />
                <button onClick={handleButtonClick} ></button>
            </section>
                

            <Link to='/user'><div className={styles.toUser}>
                {user?
                <>
                Hello, {user.name}
                <span>View Account</span>
                </>
                :
                <>Sign in to view Account</>
            }
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