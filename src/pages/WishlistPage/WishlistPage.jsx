import { useState, useEffect } from 'react';
import styles from './WishlistPage.module.scss'
import { getWishList, addToWishList, removeItem } from '../../utilities/wishList-api.cjs';
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
  //userWishlist.items
  //Image, name, price
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
        <ShowWishlistItems/>
      </div>
      </>
      :
      <h1>Test</h1>
      /* <LoginPage user={user} setUser={setUser}/> */
      }
    </div>
  );
}