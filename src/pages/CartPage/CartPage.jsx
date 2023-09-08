import styles from './CartPage.module.scss';
import { useState, useEffect } from 'react';
import { getCart, checkout } from '../../utilities/orders-api.cjs';
import { Link, useNavigate } from 'react-router-dom';

export default function CartPage({ user, setUser }) {
    const [cart, setCart] = useState(null);
    console.log("line7", cart);
    const navigate = useNavigate();

    useEffect(function () {
        async function fetchCartData() {
            const cartData = await getCart();
            setCart(cartData);
        }
        fetchCartData();
    }, []);
    
    console.log(user._id);

    const handleChangeQty = (id, qty) => {
        console.log("Change quantity for item:", id, "to:", qty);
    }

    const lineItems = cart?.lineItems?.map(lineItem => (
        <div key={lineItem._id}>
            <div className={styles.lineItem}>
                <Link to={`/item/${lineItem.item._id}`}>
                    <img src={lineItem.item.image} className={styles.image} alt={lineItem.item.name} />
                </Link>
                <p>Name: {lineItem.item.name}</p>
                <p>Quantity: {lineItem.quantity}</p>
                <p>Price: ${lineItem.item.price.toFixed(2)}</p>
                {cart.isPaid ? null : <button onClick={() => handleChangeQty(lineItem._id, lineItem.quantity - 1)}>Remove item</button>}
            </div>
            <hr className={styles.lineSeparator} />
        </div>
    ));

    async function handleCheckout() {
        await checkout(user._id);
        console.log('line41', cart)
        navigate('/cart');
    }

    const totalPrice = cart?.lineItems?.reduce((total, lineItem) => total + (lineItem.item.price * lineItem.quantity), 0).toFixed(2);

    return (
        <div className={styles.CartPage}>
            <div className={styles.userName}>
                <h1>{user.name}</h1>
            </div>
            <div className={styles.Ordersdetails}>
                <div className={styles.OrdersList}>
                    {!cart || !cart.lineItems || cart.lineItems.length === 0 ? (
                        <div>Your cart is empty, my dude. Time to part with your hard-earned cash – add some items and let the shopping adventure begin! 🛒💰</div>
                    ) : (
                        lineItems
                    )}
                </div>
                <div className={styles.columnWrap}>
                    <div className={styles.checkout}>
                        <p>total: ${totalPrice}</p>
                        <button className={styles.checkoutbtn} onClick={handleCheckout}>Proceed to checkout</button>
                    </div>
                    <div className={styles.promo}> promotion components here</div>
                </div>
            </div>
        </div>
    );
}
