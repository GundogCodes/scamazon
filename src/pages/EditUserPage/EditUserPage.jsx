import styles from './EditUserPage.module.scss'
import {useState} from 'react'
export default function EditUserPage(){
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