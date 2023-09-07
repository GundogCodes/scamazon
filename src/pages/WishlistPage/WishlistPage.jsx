export default function WishlistPage(){
    return(
        <>
        WishlistPage
        </>
    )
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