import styles from './PromoCarousel.module.scss'; 
import PromoItem from '../PromoItem/PromoItem';
import { useState } from 'react'
import { Carousel, Image } from 'react-bootstrap';


export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    
  const handleSelect = (selectedIndex) => {
      console.log('clicked')
      setIndex(selectedIndex);
    };
  
    // const items = [{ name: 'sports equipment', price: 900 },
    //     {name: 'PS5', price: 3000},
    //     {name: 'womensdress', price: 50}
    // ];
    // const item = items.map(i => 
    //     <PromoItem
    //         name={i.name}
    //         price={i.price}
    //     />
    // )
    // (function carousel() {
    //     let carouselWidth = $(carouselInner)[0].scrollWidth;
    //     let cardWidth = $(carouselItem).width();

    //     let scrollPosition = 0;

    //     $(carouselControlNext).on('click', function () {
    //         if (scrollPosition < (carouselWidth - (cardWidth * 1))) {
    //             console.log('next')
    //             scrollPosition = scrollPosition + cardWidth;
    //             $('.carouselInner').animate({ scrollLeft: scrollPosition }, 600);
    //         }
    //     });

    //     $(carouselControlPrev).on('click', function () {
    //         if (scrollPosition > 0) {
    //             console.log('prev')
    //             scrollPosition = scrollPosition - cardWidth;
    //             $(carouselInner).animate({ scrollLeft: scrollPosition }, 600);
    //         }
    //     });
    // })();
  
 
    
  return (
    // <Carousel>
    // <div className={styles.carouselSlide} data-bs-ride="carousel">
    //     <div className={styles.carouselInner}>
    //         <div className={styles.carouselItemActive}>
    //             <div className={styles.card}>
    //                 {/* {item[0]} */}
    //                 <div className={styles.imageWrapper}>
    //                     <img className={styles.img} src="../../public/img/football.png" alt="First Slide" />
    //                 </div>
    //                 <div className={styles.cardBody}>
    //                     <h5 class="card-title">Sports Equipment 80% off!</h5>
    //                     <p class="card-text">Tom Brady signed footballs for $.01!!</p>
    //                     <a href="./item/:id" class="btn btn-primary">View Item</a>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className={styles.carouselItem}>
    //             <div className={styles.card}>
    //                 <div className={styles.imageWrapper}>
    //                     {/* {item[1]} */}
    //                     <img className={styles.img} src="../../public/img/PS5.png" alt="Second Slide" />
    //                 </div>
    //                 <div className={styles.cardBody}>
    //                     <h5 class="card-title">FIY Gaming Consoles!</h5>
    //                     <p class="card-text">Great present for that young engineer in your family!</p>
    //                     <a href="./item/:id" class="btn btn-primary">View Item</a>
    //                 </div>
    //             </div>
    //                 {/* <img src="../../public/img/womensdress.png" class="d-block w-100" alt="..." /> */}
    //         </div>
    //         <div className={styles.carouselItem}>
    //             <div className={styles.card}>
    //                 {/* {item[2]} */}
    //                 <div className={styles.imageWrapper}>
    //                     <img className={styles.img} src="../../public/img/womensdress.png" alt="Third Slide" />
    //                 </div>
    //                 <div className={styles.cardBody}>
    //                     <h5 class="card-title">Taylor Swift's dress</h5>
    //                     <p class="card-text">She wore it a lot during the Jake Gyllenhal drama. It carries a lot of energy.</p>
    //                     <a href="./item/:id" class="btn btn-primary">View Item</a>
    //                 </div>
    //             </div>
    //                 {/* <img src="../../public/img/PS5.png" class="d-block w-100" alt="..." /> */}
    //         </div>
    //         <div className={styles.carouselItem}>
    //             <div className={styles.card}>
    //                 {/* {item[2]} */}
    //                 <div className={styles.imageWrapper}>
    //                             <img className={styles.img} src="../../public/img/animal-puppet.png" alt="Third Slide" />
    //                 </div>
    //                 <div className={styles.cardBody}>
    //                     <h5 class="card-title">Animal Puppet</h5>
    //                     <p class="card-text">Beat Dave Grohl in a drum battle.</p>
    //                     <a href="./item/:id" class="btn btn-primary">View Item</a>
    //                 </div>
    //             </div>
    //                 {/* <img src="../../public/img/PS5.png" class="d-block w-100" alt="..." /> */}
    //         </div>
    //     </div>

    //     <a className={styles.carouselControlPrev} href="#carouselControls" role="button" data-slide="prev">
    //         <span className={styles.carouselControlPrevIcon} aria-hidden="true"></span>
    //         <span className={styles.srOnly}> Previous </span>
    //     </a>
    //     <a className={styles.carouselControlNext}href="#carouselControls" role="button" data-slide="next">
    //         <span className={styles.carouselControlNextIcon} aria-hidden="true"></span>
    //         <span className={styles.srOnly}> Next</span>
    //     </a>
    //     {/* <div className={styles.carouselControls}>
    //         <button className={styles.carouselControlPrev} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    //             <span className={styles.carouselControlPrevIcon} aria-hidden="true"></span>
    //             <span class="visually-hidden">Back</span>
    //         </button>
    //         <button className={styles.carouselControlNext} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    //             <span className={styles.carouselControlNextIcon} aria-hidden="true"></span>
    //             <span class="visually-hidden">Next</span>
    //         </button>
    //     </div>     */}

    //         </div>
    // </Carousel> 
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.Carousel}>
      <Carousel.Item className={styles.CarouselItem} classId={styles.Active}>
        <Image className={styles.Image} src='../../public/img/PS5.png' />
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>Used PS5</h3>
          <p className={styles.itemDesc}>Comes with instructions on how to fix it</p>
          <a href="/item/:id" buttonClassName={styles.sm} > View Item </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} classId={styles.Inactive}>
        <Image className={styles.Image} src='../../public/img/animal-puppet.png' />
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>Animal Puppet</h3>
          <p className={styles.itemDesc}>AHHHHHHHH beat Dave Grohl in drum battle!!</p>
          <a href="/item/:id" buttonClassName={styles.sm} > View Item </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} classId={styles.Inactive}>
        <Image className={styles.Image} src='../../public/img/football.png' />
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>80% off Sports Equipment</h3>
          <p className={styles.itemDesc}>Tom Brady Signed Footballs for $.01</p>
          <a href="/item/:id" buttonClassName={styles.sm} > View Item </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}


