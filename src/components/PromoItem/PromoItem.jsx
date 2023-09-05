import { useState } from 'react';
import styles from './PromoItem.module.scss'; 
import * as itemsAPI from '../../utilities/items-api';
import { Link, useNavigate } from 'react-router-dom';


export default function PromoItem() {
    const [activeItem, setActiveItem] = useState([])
    const itemsRef = useRef([])
    const navigate = useNavigate()  

    useEffect(function () {
        //fetching the random items from the API to be displayed in the banners
        async function getItems() {
            const items = await itemsAPI.getRandom(); //getOne?? get?? need the proper function here
            itemsRef.current = items.reduce((/*???*/ item) => {
                const item = item.name.price;
                return item.name.price
            }, []);
            setActiveItem(activeItem);

        }
        getItems();
    }, []);
    
    async function linkToDetailPage() {
        navigate('/:id/detail') //URL for item detail page
    }
    
    return (
        <h2 className={styles['item-container']}>
            <Link to="/:id/detail" className="btn-sm" linkToDetailPage={linkToDetailPage}>View Item</Link>
        </h2>
    )
}