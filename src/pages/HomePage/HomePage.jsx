import styles from './HomePage.module.scss'
<<<<<<< HEAD
import * as itemsAPI from '../../utilities/items-api'
import * as ordersAPI from '../../utilities/orders-api';
import { Link, useNavigate } from 'react-router-dom';
import PromoAdsSmall from '../../components/PromoAdsSmall/PromoAdsSmall' 
import PromoCarousel from '../../components/PromoCarousel/PromoCarousel'
import PromoCollection from '../../comoponents/PromoCollection/PromoCollection'
import PromoMedia from '../../components/PromoMedia/PromoMedia'
import PromoSeasonal from '../../components/PromoSeasonal/PromoSeasonal'
import NavBar from '../../components/NavBar/NavBar'
import CategoryBar from '../../components/CategoryBar/CategoryBar'
import Footer from '../../components/Footer/Footer'

export default function HomePage({ }) {
    //setting whether the promo items are "picked" by the random generation; 
    const [cart, setCart] = userState('')
    const useNavigate = useNavigate(); 

    useEffect(function () {
        //for if user does an "impulse buy" and adds item to cart right away
        async function getCart() {
            const cart = await ordersAPI.getCart();
            setCart(cart);
          }
          getCart();
    }, []);

    /*Event Handlers */

    async function handleAddToOrder(itemId) {
        const updatedCart = await ordersAPI.addItemToCart(itemId);
        setCart(updatedCart)
    }
=======

import NavBar from '../componenets/NavBar'
import PromoAdsSmall from '../components/PromoAdsSmall' 
import PromoCarousel from '../components/PromoCarousel'
import PromoCollection from '../comoponents/PromoCollection'
import PromoMedia from '../components/PromoMedia'
import PromoSeasonal from '../components/PromoSeasonal'

>>>>>>> dev


    return(
        <div className={styles.HomePage}>
            <img className="page-banner" src='../public/img/scamazon.png'/>
<<<<<<< HEAD
            <NavBar />
            
            <CategoryBar
                //lists categories (show)
                //each category takes user to items page for the category
                // event handler

            />
                
            /* how do we get the buttons for login/sign up on here again??? */
            <PromoCarousel
                //click on item which takes user to item page
                // rotates through 5 randomized deals(AI?)
                // event handler(onClick)
                order={cart}
                items={items.filter(item => item.name.price === items)}
                handleAddToOrder={handleAddToOrder}
            />
            <PromoAdsSmall
                order={cart}
                items={items.filter(item => item.name.price === items)}
                handleAddToOrder={handleAddToOrder}
            />
            <PromoSeasonal
                order={cart}
                items={items.filter(item => item.name.price === items)}
                handleAddToOrder={handleAddToOrder}
            />
            <PromoMedia
                order={cart}
                items={items.filter(item => item.name.price === items)}
                handleAddToOrder={handleAddToOrder}
            />
            <PromoCollection
                order={cart}
                items={items.filter(item => item.name.price === items)}
                handleAddToOrder={handleAddToOrder}
            />
            <Footer
                order={cart}
                items={items.filter(item => item.name.price === items)}
                handleAddToOrder={handleAddToOrder}
            />
=======

            <NavBar/>
            <h3>By, Alex, Andrew, Bao, Gunish, Jeff, Sapana, TJ</h3>
            <PromoCarousel/>
            <PromoAdsSmall/>
            <PromoSeasonal/>
            <PromoMedia/>
            <PromoCollection/>

>>>>>>> dev
        </div>
    )
}