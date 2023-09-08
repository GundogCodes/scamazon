import styles from './EditUserPage.module.scss'
import {useState, useRef} from 'react'
import { updateUserInfo } from '../../utilities/users-api.cjs'
import LoginPage from '../LoginPage/LoginPage'
// userId, newData
export default function EditUserPage({user, setUser}){
    console.log('user ',user)
    //console.log('user.id', user._id)
    const [newName,setNewName] = useState()
    const [newEmail,setNewEmail] = useState()
    const [newPassword,setNewPassword] = useState()
    const [newPhoneNumber,setNewPhoneNumber] = useState()
    
 

    function handleChange(e){
        console.log('typing field', e.target.name)
        if(e.target.name ==='name'){
            setNewName(e.target.value)
        } else if(e.target.name === 'email'){
            setNewEmail(e.target.value)
        } else if(e.target.name === 'password'){
            setNewPassword(e.target.value)
        }else if(e.target.name === 'phoneNumber'){
            setNewPhoneNumber(e.target.value)
        }
    }

    function handleDoneButton(e){
        const clickedButt = e.target.name
        console.log('clickedButton ',e.target.name)
        if(clickedButt === 'name'){
            console.log(newName)
        } else if(clickedButt ==='email'){
            console.log(newEmail)
            
        }      
        else if(clickedButt ==='password'){
             console.log(newPassword)
             
            } else if(clickedButt ==='phoneNumber'){
            console.log(newPhoneNumber)
        }      
            

    }

    const [userData,setUserData] = useState({
        name:user.name || '',
        email:user.email,
        password:user.phoneNumber || '**********',
        phoneNumber: user.phoneumber || ''
    })

    const [showInput, setShowInput] = useState(false)

    async function handleSubmit(e){
        e.preventDefault()
        try {
            
        } catch (error) {
            
        }
    }
    

    function handleEditClick(){
        setShowInput(!showInput)
    }    

    return(
        <div className={styles.EditUserPage}>
            {user?
            <>
            <h1 className={styles.titles}>Login & Security</h1>
            <form>
                <section>Username:
                    <div className={styles.sectionHeader}>

                    <h4>{user.name}</h4>
                    </div>
                    <input type='text'/>
                </section>
                <section>Email:
                    <div className={styles.sectionHeader}>

                <h4>{user.email}</h4>
                    </div>
                    <input type='text'/>
                </section>
                <section>Password:
                    <div className={styles.sectionHeader}>

                <h4>{user.password}</h4>
                    </div>
                    <input type='text'/>
                </section>
                <section>Phone Number:
                    <div className={styles.sectionHeader}>

                <h4>{user.phoneNumber}</h4>
                    </div>
                    <input type='text'/>
                </section>
                <button>Submit Changes</button>
            </form>
            </>
            :
            <>
          <h1 className={styles.linkDiv}><Link to='/login'>Please Login to Continue...</Link></h1>
            </>
            }
        </div>
    )
}