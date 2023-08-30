import styles from './NavBar.module.scss'
import {Link} from 'react-router-dom'
export default function NavBar(props){
    console.log('props to NavBar',props)
    return(
        <nav className={styles.NavBarDiv}>
          {props.routes.map(({key,path})=>(
            <h3 className={styles.titles}>{key}</h3>
          ))}
        </nav>
        )
}