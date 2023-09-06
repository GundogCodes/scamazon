import styles from './EditUserPage.module.scss'
import {useState} from 'react'
export default function EditUserPage({user, setUser}){
    console.log('user ',user)
    const [showInput, setShowInput] = useState(false)
    function handleEditClick(){
        setShowInput(!showInput)
    }    

    return(
        <div className={styles.EditUserPage}>
            <h1>Login & Security</h1>
            <h2>Edit Info</h2>
            <form >
                <div className={styles.editDiv}>
                    <div className={styles.heading}>

                <label>Name:</label>
                <label>{user.name}</label>
                <button onClick={handleEditClick}>Edit</button>
                
                    </div>
                {showInput?
                <input type='text' name='name' required/>
                :
                <></>
            }
                </div>
                
                <div className={styles.editDiv}>
                    <div className={styles.heading}>

                <label>E-mail:</label>
                <label>{user.email}</label>
                <button onClick={handleEditClick}>Edit</button>
                
                    </div>
                {showInput?
                <input type='text' name='email' required/>
                :
                <></>
            }
                </div>
                
                <div className={styles.editDiv}>
                    <div className={styles.heading}>

                <label>Password:</label>
                <label>{user.password}</label>
                <button onClick={handleEditClick}>Edit</button>
                
                    </div>
                {showInput?
                <input type='text' name='password' required/>
                :
                <></>
            }
                </div>
                
                <div className={styles.editDiv}>
                    <div className={styles.heading}>

                <label>Primary mobile phone:</label>
                <label>{user.phoneNumber}</label>
                <button onClick={handleEditClick}>Edit</button>
                
                    </div>
                {showInput?
                <input type='text' name='phoneNumber' required/>
                :
                <></>
            }
                </div>
                <button type='submit'>Done</button>
            </form>
        </div>
    )
}