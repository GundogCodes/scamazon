import styles from './EditUserPage.module.scss'
import {useState, useRef} from 'react'
import { updateUserInfo } from '../../utilities/users-api.cjs'
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

     function handleSubmit(){

        console.log('submitted')
    }
    

    function handleEditClick(){
        setShowInput(!showInput)
    }    

    return(
        <div className={styles.EditUserPage}>
            <h1>Login & Security</h1>
            <h2>Edit Info</h2>
            <form onSubmit={handleSubmit} >
                <div className={styles.editDiv}>
                    <div className={styles.heading}>

                <label>Name:</label>
                <label>{user.name}</label>
                <button onClick={handleEditClick}>Edit</button>
                
                    </div>
                {showInput?
                <div className={styles.showInputDiv}>
                <input  defaultValue={user.name}  type='text' name='name' onChange={handleChange}  required/>
                {/* <button onClick={handleDoneButton} name='name'className={styles.doneButt}>Done</button> */}
                </div>
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
                <div className={styles.showInputDiv}>
                <input defaultValue={user.email} type='text' name='email' onChange={handleChange} required/>
                {/* <button onClick={handleDoneButton} name='email' className={styles.doneButt}>Done</button> */}
                </div>
                :
                <></>
            }
                </div>
                
                <div className={styles.editDiv}>
                    <div className={styles.heading}>

                <label>New Password:</label>
                <label>{user.password||''}</label>
                <button onClick={handleEditClick}>Edit</button>
                
                    </div>
                {showInput?
                <div className={styles.showInputDiv}>
                <input type='text' name='password' onChange={handleChange} required/>
                {/* <button onClick={handleDoneButton} name='password' className={styles.doneButt}>Done</button> */}
                </div>
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
                <div className={styles.showInputDiv}>
                <input type='text' name='phoneNumber' onChange={handleChange}  />
                {/* <button onClick={handleDoneButton} name='phoneNumber' className={styles.doneButt}>Done</button> */}
                </div>
                :
                <></>
            }
                </div>
                <button  type='submit'>Submit Changes</button>
            </form>
        </div>
    )
}