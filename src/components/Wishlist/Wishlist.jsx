import styles from './Wishlist.module.scss'
import LineItem from '../LineItem/LineItem'

export default function Wishlist({wishlist, handleChangeQty}){
    if(!wishlist) return null

    const lineItems = wishlist.lineItems.map(item =>
        <LineItem
            lineItem={item}
            handleChangeQty={handleChangeQty}
            key={item._id}
        />
    )
    //Wishlist header + container to show wishlisted items
    return(
        <div className={styles.Wishlist}>
            <h1 className={styles.header}>Wishlist</h1>
            <div className={styles.lineItemContainer}>
                {lineItems.length ?
                {lineItems}
                :
                {}
                }
            </div>
        </div>
    )
}