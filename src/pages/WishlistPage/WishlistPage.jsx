import { useState, useEffect } from 'react';
import styles from './WishlistPage.module.scss'
import { getWishlist, setItemQtyInWishlist } from '../../utilities/wishlist-api.cjs';
import * as itemsAPI from '../../utilities/items-api.cjs'
import LoginPage from '../LoginPage/LoginPage'
import {Link} from 'react-router-dom'
//Import cart

export default function WishlistPage({user}) {
  const [userWishlist, setUserWishlist] = useState ([]) 
  // function createWishlistItems() {
  //   const wishlistItems = wishlist.items
  //   for (String item : wishlistItems) {}
  // }
//user.req._id

  useEffect(() => { 
    (async () => {
      const currentWishlist = await getWishlist ()
      setUserWishlist (currentWishlist)
    })
    ()
  })
  console.log(user)


  return (
    <div className={styles.WishlistPage}>
      {user?
      <>
      <h1>{user.name}'s Wishlist</h1>
      <div className={styles.WishlistItems}>
        {/* <createWishlistItems> */}
      </div>
      </>
      :
      // <h1>Test</h1>
      <LoginPage user={user} setUser={setUser}/>
      }
    </div>
  );
}