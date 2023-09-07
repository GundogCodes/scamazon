import styles from './SmallAd.module.scss'; 
import PromoItem from '../PromoItem/PromoItem';

export default function SmallAd() {
    
    const items = [{ name: 'Sports Equipment', price: 900, image: '../../public/img/football.png'},
    {name: 'PS5', price: 3000, image: '../../public/img/PS5.png'},
    {name: 'Dress', price: 50, image: '../../public/img/womensdress.png'}
];
const smallAd = items.map(i => 
    <PromoItem
        name={i.name}
        price={i.price}
        image={i.image}
    /> 
)
    
    return (
        <main className={styles.SmallAd}>
            <div className={styles.leftAd} >
                <img src="../../public/img/football.png" /> {smallAd[0]}
                </div>
                <div className={styles.midAd} >
            <img src="../../public/img/PS5.png" />  {smallAd[1]}
            </div>
            <div className={styles.rightAd} >
                <img src="../../public/img/womensdress.png" />  {smallAd[2]}
            </div>    
        </main>
    )
}