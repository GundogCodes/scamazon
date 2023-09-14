//import { useState, useEffect } from 'react'
import styles from './HomePage.module.scss'
// import * as ordersAPI from '../../utilities/orders-api.cjs';
//import { Link, useNavigate } from 'react-router-dom';
import PromoAdsSmall from '../../components/PromoAdsSmall/SmallAd' 
import PromoCarousel from '../../components/PromoCarousel/PromoCarousel'
import Footer from '../../components/Footer/Footer'
import PromoCollection from '../../components/PromoCollection/PromoCollection'
import AdBanner from '../../components/AdBanner/AdBanner'
//import PromoMedia from '../../components/PromoMedia/PromoMedia.jsx'
//import NavBar from '../../components/NavBar/NavBar'
import BottomAdBanner from '../../components/BottomAdBanner/BottomAdBanner'

export default function HomePage( {searchableItems} ) {


    //make a dang for loop!! thank you Teo 
    // const promotionItems = [
    //     searchableItems[i]
    // ] 
    // console.log(promotionItems, 'promotionItems')

    let promotionItems = []
    for (let i = 0; i < searchableItems.length; i++){
        promotionItems.push(searchableItems)
        //searchableItems.push(promotionItems)
       // console.log([promotionItems])
    }
    //console.log([promotionItems])

    return(
        <div className={styles.HomePage}>
            
                
            <PromoCarousel promotionItems={promotionItems} 
                // items={items.filter(item => item.name.price === items)}
            />

            <AdBanner 
            promotionItems={promotionItems} 
            pickerArr={[2,3,4,5,6]}
             />

            <PromoAdsSmall promotionItems={promotionItems} 
                // items={items.filter(item => item.name.price === items)}
            />
             <PromoCollection promotionItems={promotionItems}
                // items={items.filter(item => item.name.price === items)}
            /> 
            
              <BottomAdBanner
              promotionItems={promotionItems}
              pickerArr={[0,9,7,5,1]}
              />

            <Footer className={styles.Footer} />


        </div>
    )
}

