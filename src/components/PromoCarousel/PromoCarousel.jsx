import styles from './PromoCarousel.module.scss'; 
import { useState } from 'react'
import { Carousel, Image } from 'react-bootstrap';


export default function PromoCarousel({promotionItems}) {
    const [index, setIndex] = useState(0);
  // console.log(promotionItems)
  // console.log(promotionItems[0].name)

  const carouselItems = []
  for (let items of promotionItems) {
    carouselItems.push(items)
  }
  console.log(carouselItems, 'carouselItems')

  const handleSelect = (selectedIndex) => {
      console.log('clicked')
      setIndex(selectedIndex);
  };
  
  
  
   
 
  return (
   <>
    <Carousel activeIndex={styles.index} onSelect={handleSelect} className={styles.Carousel}>
      <Carousel.Item className={styles.CarouselItem} >
        <Image
          className="d-block w-100"
          src='../../public/img/PS5.png'
          />
          <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}> {carouselItems[0].name} </h3>
          <p className={styles.itemDesc}>Come with instructions on how to repair it.</p> 
          <a href= {`item/${promotionItems[0]._id}`} className={styles.sm} > Buy Now! </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} >
        <Image
          className="d-block w-100"
          src='../../public/img/animal-puppet.png'
          />
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>{carouselItems[4].name}</h3>
          <p className={styles.itemDesc}>{promotionItems[4].description}</p>
          <a href= {`item/${promotionItems[4]._id}`} className={styles.sm} > Buy Now! </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.CarouselItem} >
        <Image
          className="d-block w-100"
          src='../../public/img/fireworks.png'
          />
        <Carousel.Caption className={styles.caption}>
          <h3 className={styles.cardTitle}>{carouselItems[9].name}</h3>
          <p className={styles.itemDesc}>{promotionItems[9].description}</p>
          <a href= {`item/${promotionItems[9]._id}`} className={styles.sm} > Buy Now! </a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </>
  );
}


