import { useState, useEffect } from 'react';
import styles from './WishlistPage.module.scss'
import { getWishList, addToWishList, removeItem } from '../../utilities/wishList-api.cjs';
// import * as addToCart from '../ItemPage/Itempage.jsx'
import { addToCart, getCart } from '../../utilities/orders-api.cjs'
import LoginPage from '../LoginPage/LoginPage'
import {Link} from 'react-router-dom'

export default function WishlistPage({user}) {
  const [userWishlist, setUserWishlist] = useState ([]) 
  
  useEffect(() => { 
    (async () => {
      const currentWishlist = await getWishList ()
      setUserWishlist (currentWishlist)
    })
    ()
  })
  // console.log(userWishlist)
  //Image, name, price
  const items = userWishlist.items
  const wishlistItems = items?.map(wishlistItem => {
    <div key={wishlistItem._id}>
      <div classname={styles.wishlistItem}>
        <link to={`/item/${wishlistItem._id}`}>
          <img src={wishlistItem.image} className={styles.image} alt={wishlistItem.name} />
        </link>
        <p>Name: {wishlistItem.name}</p>
        <p>Price: ${wishlistItem.price.toFixed(2)}</p>
        <button onClick={() => removeItem(wishlistItem._id)}>Remove Item</button>
        <button onClick={() => addToCart(wishlistItem._id, wishlistItem.delete)}>Add to Cart</button>
      </div>
    </div>
  })
  console.log(userWishlist.item)
  console.log(wishlistItems)

  // const wishlistItemContainer = document.querySelector(".container")
  // function ShowWishlistItems() {
  //   items.map ((Item) => {
  //     return(
  //       <Item 
  //         name={item.name}
  //         price={item.price}
  //         image={item.image}
  //       />
  //     )
  //   })
  //   ()

    // for (i=0; i<items.length-1; i++) {
    //   const wishlistItem = document.createElement("div")
    //   wishlistItem.setAttribute("class", "itemContainer")
    //   wishlistItemContainer.append(wishlistItem)
    // }
  // }
//user.req._id


  return (
    <div className={styles.WishlistPage}>
      {user?
      <>
      <h1>{user.name}'s Wishlist</h1>
      <div id= "container" className={styles.WishlistContainer}>
        {!userWishlist || !items || items.length === 0 ? 
          (<div>Wishlist is empty :(</div>)
          :
          ({wishlistItems})
        }
      </div>
      </>
      :
      // <h1>Test</h1>
      <LoginPage user={user} setUser={setUser}/>
      }
    </div>
  );
}