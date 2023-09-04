import styles from './HomePage.module.scss'


// import PromoAdsSmall from '../../components/PromoAdsSmall/SmallAd'
// import PromoCarousel from '../../components/PromoCarousel/PromoCarousel'
// import PromoCollection from '../../components/PromoCollection/PromoCollection'
// import PromoMedia from '../../components/PromoMedia/PromoMedia'
// import PromoSeasonal from '../../components/PromoSeasonal/PromoSeasonal'



export default function HomePage(){
    return(
        <div className={styles.HomePage}>
            <img className="page-banner" src='../public/img/scamazon.png'/>


            <h3>By, Alex, Andrew, Bao, Gunish, Jeff, Sapana, TJ</h3>
            {/* <PromoCarousel/>
            <PromoAdsSmall/>
            <PromoSeasonal/>
            <PromoMedia/>
            <PromoCollection/> */}

        </div>
    )
}