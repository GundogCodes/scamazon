import styles from './EditUserPage.module.scss'

export default function EditUserPage(){
    return(
        <div className={styles.EditUserPage}>
            <h1>Login & Security</h1>
            <form >
                <label>Name:</label>
                <input type='text' name='name' required/>
                <label>E-mail:</label>
                <input type='text' name='email' required/>
                <label>Password: </label>
                <input type='text' name='password' required/>
                <label>Primary mobile number:</label>
                <input type='text' name='phoneNumber' required/>
                <button type='submit'>Done</button>
            </form>
        </div>
    )
}