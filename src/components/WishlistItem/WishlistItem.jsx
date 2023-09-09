import styles from './LineItem.module.scss';

export default function LineItem({ lineItem, isPaid, handleChangeQty, moveToWishlist }) {
return (
  <div className={styles.LineItem}>
    <div className="flex-ctr-ctr">{lineItem.item.image}</div>
    <div className="flex-ctr-ctr flex-col">
      <span className="align-ctr">{lineItem.item.name}</span>
      <span>{lineItem.item.price.toFixed(2)}</span>
    </div>
    <div className={styles.qty} style={{ justifyContent: isPaid && 'center' }}>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty - 1)}
        >−</button>
      }
      <span>{lineItem.qty}</span>
      {!isPaid &&
        <button
          className="btn-xs"
          onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty + 1)}
        >+</button>
      }
    </div>
    <div className={styles.removeItems}>
      {/* <button 
        classname={styles.wishlist}
        onClick={() => 
          moveToWishlist(
            lineItem.item._id, 
            lineItem.qty = 0,
            lineItem.wishlist = true
            // wishlist.item._id,
            // wishList.qty + 1
          )
        }
      >
        Move to Wishlist
      </button> */}
      <button 
        classname={styles.remove}
        onClick={() => handleChangeQty(lineItem.item._id, lineItem.qty = 0)}
        >
        Remove
      </button>
    </div>
    <div className={styles.extPrice}>${lineItem.extPrice.toFixed(2)}</div>
  </div>
);
}