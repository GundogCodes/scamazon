import styles from './CartPage.module.scss';
import { useState, useEffect } from 'react';
import { getCart } from '../../utilities/orders-api.cjs';
export default function CartPage({ user, setUser}){
    const [cartPage, setCartPage] = useState(null);
    useEffect(() => {
        (async () => {
          try {
            const cartPage = await getCart();
            setCartPage(cartPage);
          } catch (error) {
            console.log(error);
          }
        })();
      }, []);

    const mockOrder = {
        user: "610ba3410a931a11638eabcd", 
        isPaid: false,
        updatedAt: new Date().toISOString(),
        lineItems: [
            {
                _id: "60fa2bac3f65ed12f1e8a2cb",
                name: "Ergonomic Chair",
                qty: 1,
                price: 150.00,
                image: '/img/PS5.png',
            },
            {
                _id: "60fa2bac3f65ed12f1e8a2cc",
                name: "Wireless Headphones",
                qty: 2,
                price: 80.00,
                image: '/img/Mission.png',
            },
            {
                _id: "60fa2bac3f65ed12f1e8a2cc",
                name: "Wireless Headphones",
                qty: 2,
                price: 80.00,
                image: '/img/Mission.png',
            },
            {
                _id: "60fa2bac3f65ed12f1e8a2cc",
                name: "THe fourth item",
                qty: 1,
                price: 333.00,
                image: '/img/football.png',
            },
            {
                _id: "60fa2bac3f65ed12f1e8a2cd",
                name: "Gourmet Coffee Beans",
                qty: 1,
                price: 20.00,
                image: '/img/PS5.png',
            }
        ],
        createdAt: new Date().toISOString(),
        totalPrice: "200.00"
    };


    
    const lineItems = mockOrder.lineItems.map(item => (
        <div key={item._id}>
            <div className={styles.lineItem}>
                <img src={item.image} className={styles.image}/>
                <p>Name: {item.name}</p>
                <p>Quantity: {item.qty}</p>
                <p>Price: ${item.price.toFixed(2)}</p>
                {mockOrder.isPaid ? null : <button onClick={() => handleChangeQty(item._id, item.qty)}>Remove item</button>}
            </div>
            <hr className={styles.lineSeparator} />
        </div>
    ));
   
    return(
        <div className={styles.CartPage}>
            <div className={styles.userName}>
                {/* {user.name} */}
                <h1>{user._id}</h1>
            </div>
            <div className={styles.Ordersdetails}>
                <div className={styles.OrdersList}>List of cart items here{lineItems}</div>
                <div className={styles.columnWrap}>
                <div className={styles.checkout}> 
                <p>total:${mockOrder.totalPrice}</p>
                <button className={styles.checkoutbtn}>Proceed to checkout</button>
                </div>
                <div className={styles.promo}> promotion components here</div>
                </div>
            </div>
        </div>
    )
}