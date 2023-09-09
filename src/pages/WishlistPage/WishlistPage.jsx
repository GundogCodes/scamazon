// import { useState, useEffect, useRef } from 'react';
import { useState, useEffect } from 'react';
import styles from './WishlistPage.module.scss'
import * as itemsAPI from '../../utilities/items-api.cjs';
import * as wishlistAPI from '../../utilities/wishlist-api.cjs';
import { Link, useNavigate } from 'react-router-dom';
import WishlistDetail from '../../components/OrderDetail/OrderDetail';




export default function WishlistPage({ user, setUser }) {
    const [menuItems, setMenuItems] = useState([]);
    // const [activeCat, setActiveCat] = useState('');
    const [wishlist, setWishlist] = useState(null);
    // const categoriesRef = useRef([]);
    const navigate = useNavigate();

    useEffect(function() {
      async function getItems() {
        const items = await itemsAPI.getAll();
        // categoriesRef.current = items.reduce((cats, item) => {
        //   const cat = item.category.name;
        //   return cats.includes(cat) ? cats : [...cats, cat];
        // }, []);
        setMenuItems(items);
        // setActiveCat(categoriesRef.current[0]);
      }
      getItems();
      async function getWishlist() {
        const wistlist = await wishlistAPI.getWishlist();
        setWishlist(wishlist);
      }
      getWishlist();
    }, []);

    /*-- Event Handlers --*/
    async function handleAddToWishlist(itemId) {
      const updatedWishlist = await wishlistAPI.addItemToWishlist(itemId);
      setCart(updatedWishlist);
    }

    async function handleChangeQty(itemId, newQty) {
      const updatedWishlist = await wishlistAPI.setItemQtyInWishlist(itemId, newQty);
      setCart(updatedWishlist);
    }

    // async function handleCheckout() {
    //   await ordersAPI.checkout();
    //   navigate('/orders');
    // }

    return (
      <main className={styles.WishlistPage}>
        <WishlistDetail
          order={wishlist}
          handleChangeQty={handleChangeQty}
        //   handleCheckout={handleCheckout}
        />
      </main>
    );
}