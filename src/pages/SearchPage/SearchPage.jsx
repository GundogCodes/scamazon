import styles from './SearchPage.module.scss'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { getById } from "../../utilities/items-api.cjs"


export default function SearchPage({matchedSearches,setMatchedSearches, searchableItems, idsOfMatchedSearches, setIdsOfMatchedItems}){
    //console.log('matchedSearched in SP', matchedSearches[0])
    //console.log('idsOfMatchedSearched in Sp', idsOfMatchedSearches[0])
    const navigate = useNavigate()
    function handleItemClick(e){
        const clickedItem = e.target.innerText
        console.log('clicked Item ',clickedItem)
        const getIndexOfClickedItem  = matchedSearches.indexOf(clickedItem)
        console.log('index of clicked item', getIndexOfClickedItem)
        const idOfClickedItem = idsOfMatchedSearches[getIndexOfClickedItem]
        console.log('idofClickedItem', idOfClickedItem)
        navigate(`/item/${idOfClickedItem}`)
    }

    return(
        <div className={styles.SearchPage}>
            {
                matchedSearches?
                <>
                {matchedSearches.map(result=>{
                    return <h1 onClick={handleItemClick} >{result}</h1>
                })}
                </>
                :
                <>
                </>
            }

        </div>
    )
}