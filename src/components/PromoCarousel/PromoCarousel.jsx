import styles from './PromoCarousel.module.scss'; 
import PromoItem from '../PromoItem/PromoItem';

export default function PromoCarousel({item}){
    const promoItem = item.map(i => 
        <PromoItem
            item={i}
        /> 
    )
    
    return (
        <div className={styles.PromoCarousel}>
            {promoItem}
        </div>
    )
}