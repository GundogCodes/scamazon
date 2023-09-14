import styles from './AdBanner.module.scss'

export default function AdBanner({promotionItems}){
    console.log('searchable Items in AdBanner',promotionItems )
    return(
        <div className={styles.AdBanner}>
            <div className={styles.leftMost}></div>
            <section className={styles.middle}>
            <div className={styles.middleOne}></div>
            <div className={styles.middleTwo}></div>
            </section>
            <div className={styles.rightMost}>
            <div className={styles.rightTop}></div>
            <div className={styles.rightBottom}></div>
            </div>
        </div>
    )
}
