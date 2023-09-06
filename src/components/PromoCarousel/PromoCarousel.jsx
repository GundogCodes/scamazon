import styles from './PromoCarousel.module.scss'; 
import PromoItem from '../PromoItem/PromoItem';

export default function PromoCarousel() {
    const items = [{ name: 'golf clubs', price: 900 },
        {name: 'n64', price: 3000},
        {name: 'backroller', price: 50}
    ];
    const item = items.map(i => 
        <PromoItem
            name={i.name}
            price={i.price}
        /> 
    )
    
    return (
        <div className={styles.PromoCarousel}>
            <div className={styles.CarouselSlide} data-ride="carousel">
                <div className={styles.CarouselInner}>
                    <div className={styles.CarouselItemActive}>
                    {item[0]}  
                    </div>
                    <div className={styles.CarouselItemInactive}>
                    {item[1]} {item[2]}    
                    </div>
            </div>
        </div>

        </div>
    )
}