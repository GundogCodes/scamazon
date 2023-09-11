import { useState, useEffect } from 'react';
import styles from './WishlistPage.module.scss'
import { getWishList, addToWishList, removeItem } from '../../utilities/wishList-api.cjs';
import * as addToCart from '../ItemPage/Itempage.cjs'
import * as itemsAPI from '../../utilities/items-api.cjs'
import LoginPage from '../LoginPage/LoginPage'
import {Link} from 'react-router-dom'
//Import cart

export default function WishlistPage({user}) {
  const [userWishlist, setUserWishlist] = useState ([]) 
  const items = userWishlist.items
  // const wishlistItemContainer = document.querySelector(".container")
  
  useEffect(() => { 
    (async () => {
      const currentWishlist = await getWishList ()
      setUserWishlist (currentWishlist)
    })
    ()
  })
  // console.log(userWishlist)
  //Image, name, price
    const wishlistItems = items.map(wishlistItem => {
      <div key={wishlistItem._id}>
        <div classname={styles.wishlistItem}>
          <link to={`/item/${wishlistItem.item._id}`}>
            <img src={wishlistItem.item.image} className={styles.image} alt={wishlistItem.item.name} />
          </link>
          <p>Name: {wishlistItem.item.name}</p>
          <p>Price: ${wishlistItemitem.price.toFixed(2)}</p>
          <button onClick={() => removeItem(wishlistItem._id)}>Remove Item</button>
          <button onClick={() => handleAddToCart(wishlistItem._id, wishlistItem.delete)}>Add to Cart</button>
        </div>
      </div>
    })

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
        {wishlistItems}
      </div>
      </>
      :
      <h1>Test</h1>
      /* <LoginPage user={user} setUser={setUser}/> */
      }
    </div>
  );
}