import { useEffect, useState, useRef, Component } from 'react'
import { getUser } from '../../utilities/users-service.cjs'
import styles from './SearchBar.module.scss'
import { Link ,useNavigate} from 'react-router-dom'
export default function SearchBar({ searchableItems, user}) {
   console.log('searchableItems (on SearchBar2)', searchableItems)
   //console.log('searchableItems in SB', searchableItems)
    const [matchedSearches,setMatchedSearches] = useState([])
    const navigate = useNavigate()
    const inputBar = useRef(null)
    const [userSearch,setUserSearch] = useState('')
    
    console.log('searchableItems', searchableItems) //this returns the array properly
    //console.log('itemsArr', itemsArr[2].name) this returns name properly
    //console.log(user)
    const itemIdArr = []
    const itemNameArr = []

    
    for(let item of searchableItems){
        //console.log(item._id)
        itemNameArr.push(item.name)
        itemIdArr.push(item._id)
        
    }
    //console.log('itemNameArr ', itemNameArr)
    //console.log('itemIdArr ', itemIdArr)
    function handleChange(e){
        const foundSearchedItem = []
        setUserSearch(e.target.value)
        console.log('user is typing: ',userSearch)
        if(userSearch === '' || userSearch === '  Search Scamazon.com'){
            return
        } else{
            for(let name of itemNameArr){
                
                if(name.toLowerCase().includes(userSearch.toLowerCase())){
                    //console.log('search matches this item: ', name)
                    foundSearchedItem.push(name)
                    setMatchedSearches(foundSearchedItem)
                }
            }
        }
    }
    //console.log('matched Search items: ',matchedSearches)
    //console.log('itemandNumArr', itemIdArr)
    
    function handleButtonClick(){
        console.log('button clicked: ',inputBar.current.value)
    }
    
    function handleLiClick(e){
        console.log(e.target.innerText)
    }
    
    return (
        <div className={styles.SearchBar}>


                <div className={styles.searchBarDiv}>
                <input ref={inputBar} type='search' onChange={handleChange} defaultValue='  Search Scamazon.com'  />
                <button onClick={handleButtonClick} ></button>
                </div>

                    
                        <ul className={styles.searchResultsList}>
                            <li>WHY</li>
                            <li>TF</li>
                            <li>IS</li>
                            <li>THE LIs</li>
                            <li>WORKING</li>
                            <li>BUT</li>
                            <li>NOT</li>
                            <li>THE</li>
                            <li>FUCKING</li>
                            <li>MAP</li>
                            <li>FUNCTION</li>
                            <li>IS</li>
                            <li>IT</li>
                            <li>NOT</li>
                            <li>THE</li>
                            <li onClick={handleLiClick}>SAME</li>
                            <li>SHIT</li>
                            <li>!!!</li>
                            <li>!!!</li>
                            <li>!!!</li>
                            <li>!!!</li>
                            <li>!!!</li>
                            <li>!!!</li>
                            <li>!!!</li>
                            <li>!!!</li>
            
                            {
                            matchedSearches.map(result =>{
                                <li onClick={handleLiClick} className={styles.searchResult}>{result}</li>
                                console.log('html part result',result)
                            })
                            }
                        </ul>
                    


            
        </div>
    )
}