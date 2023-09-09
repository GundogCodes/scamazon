import { useState, useEffect } from 'react';
import styles from './WishlistPage.module.scss'
import { getWishlist, setItemQtyInWishlist } from '../../utilities/wishlist-api.cjs';
import LoginPage from '../LoginPage/LoginPage'
import {Link} from 'react-router-dom'
//Import cart


export default function WishlistPage({user}) {

  const [userWishlist, setUserWishlist] = useState ([]) 
  // const [currentUser, setCurrentUser] = useState({})

  useEffect(() => { 
    (async () => {
      const currentWishlist = await getWishlist ()
      setUserWishlist (currentWishlist)
    })
    ()
  })

  // useEffect(() => { 
  //   (async () => {
  //     const currentUser= await getWishlist ()
  //     wishlist.user = currentUser
  //   })
  //   ()
  // })

  return (
    <div className={styles.WishlistPage}>
      {user?
      <>
      <h1>{user.name}'s Wishlist</h1>
      <div className={styles.WishlistItems}>
        {userWishlist}
      </div>
      </>
      :
      <h1>Test</h1>
      // <LoginPage user={user} setUser={setUser}/>
      }
    </div>
  );
}