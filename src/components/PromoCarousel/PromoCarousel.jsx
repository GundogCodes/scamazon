import styles from './PromoCarousel.module.scss'; 
import PromoItem from '../PromoItem/PromoItem';

export default function PromoCarousel() {
    const items = [{ name: 'sports equipment', price: 900 },
        {name: 'PS5', price: 3000},
        {name: 'womensdress', price: 50}
    ];
    // const item = items.map(i => 
    //     <PromoItem
    //         name={i.name}
    //         price={i.price}
    //     />
    // )
    // function carousel() {
    //     let carouselWidth = $('.carousel-inner')[0].scrollWidth;
    //     let cardWidth = $('carousel-item').width();

    //     let scrollPosition = 0;

    //     $('.carousel-control-next').on('click', function () {
    //         if (scrollPosition < (carouselWidth - (cardWidth * 1))) {
    //             console.log('next')
    //             scrollPosition = scrollPosition + cardWidth;
    //             $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
    //         }
    //     });

    //     $('.carousel-control-prev').on('click', function () {
    //         if (scrollPosition > 0) {
    //             console.log('prev')
    //             scrollPosition = scrollPosition - cardWidth;
    //             $('.carousel-inner').animate({ scrollLeft: scrollPosition }, 600);
    //         }
    //     });
    // };
    
return (
    <div id="carouselControls" className={styles.carouselSlide} data-bs-ride="carousel">
        <div className={styles.carouselInner}>
            <div className={styles.carouselItemActive}>
                <div className={styles.card}>
                    {/* {item[0]} */}
                    <div className={styles.imageWrapper}>
                        <img class="d-block w-100" src="../../public/img/football.png" alt="First Slide" />
                    </div>
                    <div className={styles.cardBody}>
                        <h5 class="card-title">Sports Equipment 80% off!</h5>
                        <p class="card-text">Tom Brady signed footballs for $.01!!</p>
                        <a href="./item/:id" class="btn btn-primary">View Item</a>
                    </div>
                </div>
            </div>

            <div className={styles.carouselItem}>
                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        {/* {item[1]} */}
                        <img class="d-block w-100" src="../../public/img/PS5.png" alt="Second Slide" />
                    </div>
                    <div className={styles.cardBody}>
                        <h5 class="card-title">FIY Gaming Consoles!</h5>
                        <p class="card-text">Great present for that young engineer in your family!</p>
                        <a href="./item/:id" class="btn btn-primary">View Item</a>
                    </div>
                </div>
                    {/* <img src="../../public/img/womensdress.png" class="d-block w-100" alt="..." /> */}
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.card}>
                    {/* {item[2]} */}
                    <div className={styles.imageWrapper}>
                        <img class="d-block w-100" src="../../public/img/womensdress.png" alt="Third Slide" />
                    </div>
                    <div className={styles.cardBody}>
                        <h5 class="card-title">Taylor Swift's dress</h5>
                        <p class="card-text">She wore it a lot during the Jake Gyllenhal drama. It carries a lot of energy.</p>
                        <a href="./item/:id" class="btn btn-primary">View Item</a>
                    </div>
                </div>
                    {/* <img src="../../public/img/PS5.png" class="d-block w-100" alt="..." /> */}
            </div>
            <div className={styles.carouselItem}>
                <div className={styles.card}>
                    {/* {item[2]} */}
                    <div className={styles.imageWrapper}>
                        <img class="d-block w-100" src="../../public/img/animal-puppet.png" alt="Third Slide" />
                    </div>
                    <div className={styles.cardBody}>
                        <h5 class="card-title">Animal Puppet</h5>
                        <p class="card-text">Beat Dave Grohl in a drum battle.</p>
                        <a href="./item/:id" class="btn btn-primary">View Item</a>
                    </div>
                </div>
                    {/* <img src="../../public/img/PS5.png" class="d-block w-100" alt="..." /> */}
            </div>
        </div>

        <a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous </span>
        </a>
        <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only"> Next</span>
        </a>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    )
}