import styles from './HomePage.module.scss'
import NavBar from '../componenets/NavBar'
import PromoAdsSmall from '../components/PromoAdsSmall' 
import PromoCarousel from '../components/PromoCarousel'
import PromoCollection from '../comoponents/PromoCollection'
import PromoMedia from '../components/PromoMedia'
import PromoSeasonal from '../components/PromoSeasonal'


export default function HomePage(){
    return(
        <div className={styles.HomePage}>
            <img className="page-banner" src='../public/img/scamazon.png'/>
            <h3>{NavBar}</h3>
            <h3>By, Alex, Andrew, Bao, Gunish, Jeff, Sapana, TJ</h3>
            <h3>{PromoCarousel} promo carousel</h3>
            <h3>{PromoAdsSmall} 3 smaller ads randomized</h3>
            <h3>{PromoSeasonal} Seasonal Promo by date</h3>
            <h3>{PromoMedia} Media </h3>
            <h3>{PromoCollection} Collection Promotion</h3>
        </div>
    )
}