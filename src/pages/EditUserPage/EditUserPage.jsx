import styles from './EditUserPage.module.scss'
import {useState, useRef} from 'react'
import { updateUserInfo } from '../../utilities/users-api.cjs'
import LoginPage from '../LoginPage/LoginPage'
// userId, newData
export default function EditUserPage({user, setUser}){
    const [editButtName, setEditButtName] = useState(false)
    const [editButtEmail, setEditButtEmail] = useState(false)
    const [editButtPassword, setEditButtPassword] = useState(false)
    const [editButtPhoneNumber, setEditButtPhoneNumber] = useState(false)
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
    
    
    function handleEditClick(e){
        e.preventDefault()
        const buttonName = e.target.name
        console.log(e.target.name)
        if(buttonName === 'editButtName'){
            setEditButtName(!editButtName)
        } else if(buttonName ==='editButtEmail'){
            setEditButtEmail(!editButtEmail)
        }else if(buttonName ==='editButtPassword'){
            setEditButtPassword(!editButtPassword)
            
        }else if(buttonName ==='editButtPhoneNumber'){
            setEditButtPhoneNumber(!editButtPhoneNumber)
            
        }
    }    

    return(
        <div className={styles.EditUserPage}>
            {user?
            <>
            <h1 className={styles.titles}>Login & Security</h1>
            <form>
                <section>Username: <button name='editButtName' onClick={handleEditClick} className={styles.editButt}>Edit</button>
                    <div className={styles.sectionHeader}>

                    <h4>{user.name}</h4>
                    </div>
                    {editButtName?
                    <input type='text'/>
                    :
                    <></>
                }
                </section>
                <section>Email:  <button name='editButtEmail' onClick={handleEditClick} className={styles.editButt}>Edit</button>
                    <div className={styles.sectionHeader}>

                <h4>{user.email}</h4>
                    </div>
                    {editButtEmail?
                    <input type='text'/>
                    :
                    <></>
                }
                </section>
                <section>Password: <button name='editButtPassword' onClick={handleEditClick} className={styles.editButt}>Edit</button>
                    <div className={styles.sectionHeader}>

                <h4>{user.password}</h4>
                    </div>
                    {editButtPassword?
                    <input type='text'/>
                    :
                    <></>
                }
                </section>
                <section>Phone Number: <button name='editButtPhoneNumber' onClick={handleEditClick} className={styles.editButt}>Edit</button>
                    <div className={styles.sectionHeader}>

                <h4>{user.phoneNumber}</h4>
                    </div>
                    {editButtPhoneNumber?
                    <input type='text'/>
                    :
                    <></>
                }
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