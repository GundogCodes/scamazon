import styles from './WishlistPage.module.scss'
import * as itemsAPI from '../../utilities/items-api';
import * as ordersAPI from '../../utilities/orders-api';
import WishlistItem from '../../components/WishlistItem/WishlistItem'

export default function WishlistPage({ user, setUser }) {
    const [menuItems, setMenuItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const [wishlist, setWishlist] = useState(null);
    const categoriesRef = useRef([]);
    const navigate = useNavigate();

    useEffect(function() {
      async function getItems() {
        const items = await itemsAPI.getAll();
        categoriesRef.current = items.reduce((cats, item) => {
          const cat = item.category.name;
          return cats.includes(cat) ? cats : [...cats, cat];
        }, []);
        setMenuItems(items);
        setActiveCat(categoriesRef.current[0]);
      }
      getItems();
      async function getWishlist() {
        const wistlist = await ordersAPI.getWishlist();
        setWishlist(wishlist);
      }
      getCart();
    }, []);

    /*-- Event Handlers --*/
    async function handleAddToWishlist(itemId) {
      const updatedWishlist = await ordersAPI.addItemToWishlist(itemId);
      setCart(updatedWishlist);
    }

    // async function handleChangeQty(itemId, newQty) {
    //   const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    //   setCart(updatedCart);
    // }

    // async function handleCheckout() {
    //   await ordersAPI.checkout();
    //   navigate('/orders');
    // }

    return (
      <main className={styles.WishlistPage}>
        <aside>
          <Logo />
          <CategoryList
            categories={categoriesRef.current}
            cart={setCart}
            setActiveCat={setActiveCat}
          />
          <Link to="/orders" className="button btn-sm">PREVIOUS ORDERS</Link>
          <UserLogOut user={user} setUser={setUser} />
        </aside>
        <MenuList
          menuItems={menuItems.filter(item => item.category.name === activeCat)}
          handleAddToOrder={handleAddToOrder}
        />
        <OrderDetail
          order={cart}
          handleChangeQty={handleChangeQty}
          handleCheckout={handleCheckout}
        />
      </main>
    );
}

// export default function Wishlist({wishlist, handleChangeQty}){
//     if(!wishlist) return null

//     const lineItems = wishlist.lineItems.map(item =>
//         <LineItem
//             lineItem={item}
//             handleChangeQty={handleChangeQty}
//             key={item._id}
//         />
//     )
//     //Wishlist header + container to show wishlisted items
//     //If not logged in reroute
//     return(
//         <div className={styles.Wishlist}>
//             <h1 className={styles.header}>Wishlist</h1>
//             <div className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}>
//                 {lineItems.wishlist = True ?
//                 {lineItems}
//                 :
//                 <div className={styles.emptyMessage}>No Items Wishlisted! Why do you hate us?</div>
//                 }
//             </div>
//         </div>
//     )
// }

// export default function Wishlist({wishlist, handleChangeQty}){
//     if(!wishlist) return null

//     const lineItems = wishlist.lineItems.map(item =>
//         <LineItem
//             lineItem={item}
//             handleChangeQty={handleChangeQty}
//             key={item._id}
//         />
//     )
//     //Wishlist header + container to show wishlisted items
//     //If not logged in reroute
//     return(
//         <div className={styles.Wishlist}>
//             <h1 className={styles.header}>Wishlist</h1>
//             <div className={`${styles.lineItemContainer} flex-ctr-ctr flex-col scroll-y`}>
//                 {lineItems.wishlist = True ?
//                 {lineItems}
//                 :
//                 <div className={styles.emptyMessage}>No Items Wishlisted! Why do you hate us?</div>
//                 }
//             </div>
//         </div>
//     )
// }