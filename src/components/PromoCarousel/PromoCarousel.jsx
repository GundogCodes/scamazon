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
          {item[0]}  
            {/* <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="..." alt="First slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Second slide" />
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="..." alt="Third slide" />
                </div>
            </div>
        </div> */}

        </div>
    )
}