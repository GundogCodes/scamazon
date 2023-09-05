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

    return(
        <>
        WishlistPage
        </>
    )
}