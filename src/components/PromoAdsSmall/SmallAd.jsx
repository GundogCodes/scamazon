import styles from './SmallAd.module.scss'; 
import PromoItem from '../PromoItem/PromoItem';

export default function SmallAd(item){
    const smallAd = item.map(i => 
        <PromoItem
            item={i}
        />
    ) 
    
    return (
        <main className={styles.SmallAd}>
            <div className="left-ad" ></div>
                {smallAd}
            <div className="mid-ad" ></div>
                {smallAd}
            <div className="right-ad" ></div>
                {smallAd}
        </main>
    )
}