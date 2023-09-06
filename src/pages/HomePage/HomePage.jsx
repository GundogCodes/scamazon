import styles from './HomePage.module.scss'

// import NavBar from '../../componenets/NavBar'
// import PromoAdsSmall from '../components/PromoAdsSmall' 
// import PromoCarousel from '../components/PromoCarousel'
// import PromoCollection from '../comoponents/PromoCollection'
// import PromoMedia from '../components/PromoMedia'
// import PromoSeasonal from '../components/PromoSeasonal'



export default function HomePage(){
    return(
        <div className={styles.HomePage}>
            <img className="page-banner" src='../public/img/scamazon.png'/>

            {/* <NavBar/> */}
            <h3>By, Alex, Andrew, Bao, Gunish, Jeff, Sapana, TJ</h3>
            {/* <PromoCarousel/>
            <PromoAdsSmall/>
            <PromoSeasonal/>
            <PromoMedia/>
            <PromoCollection/> */}

        </div>
    )
}