import styles from './SmallAd.module.scss'; 
import PromoItem from '../PromoItem/PromoItem';

export default function SmallAd() {
    
    const items = [{ name: 'golf clubs', price: 900 },
    {name: 'n64', price: 3000},
    {name: 'backroller', price: 50}
];
const smallAd = items.map(i => 
    <PromoItem
        name={i.name}
        price={i.price}
    /> 
)
    
    return (
        <main className={styles.SmallAd}>
            <div className="left-ad" ></div>
                left {smallAd[0]}
            <div className="mid-ad" ></div>
                middle {smallAd[1]}
            <div className="right-ad" ></div>
                right {smallAd[2]}
        </main>
    )
}